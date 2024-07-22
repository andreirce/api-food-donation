import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export class Request {
    constructor(id_user, type_food, quantity){
        this.id = uuidv4()
        this.id_user = id_user
        this.date_request = moment().format('YYYY-MM-DD HH:mm:ss')
        this.type_food = type_food
        this.quantity = quantity

    }
}