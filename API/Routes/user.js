import express from 'express'
import { login, profile, register, users } from '../Controllers/user.js';
import { Authenticated } from '../Middlewares/auths.js';
const router = express.Router();

//register user
router.post("/register", register)
router.post("/login", login);
router.get("/all", users)
router.get("/profile", Authenticated, profile)
export default router;