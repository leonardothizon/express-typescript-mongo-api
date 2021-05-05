import { model, Schema, Model, Document } from 'mongoose';

export interface IUser {
  _id?: string;
  name: string;
  last_name: string;
  create_date?: string;
  updated_date?: string;
}

export interface IUserDocument extends Document {
  name: string;
  last_name: string;
  create_date: string;
  updated_date: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  create_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now },
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('users', UserSchema);

export default UserModel;
