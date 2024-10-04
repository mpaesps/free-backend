import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  id: { type:mongoose.Schema.Types.ObjectId},
  email: {type:String}, 
  password: {type:String}
});