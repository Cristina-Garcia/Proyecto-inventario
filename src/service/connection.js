import mongoose from 'mongoose'
// const drive = import.meta.env.VITE_API_URI
const drive =
  'mongodb+srv://cristinag:JFcuVRZpDaA7qTAG@stock.7uapusw.mongodb.net/inventario?retryWrites=true&w=majority '
// import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = drive
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// })

// const client = mongoose.connect(uri)

// main().catch((err) => console.log(err))

let _db
export const connectToServer = async function () {
  await mongoose.connect(drive)
  _db = mongoose.connection
}

export const getDb = function () {
  return _db
}
