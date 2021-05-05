import { Request, Response } from 'express';
import {
  failureResponse,
  IError,
  insufficientParameters,
  successResponse,
} from '../common/response.utils';
import { IUser } from '../models/user.model';
import UserService from '../services/user.service';

class UserController {
  private userService: UserService = new UserService();

  listUsers = async (req: Request, res: Response) => {
    try {
      const users: IUser[] | null = await this.userService.findUsers();
      successResponse('', users, res);
    } catch (error: any) {
      if ((error as IError).data) {
        failureResponse(error.message, error.data, res);
      } else {
        failureResponse('Internal error', error, res);
        console.log(error);
      }
    }
  };

  createUser = async (req: Request, res: Response) => {
    const { name, last_name }: IUser = req.body;

    if (!name || !last_name) {
      insufficientParameters(res);
      return;
    }

    try {
      const newUser: IUser = await this.userService.createUser({
        name,
        last_name,
      });
      successResponse('User successfully created', newUser, res);
    } catch (error: any) {
      if ((error as IError).data) {
        failureResponse(error.message, error.data, res);
      } else {
        failureResponse('Internal error', error, res);
      }
    }
  };
}

export default UserController;
