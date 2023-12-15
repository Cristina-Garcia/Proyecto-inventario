import express from 'express'
import cors from 'cors'
import { connectToServer } from './connection.js'
import { agrochemicalsRoutes } from './routes.js'
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(agrochemicalsRoutes)
app.listen(port, () => {
  connectToServer(function (error) {
    if (err) console.error(err)
  })
  console.log(`Server is running on port: ${port}`)
})
