import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export class Donation {
    constructor(id_request, id_donor, type_food, quantity, validity){
        this.id = uuidv4()
        this.id_request = id_request
        this.id_donor = id_donor
        this.date_donation = moment().format("YYYY-MM-DD")
        this.type_food = type_food
        this.quantity = quantity
        this.validity = validity
    }

    verifyValidate() {
        const validityDate = moment(this.validity, "YYYY-MM-DD")
        const donationDate = moment(this.date_donation, "YYYY-MM-DD")

        if (donationDate.isAfter(validityDate)) {
            return "Não é possível fazer essa doação, alimento fora de validade"
        }
    }
} 