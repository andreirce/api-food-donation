import { Donation } from "../models/donation.model.js"
import { getDonorById } from "./donor.controller.js"
import { getRequestById } from "./request.controller.js"



let listDonation = []

export const createDonation = (req,res) => {
    const { id_request, id_donor, type_food, quantity, validity } = req.body

    const requestExists = getRequestById(id_request)
    const donorExists = getDonorById(id_donor)

    if (!requestExists) {
        return res.status(404).json({ error: "Pedido não encontrado" })
    }

    if(!donorExists) {
        return res.status(404).json({ error: "Doador não encontrado" })
    }

    const newDonation = new Donation(id_request, id_donor, type_food, quantity, validity)
    const validationMessage = newDonation.verifyValidate()

        if (validationMessage) {
            return res.status(400).json({ error: validationMessage })
        } else {
            listDonation.push(newDonation)
            return res.status(201).json({newDonation})
        }
}


export const getAllDonation = (req,res) => {
    return res.status(200).json({listDonation})
}


export const getDonationsDonor = (req, res) => {
    const { id } = req.params
    const donations = listDonation.filter(donation => donation.id_donor == id)
    return res.status(200).json({donations})
}
 