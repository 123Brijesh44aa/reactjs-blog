import User from '../models/User.model.js'
import bcrypt from "bcryptjs";
import { errorHandler } from '../utils/error.js'

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