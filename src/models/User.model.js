import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export class User {
    constructor(name, address, phone, email){
        this.id = uuidv4()
        this.name = name
        this.address = address
        this.phone = phone
        this.email = email
        this.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}