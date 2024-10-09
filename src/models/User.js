import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  id: { type:mongoose.Schema.Types.ObjectId},
  email: {type:String, required: true}, 
  password: {type:String, required: true}
}, { versionKey: false });

const users = mongoose.model("users", usersSchema);

export default users