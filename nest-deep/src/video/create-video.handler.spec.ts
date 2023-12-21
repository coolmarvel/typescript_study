import { EventBus } from '@nestjs/cqrs';
import { CreateVideoHandler } from './create-video.handler';
import { Test } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { User } from 'src/user/entity/user.entity';
import { Video } from './entity/video.entity';
import { CreateVideoCommand } from './command/create-video.command';

class Manager {
  async findOneBy(user: User, where: { id: string }) {
    return;
  }

  async create(video: Video, options: { title: string; mimetype: string; user: User }) {
    return video;
  }

  async save(video: Video) {
    return video;
  }
}

class QueryRunner {
  manager: Manager;

  constructor(manager: Manager) {
    this.manager = manager;
  }

  async startTransaction() {
    return;
  }

  async commitTransaction() {
    return;
  }

  async rollbackTransaction() {
    return;
  }

  async release() {
    return;
  }
}

describe('CreateVideoHandler', () => {
  let createVideoHandler: CreateVideoHandler;
  let eventBus: jest.Mocked<EventBus>;

  const videoId = '7bf7a939-a6ae-4629-a179-c3bedcd8ef16';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateVideoHandler,
        { provide: DataSource, useValue: { createQueryRunner: jest.fn().mockReturnValue(new QueryRunner(new Manager())) } },
        { provide: EventBus, useValue: { publish: jest.fn() } },
      ],
    }).compile();

    createVideoHandler = module.get(CreateVideoHandler);
    eventBus = module.get(EventBus);
  });

  describe('execute', () => {
    it('should execute CreateVideoHandler', async () => {
      // Given

      // When
      await createVideoHandler.execute(new CreateVideoCommand(videoId, 'test', 'video/mp4', 'mp4', Buffer.from('')));

      // Then
      expect(eventBus.publish).toBeCalledTimes(1);
    });
  });
});
