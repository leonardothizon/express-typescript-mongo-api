import { Response } from 'express';
import { logger } from '../logger/api.logger';

enum response_status_codes {
  success = 200,
  bad_request = 400,
  internal_server_error = 500,
}

export interface IError {
  message: string;
  data: any;
}

export function successResponse(message: string, DATA: any, res: Response) {
  res.status(response_status_codes.success).json({
    STATUS: 'SUCCESS',
    MESSAGE: message,
    DATA,
  });
}

export function failureResponse(message: string, DATA: any, res: Response) {
  logger.error(message);
  res.status(response_status_codes.success).json({
    STATUS: 'FAILURE',
    MESSAGE: message,
    DATA,
  });
}

export function insufficientParameters(res: Response) {
  logger.error('insufficientParameters');
  res.status(response_status_codes.bad_request).json({
    STATUS: 'FAILURE',
    MESSAGE: 'Insufficient parameters',
    DATA: {},
  });
}

export function mongoError(err: any): never {
  logger.error(err);
  throw {
    message: 'Database error',
    data: err,
  } as IError;
}
