import { Request } from "../models/Request.model.js"


let listRequest = []

export const createRequest = (id_user, type_food, quantity) => {
    const newRequest = new Request(id_user, type_food, quantity)
    listRequest.push(newRequest)
    return newRequest
}

export const getAllRequest = () => {
    return listRequest
}

export const getRequestUser = (idUser) => {
    return listRequest.filter(request => request.id_user == idUser)
}

export const getRequestById = (idRequest) => {
    return listRequest.find(request => request.id === idRequest)
}

