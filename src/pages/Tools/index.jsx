import React from "react";
import { GrFilter } from "react-icons/gr";
import { IoMdAddCircleOutline, IoIosArrowBack } from "react-icons/io";
import Layout from "../../components/Layout";
import "./styles.css";
import { NavLink } from "react-router-dom";

function Tools() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Layout>
      <div className="tools-page">
        <h3>Herramientas</h3>
        <div>
          <ul className="tools-header">
            <li>
              <GrFilter />
            </li>
            <li>Nombre común</li>
            <li>Unidades</li>
            <li>Proveedor</li>
            <li>Notas</li>
          </ul>
          <div className="tools-data"></div>
        </div>
        <div className="interactive-buttons">
          <NavLink to="/" style={linkStyle}>
            <button className="button-back">
              <IoIosArrowBack />
              Regresar
            </button>
          </NavLink>
          <div>
            <IoMdAddCircleOutline className="icon-add" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tools;
