import express from "express";
export class App {
  private app: express.Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.use(express.json());
    this.app.use(express.static('public'));
  

  }

  public start(): void {
    
    
    
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
}