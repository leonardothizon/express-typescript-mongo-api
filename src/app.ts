import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import expressPinoLogger from 'express-pino-logger';
import { errorHandler } from './common/error.middleware';
import { logger } from './logger/api.logger';
import { connect, disconnect } from './config/db.config';

import UserRoutes from './routes/user.routes';

class App {
  public app: express.Application;

  private userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.repositorySetup();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(expressPinoLogger({ logger: logger }));
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
