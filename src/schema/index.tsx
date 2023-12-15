import mongoose from 'mongoose'

const { Schema } = mongoose

export const productSchema = new Schema({
  id: mongoose.Types.ObjectId,
  productName: { type: String, require: true },
  ingredient: { type: String, require: true },
  type: { type: String, require: true },
  presentation: { type: String, require: true },
  units: { type: Number, require: true },
  lot: { type: String, require: true },
  supplier: { type: String, require: true },
  admissionDate: { type: Date, require: true },
  expirationDate: { type: Date, require: true },
})

export const toolSchema = new Schema({
  id: mongoose.Types.ObjectId,
  toolName: { type: String, require: true },
  units: { type: Number, require: true },
  supplier: { type: String, require: true },
  admissionDate: { type: Date, require: true },
  notes: String,
})

//  toolName: '',
//   units: '',
//   supplier: '',
//   dateAdmission: '',
//   notes: '',
//   admissionDate:
