import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema =  new Schema ({
    name : {
        type : String,
        required :[true,'userName is required'],
        min :[2,'min length is 2'],
        max :[50,'max length is 50']
    },
    email : {
        type : String,
        required :[true,'email is required'],
        unique : [true,'email is unique']
    },
    password :{
        type : String,
        required :[true,'password is required'],
    },
  status : {
    type : String ,
    default : 'Offline',
    enum : ['Offline','Online']
  },
  role : {
    type : String ,
    default : 'User',
    enum : ['User','Admin']
  },
  confirmPassword :{
    type : Boolean,
    default : false
},
image :{
type : Object
}
})

const User = mongoose.model('User',userSchema)
export default User