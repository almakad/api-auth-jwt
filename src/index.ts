import 'reflect-metadata';
import express from 'express';
const env  = require('../env')

import './database/connect'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.listen(env.port, () => console.log(`Server started at http://localhost:${env.port}`))