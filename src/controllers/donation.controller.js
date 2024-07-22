import { Donation } from "../models/donation.model.js"
import { getRequestById } from "./request.controller.js"



let listDonation = []

export const createDonation = (id_request, id_donor, type_food, quantity, validity) => {
    const requestExists = getRequestById(id_request)

    if (!requestExists) {
        return { error: "Pedido não encontrado" }
    }

    const newDonation = new Donation(id_request, id_donor, type_food, quantity, validity)
    const validationMessage = newDonation.verifyValidate()

        if (validationMessage) {
            return { error: validationMessage }
        } else {
            listDonation.push(newDonation)
            return newDonation
        }
}


export const getAllDonation = () => {
    return listDonation
}


export const getDonationsDonor = (idDonor) => {
    return listDonation.filter(donation => donation.id_donor == idDonor)
}
