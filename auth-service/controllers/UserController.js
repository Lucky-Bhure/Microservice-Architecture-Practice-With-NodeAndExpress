import User from "../models/User.js";
import userValidator from "../validator/userValidator.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export async function registerUser(req, res) {
    const result = userValidator.safeParse(req.body);
    if(!result.success)
        return res.status(400).json(result.error);

    try {
        const {username, email, password} = result.data;

        const existingUser = await User.findOne({email});
        if(existingUser) 
            return res.status(409).json({ message: "User already present"})

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({ message: "User created successfully"});         

    } catch (error) {
        console.log("Error while user registration", error);
        res.status(500).json({ message: "User registration failed"})        
    }
}

export async function login(req, res) {
    
    try {
        const {email, password} = req.body;
    
        if(!email || !password)
            return res.status(400).json({ message: "All fields are required"})

        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({ message: "User not found"});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            return res.status(400).json({ message: "Invalid password"});
        }

        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY)

        res.status(200).json({ 
            message: "Login successfully",
            token: accessToken
        });        
    } catch (error) {
        console.log("Error user login", error);
        res.status(500).json({ message: "Login failed"})        
    }
}

