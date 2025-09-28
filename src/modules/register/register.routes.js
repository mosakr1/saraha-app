import { Router } from "express";
import { handleRegister, register } from "./register.controller.js";
import validation from "../../middleware/validation.js";
import signupValidation from "./register.validation.js";
const registerRouter = Router()

registerRouter
.get('/register',register)
.post('/handleRegister',handleRegister)
export default registerRouter