import { Router } from 'express';
import UserController from '../controllers/user.controller';

export default class UserRoutes {
  private router: Router = Router();
  private userController: UserController = new UserController();

  public route(): Router {
    this.router.get('/', this.userController.listUsers);
    this.router.post('/', this.userController.createUser);

    return this.router;
  }
}
