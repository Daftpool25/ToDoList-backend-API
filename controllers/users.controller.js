const { users } = require("../models/users");
const jwt =require("jsonwebtoken");
const bcrypt=require("bcrypt")
const { ENV } = require("../utils/config");

const loginUser= async (req,res) => {

    const {password, email}=req.body;

    try {
        const user = await  users.findOne({where:{email: email}})
        if(user){

            //bcrypt Autentication
            const passwordCorrect= await bcrypt.compare(password,user.password) 
            if(passwordCorrect) {

                //JWT
                const userForToken={
                    userName:user.userName,
                    id:user.id
                }

                const token=jwt.sign(userForToken,ENV.SECRET)

                res.send({
                    user,
                    token
                })

            }else{
                return res.status(404).json({message:"Wrong password"})
            }
        }else{
            return res.status(401).json({message:"User doesn´t exist"})
        }

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
} 

const registerUser = async (req,res) => {
    console.log(req.body)
    
    try {
        const {email,password,userName}=req.body

        //Password cript
        const saltRounds = 10;
        const passwordHash= await bcrypt.hash(password,saltRounds)
        
        if(email!=="" && password!=="" && userName!==""){

            //ALREAY EXIST?
            const userAlreadyExist= await users.findOne({where:{email:email}});
            if(userAlreadyExist){
                return res.status(503).json({message:"User already exist"})
            }else{
                const newUser = await users.create({
                    email,
                    password:passwordHash,
                    userName
                })
                console.log("Estoy aqui")
               return res.send(newUser)
            }

        }
        return res.status(502).json({message:"Fields are required"})


    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports={loginUser,registerUser}