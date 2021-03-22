import { Document, Schema, model } from 'mongoose';

interface UserTypes extends Document {}

const UserSchema = new Schema(
  {},
  {
    _id: true,
    minimize: true,
    timestamps: true,
  },
);

export default model<UserTypes>('users', UserSchema);
