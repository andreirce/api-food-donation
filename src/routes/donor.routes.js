import { Router } from "express";
import { createDonor, getAllDonor } from "../controllers/donor.controller.js";

const donorRouter = Router()


donorRouter.post("/donor", createDonor)

donorRouter.get("/donor", getAllDonor)
 
export { donorRouter }