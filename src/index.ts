import { config } from 'dotenv'
config()
import * as express from 'express'
import { apiControllers } from './api/controllers'

export const app = express()

app.use('/api', apiControllers)

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
