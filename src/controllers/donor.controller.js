import { Donor } from "../models/Donor.model.js"

let listDonor = []


export const createDonor = (req, res) => {
    const { name, address, phone, email, category } = req.body
    const newDonor = new Donor(name, address, phone, email, category)
    listDonor.push(newDonor)
    return res.status(201).json({newDonor})
}

export const getAllDonor = (req, res) => {
    return res.status(200).json({listDonor})
}

export const getDonorById = (idDonor) => {
    return listDonor.find(donor => donor.id == idDonor)
} 