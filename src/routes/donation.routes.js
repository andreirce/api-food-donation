import { Router } from "express";
import { createDonation, getAllDonation, getDonationsDonor } from "../controllers/donation.controller.js";

const donationRouter = Router()


donationRouter.post("/donation", (req, res) => {
    const { id_request, id_donor, type_food, quantity, validity } = req.body
    let donation = createDonation(id_request, id_donor, type_food, quantity, validity)
    res.status(201).json({donation})
})

donationRouter.get("/donation", (req, res) => {
    let getDonation = getAllDonation()
    res.status(200).json({getDonation})
})

donationRouter.get("/donation/:id", (req, res) => {
    const { id } = req.params
    let getDonationDonor = getDonationsDonor(id)
    res.status(200).json({getDonationDonor})
})
 
export { donationRouter } 