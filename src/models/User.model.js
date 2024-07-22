import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import { Address } from './Address.model.js'

export class User {
    constructor(name, address, phone, email){
        this.id = uuidv4()
        this.name = name
        this.address = new Address(
            address.street, 
            address.city, 
            address.state, 
            address.code
        )
        this.phone = phone
        this.email = email
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}