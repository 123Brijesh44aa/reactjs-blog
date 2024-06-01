import User from '../models/User.model.js'
import bcrypt from "bcryptjs";
import { errorHandler } from '../utils/error.js'
import jwt from "jsonwebtoken";
import { configDotenv } from 'dotenv'

configDotenv();


const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req,res,next) => {

    try {
        const { username, email, password } = req.body;

        // Check if all fields are filled
        if (password === '' || email === '' || username === '' || !password ||
          !email || !username) {
            next(errorHandler( 400, 'All fields are required'));
        }

        // Check if email is in a valid format
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            next(errorHandler(400, 'Invalid email format'));
        }

        // Check if password meets security requirements
        if (password.length < 8) {
           next(errorHandler(400, 'Password must be at least 8 characters'));
        }

        // check if email already exists
        const user = await User.findOne({email});

        if(user){
            next(errorHandler(400, 'Email already exists'));
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new User(
          {
              username,
              email,
              password: hashedPassword
          }
        );

        await newUser.save();

        res.json(
          {
              success: true,
              message: "User created successfully"
          }
        )
    } catch (error){
        next(error);
    }
}

export const signin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password || email === '' || password === ''){
            next(errorHandler(400, "All fields are required"));
            return;
        }
        const validUser = await User.findOne({email});
        if (!validUser){
            next(errorHandler(404, "User not found"));
            return;
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword){
            next(errorHandler(400, "Invalid Credentials"));
            return;
        }

        // after all checks are passed, generate token
        const token = jwt.sign(
          { id: validUser._id },
          JWT_SECRET,
          // { expiresIn: '1d' }
        );

        const { password: userPassword, ...user } = validUser._doc;

        res.status(200).cookie("access_token", token, {
            httpOnly: true,
            sameSite: 'none'
        }).json(
          {
              success: true,
              message: "User logged in successfully",
              user: user,
          }
        )
    } catch (error){
        next(error);
    }
}



export const google = async (req,res,next) => {
    try {
        const {email, name, googlePhotoUrl} = req.body;
        const user = await User.findOne({email});
        if (user){
            const token = jwt.sign(
              {id: user._id},
              JWT_SECRET,
            );
            const {password, ...user} = user._doc;
            res.status(200).cookie("access_token", token, {
                httpOnly: true,
                sameSite: 'none'
            }).json(
              {
                  success: true,
                  message: "User logged in successfully",
                  user: user,
              }
            )
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User(
              {
                  username: name.toLowerCase().split(" ").join("") + Math.random().toString(9).slice(-4),
                  email,
                  password: hashedPassword,
                  profilePicture: googlePhotoUrl,
              }
            );
            await newUser.save();
            const token = jwt.sign(
              {id: newUser._id},
              JWT_SECRET,
            );
            const {password, ...user} = newUser._doc;
            res.status(200).cookie("access_token", token, {
                httpOnly: true,
                sameSite: 'none'
            }).json(
              {
                  success: true,
                  message: "User created successfully",
                  user: user,
              }
            )
        }
    } catch (error){
        next(error);
    }
}