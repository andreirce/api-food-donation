import express from 'express'
import { userRouter } from './routes/user.routes.js'
import { donorRouter } from './routes/donor.routes.js'
import { donationRouter } from './routes/donation.routes.js'
import { requestRouter } from './routes/request.routes.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(userRouter)
app.use(donorRouter)
app.use(donationRouter)
app.use(requestRouter)

 
app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
})


