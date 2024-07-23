import { Router } from "express";
import { createUser, getAllUser, getUserByCode } from "../controllers/user.controller.js";

const userRouter = Router()


userRouter.post("/user", createUser)

userRouter.get("/user", getAllUser)

userRouter.get("/user/address", getUserByCode)


export { userRouter }