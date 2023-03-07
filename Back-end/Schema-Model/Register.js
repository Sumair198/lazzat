import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const RegisterUser = new mongoose.Schema(
    {
        email: { type: String },
        password: { type: String },
        tokens:[{
            token:{ type: String , required:true}
        }]
    }
)
//token
RegisterUser.methods.generateAuthToken = async function()
{
    try{
        console.log(this._id.toString()) 
        const token = jwt.sign({_id:this._id.toString()}, "1234567890qwertyuiopasdfghjklzxcvbnm")
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token  
    }
    catch(error)
    {
        console.log('The catch part Error'+ error)
    }   
}

//middleware , 
RegisterUser.pre('save',async function(next)
{
    // console.log(`Current password is : ${this.password}`)
   this.password = await bcrypt.hash(this.password,10)
//    console.log(`After hashing password is : ${this.password}`)
    next()
})


//Model
const RegisterUserModel = mongoose.model('admin', RegisterUser)

export default RegisterUserModel;
//work
