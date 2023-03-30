import express, { Router, Request, Response } from 'express';

export class Routes {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  private routes(): void {
    this.router.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });
  }
}
