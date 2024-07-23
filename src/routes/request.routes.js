import { Router } from "express";
import { createRequest, getAllRequest, getRequestUser } from "../controllers/request.controller.js";

const requestRouter = Router()


requestRouter.post("/request", createRequest)

requestRouter.get("/request", getAllRequest)

requestRouter.get("/request/:id", getRequestUser)

export { requestRouter }