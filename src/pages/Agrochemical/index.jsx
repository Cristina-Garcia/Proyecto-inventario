import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrFilter } from "react-icons/gr";
import { IoMdAddCircleOutline, IoIosArrowBack } from "react-icons/io";
import { createPortal } from "react-dom";
import Layout from "../../components/Layout";
import Modal from "../../components/Modal";
import "./styles.css";

function Agrochemical() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout>
      <div className="agrochemical-page">
        <h3>Agroquímicos</h3>
        <div>
          <ul className="agrochimical-header">
            <li>
              <GrFilter />
            </li>
            <li>Nombre común</li>
            <li>Ingrediente activo</li>
            <li>Fecha de Caducidad</li>
            <li>Unidades</li>
            <li>Presentacion</li>
            <li>Lote</li>
            <li>Tipo</li>
            <li>Proveedor</li>
          </ul>
          <div className="agrochemical-data"></div>
        </div>
        <div className="interactive-buttons">
          <NavLink to="/" style={linkStyle}>
            <button className="button-back">
              <IoIosArrowBack />
              Regresar
            </button>
          </NavLink>
          <div>
            <IoMdAddCircleOutline
              className="icon-add"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
        {openModal &&
          createPortal(
            <Modal onClose={() => setOpenModal(false)} />,
            document.body
          )}
      </div>
    </Layout>
  );
}

export default Agrochemical;
