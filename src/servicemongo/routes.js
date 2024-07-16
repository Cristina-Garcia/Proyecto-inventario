import express from 'express'

export const agrochemicalsRoutes = express.Router()
import { getDb } from './connection.js'

// import { ObjectId } from 'mongodb'
// import { ObjectId } from 'mongoose'

// This section will help you get a list of all the records.
agrochemicalsRoutes.route('/agrochemicals').get(async function (req, res) {
  let db_connect = getDb('inventario')
  try {
    const records = await db_connect
      .collection('agrochemicals')
      .find({})
      .toArray()
    res.json(records)
  } catch (error) {
    console.log('An error ocurred pulling records. ' + error)
  }
})
agrochemicalsRoutes
  .route('/agrochemicals/entries')
  .get(async function (req, res) {
    let db_connect = getDb('inventario')
    try {
      const records = await db_connect
        .collection('agrochemicals')
        .find({
          entradas: 1, // include only the entradas field
        })
        .toArray()
      res.json(records)
      console.log(records)
    } catch (error) {
      console.log('An error ocurred pulling records. ' + error)
    }
  })
// This section will help you get a single record by id
agrochemicalsRoutes.route('/agrochemicals/:id').get(function (req, res) {
  let db_connect = getDb()
  try {
    let myquery = { _id: new ObjectId(req.params.id) }

    const record = db_connect
      .collection('agrochemicals')
      .findOne(myquery, function (err, result) {
        if (err) throw err
      })
    res.json(record)
  } catch (error) {
    console.log('An error ocurred pulling the record. ' + error)
  }
})

// This section will help you create a new record.
agrochemicalsRoutes.route('/agrochemicals/add').post(function (req, response) {
  let db_connect = getDb()
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  }
  db_connect.collection('records').insertOne(myobj, function (err, res) {
    if (err) throw err
    response.json(res)
  })
})

// This section will help you update a record by id.
agrochemicalsRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = getDb()
  try {
    let myquery = { _id: new ObjectId(req.params.id) }
    let newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    }
    const update = db_connect
      .collection('records')
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err
        console.log('1 document updated')
        // response.json(res)
      })
    response.json(update)
  } catch (error) {
    console.log('Error updating record ' + error)
  }
})

// This section will help you delete a record
agrochemicalsRoutes.route('/:id').delete(async function (req, response) {
  let db_connect = getDb()
  try {
    let myquery = { _id: new ObjectId(req.params.id) }

    const objDeleted = await db_connect
      .collection('records')
      .deleteOne(myquery, function (err, obj) {
        if (err) throw err
        console.log('1 document deleted')
        // response.json(obj)
      })
    response.json(objDeleted)
  } catch (error) {
    console.log('Error deleting record ' + error)
  }
})

// module.exports = agrochemicalsRoutes
