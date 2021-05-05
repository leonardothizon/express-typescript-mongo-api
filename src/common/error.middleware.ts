import HttpException from './http-exception';
import { Request, Response, NextFunction } from 'express';
import { APILogger } from '../logger/api.logger';

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error) {
    const logger = new APILogger();
    logger.error(error);
    const status = error.statusCode || error.status || 500;
    response.status(status).send(error);
  } else {
    next();
  }
};
