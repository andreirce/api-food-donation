import { Router } from "express";
import { createUser, getAllUser, getUserByAddress } from "../controllers/user.controller.js";

const userRouter = Router()


userRouter.post("/user", (req, res) => {
    const { name, address, phone, email } = req.body
    let user = createUser(name, address, phone, email)
    res.status(201).json({user})
})

userRouter.get("/user", (req, res) => {
    let getUser = getAllUser()
    res.status(200).json({getUser})
})

userRouter.get("/user/address", (req, res) => {
    const { address } = req.body
    let getUserAddress = getUserByAddress(address)
    res.status(200).json({getUserAddress})
})


export { userRouter }