import { App } from './App';

class Server {
  private app: App;

  constructor() {
    this.app = new App();
  }

  public start(): void {
    this.app.start();
  }
}

const server = new Server();
server.start();
