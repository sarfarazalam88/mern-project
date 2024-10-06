import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
   try {
      const { name, email, password, confirmPassword } = req.body;
      if (!name, !email, !password) {
         return res.status(400).json({ message: "all feild are require" });
      }
      if (password !== confirmPassword) {
         return res.status(400).json({ message: "password does't match" });
      }
      const user = await User.findOne({ email })
      if (user) {
         return res.status(401).json({ message: "email already exits" });
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const newUser = new User({
         name,
         email,
         password: hashPassword,
      })
      await newUser.save();
      res.status(201).json({
         message: "registered successfull", newUser,
         success: true
      });
   } catch (error) {
      console.log(error)
   }
}
//login
export const login = async (req, res) => {
   try {
      const { email, password, } = req.body;
      if (!email, !password) {
         return res.status(400).json({ message: "all feild are require" });
      }
      const user = await User.findOne({ email });
      if (!user) {
         return res.json({ message: "email does't exits", success: false });
      }
      const isMmatchPassword = await bcrypt.compare(password, user.password);
      if (!isMmatchPassword) return res.json({ message: "password does't match", success: false });

      
      const token = jwt.sign({ userId: user._id }, "@#$%%()*", {
         expiresIn: "365d"
      })
      res.json({ message: "logged successfull", token, isMmatchPassword })
   } catch (error) {
      console.log(error)
   }
}
//get all user
export const users = async (req, res) => {
   try {
      const users = await User.find().sort({ createdAt: -1 });
      res.json(users)
   } catch (error) {
      console.log(error)
   }
}



//get profile
export const profile = (req, res) => {
   res.json({ userId: req.user })
}