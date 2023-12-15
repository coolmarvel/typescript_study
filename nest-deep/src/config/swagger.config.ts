import { registerAs } from '@nestjs/config';

export default registerAs('swagger', async () => ({
  user: process.env.SWAGGER_USER || 'coolmarvel',
  password: process.env.SWAGGER_PASSWORD || 'password1',
}));
