// const express = require('express')
import express from 'express'
const app = express()
const port = process.env.PORT || '4000'
import router from './routes/routes.js'
import Connnectiondb from './ConnectionDB/connectiondb.js'
import './Schema-Model/Menu-Schema.js'
import bp from 'body-parser'
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
import cors from 'cors'
// import './Schema-Model/Booking-Schema.js'


//Connection function call
Connnectiondb()


//cors
app.use(cors())

  
//load routes
app.use('/', router)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})