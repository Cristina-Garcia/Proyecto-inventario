import mongoose, { get } from 'mongoose'
import { getDb } from './service/connection'

const { Schema } = mongoose

const db = getDb()
const agrochemicalSchema = new Schema({
  productName: { type: String, require: true },
  ingredient: { type: String, require: true },
  type: { type: String, require: true },
  presentation: { type: String, require: true },
  units: { type: Number, require: true },
  lot: { type: String, require: true },
  supplier: { type: String, require: true },
  expirationDate: { type: Date, require: true },
  admissionDate: { type: Date, require: true },
})

export const Agrochemical = db.model('Agrochemical', agrochemicalSchema)

const toolSchema = new Schema({
  toolName: { type: String, require: true },
  units: { type: Number, require: true },
  supplier: { type: String, require: true },
  dateAdmission: { type: Date, require: true },
  notes: { type: String, require: false },
  admissionDate: { type: Date, require: true },
})

export const Tool = db.model('Tool', toolSchema)
