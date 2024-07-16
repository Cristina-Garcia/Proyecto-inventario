import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
// import { createProxyMiddleware } from 'http-proxy-middleware'

// import { connectToServer } from './connection.js'
// import { agrochemicalsRoutes } from './routes.js'

const app = express()
const port = process.env.PORT || 3000

import { v4 as uuidv4 } from 'uuid'
app.use(cors())
app.use(express.json()) // Middleware para parsear JSON

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
app.get('/api/agroquimicos', (req, res) => {
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

app.post('/api/agroquimicos', (req, res) => {
  const {
    Fecha_de_caducidad,
    Ingrediente_activo,
    Lote,
    Nombre_común,
    Presentación,
    Proveedor,
    Tipo,
    Unidades,
    product_id,
    Fecha_de_registro,
  } = req.body

  // const product_id = uuidv4()
  // const Fecha_de_registro = new Date()
  //   .toISOString()
  //   .slice(0, 19)
  //   .replace('T', ' ')

  const query = `INSERT INTO agroquimicos_list (
    product_id, Nombre_común, Ingrediente_activo, Fecha_de_Caducidad, Unidades, Presentación, Lote, Tipo, Proveedor, Fecha_de_registro
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

  db.query(
    query,
    [
      product_id,
      Nombre_común,
      Ingrediente_activo,
      Fecha_de_caducidad,
      Unidades,
      Presentación,
      Lote,
      Tipo,
      Proveedor,
      Fecha_de_registro,
    ],
    (err, result) => {
      if (err) {
        console.error('Error al insertar datos:', err)
        res.status(500).send('Error al insertar datos')
      } else {
        res.status(200).send('Producto agregado correctamente')
      }
    }
  )
})

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`)
})
