import { UserEntity } from 'src/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(UserEntity);

    await repository.insert([
      {
        username: 'marvel97',
        name: 'coolmarvel',
        password: '1234',
      },
    ]);
  }
}
