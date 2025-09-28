import path from 'path'
import express from 'express'
import { bootstrap } from './src/bootstrap.js'
import session from 'express-session'
import mongoSession from 'connect-mongodb-session'
import flash from 'express-flash'
import authRouter from './src/modules/auth/auth.routes.js'
import logInRouter from './src/modules/logIn/logIn.routes.js'
import registerRouter from './src/modules/register/register.routes.js'
import messageRouter from './src/modules/Message/message.routes.js'
import userRouter from './src/modules/User/user.routes.js'
import cors from 'cors'
let MongoDBStore = mongoSession(session)
const app = express()
var store = new MongoDBStore({
  uri: process.env.DB,
  collection: 'mySessions'
});
const port = process.env.PORT || 5000
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store 
}))
app.use(cors())
app.set("views",path.resolve() + "/views")
app.set("view engine","ejs")
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}))
app.use(authRouter)
app.use(logInRouter)
app.use(registerRouter)
app.use(messageRouter)
app.use(userRouter)
  app.use(flash())
bootstrap(app,express)
app.listen(port,()=> console.log(`example app listening on port ${port} `))
