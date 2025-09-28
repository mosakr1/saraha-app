import User from "../../../database/models/User.js"
import catchError from "../../middleware/catchError.js"

export const register = catchError(async(req,res,next)=>{
res.render('register.ejs',{session : null})
})


export const handleRegister = catchError(async(req,res,next)=>{
    let isUser = await User.findOne({email : req.body.email})
    if(isUser) {
     return res.redirect('/register')
    } 
    await User.insertMany(req.body)
    res.redirect('/login')
    })