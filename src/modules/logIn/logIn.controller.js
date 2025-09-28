import User from "../../../database/models/User.js"
import catchError from "../../middleware/catchError.js"
import flash from "express-flash"

export const logIn = catchError(async(req,res,next)=>{
res.render('logIn.ejs',{session : null})
})

export const handleLogin = catchError(async(req,res,next)=>{
  let user = await User.findOne({email : req.body.email})
   if (!user || !user.password== req.body.password) 
     return res.redirect('/logIn')
     
req.session.isLoggedIn = true
req.session.userId = user._id
req.session.name= user.name

 res.redirect('/messages')  
  })

