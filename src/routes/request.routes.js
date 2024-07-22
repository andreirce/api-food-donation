import { Router } from "express";
import { createRequest, getAllRequest, getRequestUser } from "../controllers/request.controller.js";

const requestRouter = Router()


requestRouter.post("/request", (req, res) => {
    const { id_user, type_food, quantity } = req.body
    let request = createRequest(id_user, type_food, quantity)
    res.status(201).json({request})
})

requestRouter.get("/request", (req, res) => {
    let getRequest = getAllRequest()
    res.status(200).json({getRequest})
})

requestRouter.get("/request/:id", (req, res) => {
    const { id } = req.params
    let getRequestUsers = getRequestUser(id)
    res.status(200).json({getRequestUsers})
})

export { requestRouter }