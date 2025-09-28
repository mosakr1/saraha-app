import userRouter from "./modules/User/user.routes.js";
import authRouter from "./modules/auth/auth.routes.js";
import AppError from "./utils/Error.js";
import globalError from "./middleware/globalErrors.js";
import dbconn from "../database/dbConnection.js";
import registerRouter from "./modules/register/register.routes.js";
import logInRouter from "./modules/logIn/logIn.routes.js";
import messageRouter from "./modules/Message/message.routes.js";
export const bootstrap =(app,express)=>{
    process.on("uncaughtException", (err) => {
        console.log(err);
      });
app.use(express.json())
dbconn
app.use('/uploads',express.static('uploads'))
app.use('/user',userRouter)
app.use ('/messages',messageRouter)
app.use('/auth',authRouter)
app.use('/register',registerRouter)
app.use('/logIn',logInRouter)
app.use("*", (req, res, next) => {
    next(new AppError("route not found", 400));
  });
  process.on("unhandledRejection", (err) => {
    console.log(err);
  });
  app.use(globalError);

}

