

import joi from 'joi'
const signupValidation = joi.object({
    name: joi.string() .min(2).max(50).required(),
    email: joi.string().email().required(),
    password : joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/).required(),
    confirmPassword:joi.boolean().default('false'),
    status : joi.string().valid('Offline', 'Online').default('Offline'),
    role: joi.string().valid('User', 'Admin').default('User'),
      
  })
    
    export default signupValidation
 



    


