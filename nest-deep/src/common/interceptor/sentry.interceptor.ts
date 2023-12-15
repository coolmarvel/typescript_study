import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { IncomingWebhook } from '@slack/webhook';
import { Request } from 'express';
import { catchError } from 'rxjs';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const { url } = request;

    return next.handle().pipe(
      catchError((error) => {
        Sentry.captureException(error);
        const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK);
        webhook.send({
          attachments: [
            {
              text: 'NesteJS Project Error Occured',
              fields: [{ title: `Error message: ${error.response?.message || error.message}`, value: `URL: ${url}\n${error.stack}`, short: false }],
              ts: Math.floor(new Date().getTime() / 1000).toString(),
            },
          ],
        });

        throw error;
      }),
    );
  }
}
