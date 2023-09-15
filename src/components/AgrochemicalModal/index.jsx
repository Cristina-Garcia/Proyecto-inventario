import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context";
import "./styles.css";

function AgrochemicalModal({ onClose }) {
  const context = useContext(ProductsContext);

  const [newProduct, setNewProduct] = useState({
    productName: "",
    ingredient: "",
    type: "",
    presentation: "",
    units: "",
    lot: "",
    supplier: "",
    expirationDate: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    context.addProduct(newProduct);
    setNewProduct({
      productName: "",
      ingredient: "",
      type: "",
      presentation: "",
      units: "",
      lot: "",
      supplier: "",
      expirationDate: "",
    });
    context.showProduct();
  }

  function handleChange(event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  }

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
            name="productName"
            value={newProduct.productName}
            onChange={handleChange}
            required
            placeholder="Nombre común"
          />
          <input
            type="text"
            name="ingredient"
            value={newProduct.ingredient}
            onChange={handleChange}
            required
            placeholder="Ingrediente Activo"
          />
          <select
            required
            name="type"
            value={newProduct.type}
            onChange={handleChange}
          >
            <option value="">Tipo</option>
            <option value="Insecticida">Insecticida</option>
            <option value="Acaricida">Acaricida</option>
            <option value="Fungicida">Fungicida</option>
            <option value="Nematicida">Nematicida</option>
            <option value="Herbicida">Herbicida</option>
            <option value="Adherente o Surfactante">
              Adherente o Surfactante
            </option>
          </select>
          <div className="form-grid">
            <select
              name="presentation"
              id=""
              value={newProduct.presentation}
              onChange={handleChange}
              required
            >
              <option value="Presentación">Presentación</option>
              <option value="Kilogramo">Kilogramo</option>
              <option value="Litro">Litro</option>
            </select>
 
            <input
              type="number"
              name="units"
              value={newProduct.units}
              onChange={handleChange}
              placeholder="Unidades"
              required
            />
            <input
              type="text"
              name="lot"
              value={newProduct.lot}
              onChange={handleChange}
              placeholder="Lote"
              required
            />
            <input
              type="text"
              name="supplier"
              value={newProduct.supplier}
              onChange={handleChange}
              placeholder="Proveedor"
              required
            />
          </div>
          <label htmlFor="date">Fecha de Caducidad</label>
          <input
            type="date"
            name="expirationDate"
            value={newProduct.expirationDate}
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
  );
}

export default AgrochemicalModal;
