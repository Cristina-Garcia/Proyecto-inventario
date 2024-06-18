import React from 'react'
import './index.css'

function Select({ redirectTo }) {
  return (
    <select name="options" id="" value="" onChange={redirectTo}>
      <option value="" disabled defaultValue="">
        Ver
      </option>
      <option value="Entradas">Entradas</option>
      <option value="Salidas">Salidas</option>
    </select>
  )
}

export default Select
