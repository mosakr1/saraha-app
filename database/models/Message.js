import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema ({
    message:{
        type : String,
        required : true
    },
    user:{
        type : Schema.Types.ObjectId,
    },
},{
    timestamps : true
})


const Message = mongoose.model.Message || model("Message",messageSchema)

export default Message;
