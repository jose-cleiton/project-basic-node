import express from 'express';
import cors from 'cors';
import { Routes } from './shared/http/routes';
import dotenv from 'dotenv';
import { Either, left, right } from './shared/errors/eithers';
import { HttpException } from './shared/errors/http-exception.error';
import StatusCode from './shared/errors/status-code.helper';
dotenv.config();

export class App {
  private app: express.Application;
  private readonly PORT: string | number;

  constructor() {
    this.app = express();
    this.PORT = process.env.APP_PORT || 3001;
    this.config();
  }

  private config(): void {
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.set('port', process.env.PORT || 3000);
    this.app.use('/', new Routes().router);
  }

  divide = (a: number, b: number): Either<HttpException, number> =>
    b === 0
      ? left(new HttpException(StatusCode.BAD_REQUEST, 'Cannot divide by zero'))
      : right(a / b);

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Example app listening at http://localhost:${this.PORT}`);
    });
  }
}
