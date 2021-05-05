import UserModel, { IUser } from '../models/user.model';

export default class UserRepository {
  public async findUsers(query: any): Promise<IUser[] | null> {
    return await UserModel.find(query);
  }

  public async createUser(user_params: IUser): Promise<IUser> {
    const _session = new UserModel(user_params);
    return await _session.save();
  }

  public async filterUser(query: any): Promise<IUser | null> {
    return await UserModel.findOne(query);
  }

  public async updateUser(user_params: IUser) {
    const query = { _id: user_params._id };
    await UserModel.findOneAndUpdate(query, user_params);
  }

  public async deleteUser(_id: String) {
    const query = { _id: _id };
    await UserModel.deleteOne(query);
  }
}
