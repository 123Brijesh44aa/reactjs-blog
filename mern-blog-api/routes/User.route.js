import express from 'express'
import { test, updateUser } from '../controllers/User.controller.js'
import { verifyUser } from '../utils/verifyUser.js'

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyUser, updateUser);

export default router;