import { Router } from "express";
import { home } from "./controller/auth.controller.js";

const authRouter = Router()

authRouter
.get('/',home)
export default authRouter