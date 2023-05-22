import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Layout from "../../components/Layout";
import "./styles.css";
function LastEntries() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Layout>
      <div className="last-entries-page">
        <section className="last-entries-agrochemical">
          <h3>Agroquímicos</h3>
        </section>
        <section className="last-entries-tools">
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

export default LastEntries;
