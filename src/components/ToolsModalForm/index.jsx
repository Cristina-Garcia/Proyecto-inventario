import React from 'react'
import { useForm } from '../../hooks/useForm'

const toolsData = {
  toolName: '',
  units: '',
  supplier: '',
  dateAdmission: '',
  notes: '',
  admissionDate: new Date().toLocaleString(),
}

function ToolsModal({ onClose }) {
  const { formData, handleSubmit, handleChange } = useForm(toolsData)

  return (
    <div className="modal-background">
      <div className="modal-container-form">
        <h3>Agregar Herramientas</h3>
        <form
          action=""
          className="modal-form"
          id="form-agrochemical"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nombre"
            name="toolName"
            value={formData.toolName}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Unidades"
            name="units"
            value={formData.units}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Proveedor"
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
          />
          <label htmlFor="Date" style={{ fontWeight: 'bold' }}>
            Fecha de ingreso
          </label>
          <input
            type="date"
            id="Date"
            name="dateAdmission"
            value={formData.dateAdmission}
            onChange={handleChange}
          />
          <textarea
            name="notes"
            placeholder="Notas"
            id=""
            cols="30"
            rows="5"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="button-form">
            Agregar
          </button>
        </form>
        <button className="button-form close" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default ToolsModal
