import { Router } from "express";
import { createDonation, getAllDonation, getDonationsDonor } from "../controllers/donation.controller.js";

const donationRouter = Router()


donationRouter.post("/donation", createDonation)

donationRouter.get("/donation", getAllDonation)

donationRouter.get("/donation/:id", getDonationsDonor)
 
export { donationRouter } 