const { users } = require("../models/users")

const loginUser= async (req,res) => {

    const {password, email}=req.body;

    try {
        const user = await  users.findOne({where:{email: email}})
        if(user){
            if( user.password === password){
                res.send(user)
            }else{
                return res.status(404).json({message:"Wrong password"})
            }
        }else{
            return res.status(404).json({message:"User doesn´t exist"})
        }

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
} 

const registerUser = async (req,res) => {
    
    try {
        const {email,password,userName}=req.body
        const newUser = await users.create({
            email,
            password,
            userName
        })
        res.send(newUser)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports={loginUser,registerUser}