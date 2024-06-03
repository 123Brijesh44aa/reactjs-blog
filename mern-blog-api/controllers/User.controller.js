import { errorHandler } from '../utils/error.js'
import bcryptjs from 'bcryptjs'
import User from '../models/User.model.js'

export const test = (req,res) => {
    res.json(
      {
          message: "API is working!",
      }
    );
};

export const updateUser = async (req,res,next) => {
    if (req.user.id !== req.params.userId){
        return next(errorHandler(403,"You are not authorized to perform this action"));
    }
    if (req.body.password) {
        if (req.body.password.length < 8) {
            return next(errorHandler(400,"Password must be at least 8 characters long"));
        }
        req.body.password = await bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username){
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400,"Username must be between 7 and 20 characters long"));
        }
        if (req.body.username.includes(" ")){
            return next(errorHandler(400,"Username cannot contain spaces"));
        }
        if (req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400,"Username must be lowercase"));
        }
        if (!req.body.username.match(/^[a-z0-9]+$/)){
            return next(errorHandler(400,"Username must contain only letters and numbers"));
        }
    }

    if (req.body.email){
        // complete regex for email validation
        if (!req.body.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            return next(errorHandler(400,"Email is not valid"));
        }

        // regex for email starting with special characters
        if (req.body.email.match(/^[^a-zA-Z0-9]/)){
            return next(errorHandler(400,"Email cannot start with special characters"));
        }
    }

    try {
        const user = await User.findOne({username: req.body.username});
        if (user){
            return next(errorHandler(400,"Username is already taken"));
        }



        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
              $set: {
                  username: req.body.username,
                  email: req.body.email,
                  profilePicture: req.body.profilePicture,
                  password: req.body.password,
              },
          },
          {
              new: true,
          }
        );

        const {password, ...rest} = updatedUser._doc;
        res.status(200).json(rest);

    } catch (error) {
        return next(errorHandler(500,"Something went wrong"));
    }
}