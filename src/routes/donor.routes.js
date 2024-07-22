import { Router } from "express";
import { createDonor, getAllDonor } from "../controllers/donor.controller.js";

const donorRouter = Router()


donorRouter.post("/donor", (req, res) => {
    const { name, address, phone, email, category } = req.body
    let donor = createDonor(name, address, phone, email, category)
    res.status(201).json({donor})
})


donorRouter.get("/donor", (req, res) => {
    let getDonor = getAllDonor()
    res.status(200).json({getDonor})
})
 
export { donorRouter }