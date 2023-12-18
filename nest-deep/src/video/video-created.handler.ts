import { IEventHandler } from '@nestjs/cqrs';
import { VideoCreatedEvent } from './event/video.created.event';

export class VideoCreatedHandler implements IEventHandler<VideoCreatedEvent> {
  handle(event: VideoCreatedEvent) {
    console.info(`Video created(id: ${event.id})`);
  }
}
