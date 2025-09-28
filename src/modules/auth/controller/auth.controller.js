import catchError from "../../../middleware/catchError.js";


export const home = catchError(async(req,res,next)=>{
res.render('home.ejs',{session : req.session})
})