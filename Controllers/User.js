import {User} from '../Models/User.js';  
import bcrypt from 'bcrypt';
export const register = async (req, res) => {
    try {
        const {fullName, email , password} = req.body;
        if(!fullName || !email || !password) {
            return res.status(403).json({
                success : false,
                message : " all fields are required"
            })
        }

        const user = await User.findOne({email})
        if(user){
           return res.status(403).json({
            success : false, 
            message : "Email already exists"
           })
        }

        const hashedPassword = await bcrypt.hash(password,  10)
        await User.create({
            fullName,
            email, 
            password:hashedPassword
        })
        return res.status(201).json({
            success : true,
            message : "User registered successfully"
        })

        
    } catch (error) {
        console.log(error);
        
        
    }
};
// This is for login 

export const login = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(403).json({
                success : false,
                message : "All fields are required",
            })
        }
        const user = await User.findOne({email});

        if(!user){
            return res.status(403).json({
                success : false,
                message : "incorrect email or password",
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(403).json({
                success : false,
                message : "email or password not matched",
            });
        }
        return res.json({
            success : true,
            message : `Welcome back ${user.fullName}`
        })
        
    } catch (error) {
        
    }
}