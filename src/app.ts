import express from 'express'
import 'dotenv/config'
import { router } from './routes'
import { midErr } from './middlewares'

const { PORT = 3000 } = process.env

const app = express()

app.use(express.json())

app.use(router)

app.use(midErr)

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
