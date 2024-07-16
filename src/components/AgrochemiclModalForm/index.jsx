import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from '../../hooks/useForm'
import './styles.css'

const agrochemical = {
  Nombre_común: '',
  Ingrediente_activo: '',
  Tipo: '',
  Presentación: '',
  Unidades: '',
  Lote: '',
  Proveedor: '',
  Fecha_de_caducidad: '',
  product_id: uuidv4(),
  Fecha_de_registro: new Date().toISOString().slice(0, 19).replace('T', ' '),
}
function AgrochemicalModal({ onClose }) {
  const { formData, handleChange, handleSubmit } = useForm(agrochemical)

  return (
    <div className="modal-background">
      <div className="modal-container-form">
        <h3>Agregar un Agroquímico</h3>
        <form
          action=""
          className="modal-form"
          id="form-agrochemical"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="Nombre_común"
            value={formData.Nombre_común}
            onChange={handleChange}
            required
            placeholder="Nombre común"
          />
          <input
            type="text"
            name="Ingrediente_activo"
            value={formData.Ingrediente_activo}
            onChange={handleChange}
            required
            placeholder="Ingrediente Activo"
          />
          <select
            required
            name="Tipo"
            value={formData.Tipo}
            onChange={handleChange}
          >
            <option value="">Tipo</option>
            <option value="Insecticida">Insecticida</option>
            <option value="Acaricida">Acaricida</option>
            <option value="Fungicida">Fungicida</option>
            <option value="Nematicida">Nematicida</option>
            <option value="Herbicida">Herbicida</option>
            <option value="Coadyuvante">Coadyuvante</option>
            <option value="Bioinsecticida">Bioinsecticida</option>
            <option value="Biofungicida">Biofungicida</option>
            <option value="Bionematicida">Bionematicida</option>
          </select>
          <div className="form-grid">
            <select
              name="Presentación"
              id=""
              value={formData.Presentación}
              onChange={handleChange}
              required
            >
              <option value="Presentación">Presentación</option>
              <option value="Kilogramo">Kilogramo</option>
              <option value="Litro">Litro</option>
            </select>

            <input
              type="number"
              name="Unidades"
              value={formData.Unidades}
              onChange={handleChange}
              placeholder="Unidades"
              required
            />
            <input
              type="text"
              name="Lote"
              value={formData.Lote}
              onChange={handleChange}
              placeholder="Lote"
              required
            />
            <input
              type="text"
              name="Proveedor"
              value={formData.Proveedor}
              onChange={handleChange}
              placeholder="Proveedor"
              required
            />
          </div>
          <label htmlFor="date">Fecha de Caducidad</label>
          <input
            type="date"
            name="Fecha_de_caducidad"
            value={formData.Fecha_de_caducidad}
            onChange={handleChange}
            required
            id="date"
          />
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

export default AgrochemicalModal
