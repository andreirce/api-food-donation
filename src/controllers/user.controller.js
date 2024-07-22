import { User } from "../models/User.model.js"

let listUser = []


export const createUser = (name, address, phone, email) => {
    const newUser = new User(name, address, phone, email)
    listUser.push(newUser)
    return newUser
}


export const getAllUser = () => {
    return listUser
}


export const getUserByAddress = (address) => {
    const normalizedAddress = address.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
    
    return listUser.filter(user => {
        const normalizedUserAddress = user.address.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
        return normalizedUserAddress.includes(normalizedAddress)
    })
}
