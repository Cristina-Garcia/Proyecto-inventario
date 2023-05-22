import React from "react";
import "./styles.css";

function Modal({ onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-container-form">
        <h3>Agregar un Agroquímico</h3>
        <form action="" className="modal-form">
          <input type="text" placeholder="Nombre común" />
          <input type="text" placeholder="Ingrediente Activo" />
          <select>
            <option value="option1">Tipo</option>
            <option value="option2">Insecticida</option>
            <option value="option3">Acaricida</option>
            <option value="option4">Fungicida</option>
            <option value="option5">Nematicida</option>
            <option value="option6">Herbicida</option>
            <option value="option7">Adherente o Surfactante</option>
          </select>
          <div className="form-grid">
            <input type="text" placeholder="Presentación" />
            <input type="text" placeholder="Unidades" />
            <input type="text" placeholder="Lote" />
            <input type="text" placeholder="Proveedor" />
          </div>
          <label htmlFor="">Fecha de Caducidad</label>
          <input type="date" placeholder="" />
          <button type="submit" className="button-form" onClick={onClose}>
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
