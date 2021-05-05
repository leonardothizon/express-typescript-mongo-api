import HttpException from './http-exception';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger/api.logger';

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error) {
    logger.error(error);
    const status = error.statusCode || error.status || 500;
    response.status(status).send(error);
  } else {
    next();
  }
};
