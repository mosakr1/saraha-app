import { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const dbconn = connect(process.env.DB).then(()=>{
    console.log("database connected successfully");
}).catch(()=>{
    console.log("database connected failed");
})
export default dbconn