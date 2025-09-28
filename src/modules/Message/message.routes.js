import { Router } from "express";
import { messages } from "./controller/message.controller.js";

const messageRouter = Router()

messageRouter
.get('/messages',
    messages

)

export default messageRouter