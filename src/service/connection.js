import mongoose from 'mongoose'
// const drive = import.meta.env.VITE_API_URI
const drive =
  'mongodb+srv://cristinag:JFcuVRZpDaA7qTAG@stock.7uapusw.mongodb.net/inventario?retryWrites=true&w=majority '

const uri = drive 

let _db
export const connectToServer = async function () {
  await mongoose.connect(drive)
  _db = mongoose.connection
}

export const getDb = function () {
  return _db
}
