import { Router } from "express";
import { handleLogin, logIn, } from "./logIn.controller.js";

const logInRouter = Router()

logInRouter
.get('/login',
    logIn
)
.post('/handleLogin',handleLogin)
export default logInRouter