import mongoose from "mongoose";

//using timestamps to automatically manage createdAt and updatedAt fields
const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    password: { 
        type: String,
        required: true 
    },
    name: { 
        type: String,
        required: true 
    },
    lastLogin: { 
        type: Date,
        default: Date.now 
    },
    isVerified: { 
        type: Boolean,
        default: false 
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
}, { timestamps: true });


export const User = mongoose.model("User", userSchema);