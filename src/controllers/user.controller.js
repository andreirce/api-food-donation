import { User } from "../models/User.model.js"

let listUser = []


export const createUser = (req, res) => {
    const { name, address, phone, email } = req.body
    const newUser = new User(name, address, phone, email)
    listUser.push(newUser)
    return res.status(201).json({newUser})
}


export const getAllUser = (req, res) => {
    return res.status(200).json({listUser})
}

export const getUserByCode = (req, res) => {
    const { address } = req.body

    if (!address || !address.code) {
        return res.status(400).json({ error: "O CEP é obrigatório" })
    }

    const users = listUser.filter(user => user.address.code === address.code)

    if (users.length === 0) {
        return res.status(404).json({ message: "Nenhum usuário encontrado no CEP fornecido" })
    }

    return res.status(200).json({ users })
}