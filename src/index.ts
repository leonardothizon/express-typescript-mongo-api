import * as dotenv from 'dotenv';
import app, { logger } from './app';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);  
});
