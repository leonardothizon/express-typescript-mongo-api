import { IError, mongoError } from '../common/response.utils';
import { IUser } from '../models/user.model';
import UserRepository from '../repositories/user.repository';

class UserService {
  private userRepository: UserRepository = new UserRepository();

  public async findUsers(query: any = {}): Promise<IUser[] | null> {
    try {
      return await this.userRepository.findUsers(query);
    } catch (error) {
      mongoError(error);
    }
  }

  public async createUser(user: IUser): Promise<IUser | never> {
    try {
      return await this.userRepository.createUser(user);
    } catch (error) {
      mongoError(error);
    }
  }

  public async filterUser(query: any = {}): Promise<IUser | null> {
    try {
      return await this.userRepository.filterUser(query);
    } catch (error) {
      mongoError(error);
    }
  }

  public async updateUser(user_params: IUser) {
    try {
      await this.userRepository.updateUser(user_params);
    } catch (error) {
      mongoError(error);
    }
  }

  public async deleteUser(_id: String) {
    try {
      await this.userRepository.deleteUser(_id);
    } catch (error) {
      mongoError(error);
    }
  }
}

export default UserService;
