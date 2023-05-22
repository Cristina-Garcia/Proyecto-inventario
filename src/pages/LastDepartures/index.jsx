import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Layout from "../../components/Layout";
import "./styles.css";
function LastDefartures() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Layout>
      <div className="last-departures-page">
        <section className="last-departures-agrochemical">
          <h3>Agroquímicos</h3>
        </section>
        <section className="last-departures-tools">
          <h3>Herramientas</h3>
        </section>
        <div className="interactive-buttons">
          <Link to="/" style={linkStyle}>
            <button className="button-back">
              <IoIosArrowBack />
              Regresar
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default LastDefartures;
