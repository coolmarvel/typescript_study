import { Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LogginMiddleware implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;

    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = req;
      const responseTime = Date.now() - startTime;

      this.logger.log(
        `[${method}] ${originalUrl} ${statusCode} - ${responseTime}ms`,
      );
    });

    next();
  }
}
