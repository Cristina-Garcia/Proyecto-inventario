import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

// import { connectToServer } from './connection.js'
// import { agrochemicalsRoutes } from './routes.js'
const app = express()
const port = process.env.PORT || 3000
app.use(cors())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1342713',
  database: 'inventario',
})
// app.use(express.json())
// app.use(agrochemicalsRoutes)
// app.listen(port, () => {
//   connectToServer(function (error) {
//     if (err) console.error(err)
//   })
//   console.log(`Server is running on port: ${port}`)
// })

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err)
    return
  }
  console.log('Conexión exitosa a la base de datos MySQL')
})

// Ruta para obtener datos de la tabla 'agroquimicos'
app.get('/agroquimicos', (req, res) => {
  const query = 'SELECT * FROM agroquimicos_list'
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err)
      res.status(500).send('Error en el servidor')
      return
    }
    res.json(results)
  })
})

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`)
})
