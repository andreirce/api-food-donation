import { Request } from "../models/Request.model.js"


let listRequest = []

export const createRequest = (req, res) => {
    const { id_user, type_food, quantity } = req.body
    const newRequest = new Request(id_user, type_food, quantity)
    listRequest.push(newRequest)
    return res.status(201).json({newRequest})
}

export const getAllRequest = (req, res) => {
    return res.status(200).json({listRequest})
}

export const getRequestUser = (req, res) => {
    const { id } = req.params
    let getRequestUsers = listRequest.filter(request => request.id_user == id)
    return res.status(200).json({getRequestUsers})
}

export const getRequestById = (idRequest) => {
    return listRequest.find(request => request.id == idRequest)
}

