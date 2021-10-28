import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { router } from './routes'
import { midErr } from './middlewares'

const { PORT = 3001 } = process.env

const app = express()

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json())

app.use(router)

app.use(midErr)

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
