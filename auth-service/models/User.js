import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: 6,
        maxlenght: 18,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

export default User;