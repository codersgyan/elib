import express from "express";
import { createUser } from "./userController";

const userRouter = express.Router();

// routes
userRouter.post("/register", createUser);

export default userRouter;
