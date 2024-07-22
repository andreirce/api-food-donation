import { Donor } from "../models/Donor.model.js"

let listDonor = []


export const createDonor = (name, address, phone, email, category) => {
    const newDonor = new Donor(name, address, phone, email, category)
    listDonor.push(newDonor)
    return newDonor
}

export const getAllDonor = () => {
    return listDonor
}