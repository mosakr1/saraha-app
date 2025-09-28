import catchError from "../../../middleware/catchError.js"
import Message from "../../../../database/models/Message.js"

export const user = catchError(async(req,res,next)=>{
res.render('user.ejs', {userId : req.params.id,session : null})
})

export const sendMsg = catchError(async(req,res,next)=>{
  req.body.user=req.params.id
   await  Message.insertMany(req.body)
  res.redirect('/user/'+ req.params.id)
  })

  export const logout = catchError(async(req,res,next)=>{
    req.session.destroy(function(err) {
      res.redirect('/login')
    })
  })