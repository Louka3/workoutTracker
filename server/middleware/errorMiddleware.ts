import { Request, Response, NextFunction } from 'express';
import { ServerError } from '../types/serverErrorTypes';

// A default error that, if not overwritten, will be thrown if something
// goes wrong on the server
export const errorMiddleware = (
  error: ServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const defaultError: ServerError = {
    log: 'Express error handler caught unknown middleware error in server.ts',
    status: 400,
    message: { err: 'An error occurred, throwing the default error log' },
  };
  const errorObj: ServerError = Object.assign(defaultError, error);
  console.error(errorObj.log);

  res.status(errorObj.status).json(errorObj.message);
};
