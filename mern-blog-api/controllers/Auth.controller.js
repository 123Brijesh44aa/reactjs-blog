import User from '../models/User.model.js'
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {

    try {
        const { username, email, password } = req.body;

        // Check if all fields are filled
        if (password === '' || email === '' || username === '' || !password ||
          !email || !username) {
            return res.status(400).json(
              {
                  success: false,
                  message: 'All fields are required',
              },
            )
        }

        // Check if email is in a valid format
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json(
              {
                  success: false,
                  message: 'Invalid email format',
              },
            )
        }

        // Check if password meets security requirements
        if (password.length < 8) {
            return res.status(400).json(
              {
                  success: false,
                  message: 'Password should be at least 8 characters long',
              },
            )
        }

        // check if email already exists
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json(
              {
                  success: false,
                  message: "Email already exists! Please Register with another email address."
              }
            )
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
        res.json(
          {
                success: false,
                message: "An error occurred. Please try again later."
          }
        )
    }
}