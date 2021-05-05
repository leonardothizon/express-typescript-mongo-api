import * as dotenv from 'dotenv';
import app from './app';
import { logger } from './logger/api.logger';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);  
});
