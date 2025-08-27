import express from 'express'
import mongoose, { Schema,Document,Model } from 'mongoose'
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId,
  username: string,
  email: string,
  password: string,
  createdAt?: Date
}
const userSchema:Schema<IUser> = new Schema({
username : {
    type: String,
    required: true
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true
}
},{
  timestamps: true 
});

const User:Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User; 