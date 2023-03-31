import { NextFunction, Request, Response } from 'express';
import StatusCodes from './status-code.helper';
import { HttpException } from './http-exception.error';

export class ErrorHandler {
  public static handle(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (res.headersSent) {
      return next(err);
    }

    console.error(err); // Faça log do erro para fins de depuração

    const status =
      err instanceof HttpException
        ? err.status
        : StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ message });
  }
}
