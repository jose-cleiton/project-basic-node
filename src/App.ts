import express from 'express';
import cors from 'cors';
import { Routes } from './shared/http/routes';
import dotenv from 'dotenv';
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

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Example app listening at http://localhost:${this.PORT}`);
    });
  }
}
