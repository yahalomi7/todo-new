import express from 'express'
import mongoose, { Schema } from 'mongoose'
const userSchema = new mongoose.Schema({
username : {
    type :String,
    require:true
},
email:{
  type: String,
  require:true,
  unique: true
},
password:{
    type: String,
    require:true
}
},{
  timestamps: true // fixed 'timestamp' (undefined variable) to 'timestamps: true'
});

const User = mongoose.model('User', userSchema);

export default User; 