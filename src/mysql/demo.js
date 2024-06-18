import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1342713',
  database: 'inventario',
})

connection.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})

connection.query('SELECT * FROM agroquimicos', (err, results) => {
  if (err) {
    console.error('Error en la consulta:', err.stack)
    return
  }
  console.log('Resultados:', results)
})

const insertQuery = `
  INSERT INTO agroquimicos (Ingrediente_activo, Nombre_comun,Unidades,Product_id,Fecha_entrada,Fecha_caducidad,Presentation,Supplier,Lote,Tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`

connection.query(
  insertQuery,
  [
    'Trichodermas',
    'Triasper',
    '2',
    '3',
    '2024-06-12',
    '2024-06-12',
    'Litros',
    'Herdez',
    '12546',
    'Microorganismos',
  ],
  (err, results) => {
    if (err) {
      console.error('Error al insertar datos:', err.stack)
      return
    }
    console.log('Datos insertados:', results)
  }
)
connection.end()
