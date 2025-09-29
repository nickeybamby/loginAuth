import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({id: userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });    
    
    //set cookie
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", //cookie only works in https
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    });

    return token;
};