import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './common/error.middleware';
import { APILogger } from './logger/api.logger';
import { connect, disconnect } from './config/db.config';

import UserRoutes from './routes/user.routes';

class App {
  public app: express.Application;
  public logger: APILogger;

  private userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.repositorySetup();
    this.middlewares();
    this.routes();
    this.logger = new APILogger();
  }

  private middlewares(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(errorHandler);
  }

  private routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World');
    });

    this.app.use('/users', this.userRoutes.route());

    this.app.use('*', (req: Request, res: Response) => {
      res.status(400).send('Resource not found.');
    });
  }

  private repositorySetup(): void {
    connect();
    this.app.on('exit', () => {
      disconnect();
    });
  }
}

const Application = new App();
export default Application.app;
export const logger = Application.logger;
