import { registerAs } from '@nestjs/config';

export default registerAs('swagger', async () => ({
  user: process.env.SWAGGER_USERNAME || 'marvel97',
  password: process.env.SWAGGER_PASSWORD || '1234',
}));
