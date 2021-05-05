import pino from 'pino';

const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';

export const logger = pino({
  name: 'app-name',
  level: LOG_LEVEL,
});
