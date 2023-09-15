import React from "react";

function ToolsModal({ onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-container-form">
        <h3>Agregar Herramientas</h3>
        <form
          action=""
          className="modal-form"
          id="form-agrochemical"
          //   onSubmit={handleSubmit}
        >
          <input type="text" placeholder="Nombre" name="nombre" />
          <input type="number" placeholder="Unidades" name="unidades" />
          <input type="text" placeholder="Proveedor" name="proveedor" />
          <label htmlFor="Date">Fecha de ingreso</label>
          <input type="date" id="Date" />
          <textarea
            name="notas"
            placeholder="Notas"
            id=""
            cols="30"
            rows="5"
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
  );
}

export default ToolsModal;
