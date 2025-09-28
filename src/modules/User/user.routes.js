import { Router } from "express";
import { logout, sendMsg, user } from "./controller/user.controller.js";

const userRouter = Router()

userRouter.get('/user/:id',user)
.post('/sendMsg/:id',sendMsg)
.get("/logout",logout)
export default userRouter