import "./App.css";
import { IoIosArrowDropdown } from "react-icons/io";
import logo from "./images/logo.jpg";
import agroquimicos from "./images/agroquimicos.jpg";
import herramientas from "./images/herramientas.jpg";

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth();

  return (
    <>
      <header className="header">
        <img
          className="logo"
          src={logo}
          alt="imagen de avatar sentado con un laptop, creado por catalyststuff de freepik"
        />
        <h3 className="header-time">
          Fecha:
          <span>
            {hoy}/{mesActual}/{yearActual}
          </span>
        </h3>
        <button className="header-button">
          Usuario
          <IoIosArrowDropdown />
        </button>
      </header>
      <div className="container">
        <section className="container-menu">
          <button className="button-menu">Ultimas entradas</button>
          <button className="button-menu">Ultimas salidas</button>
        </section>
        <section className="container-main">
          <button className="card card-agroquimicos">
            <p>Plaguicidas y fertilizantes</p>
            <img
              src={agroquimicos}
              alt="Imagen de un saco de agroquimico  y un aplicador"
            />
          </button>
          <button className="card card-herramientas">
            <p>Herramientas</p>
            <img src={herramientas} alt="" />
          </button>
        </section>
      </div>
      <footer>Creado por Cristina Garcia(2023) &#169; </footer>
    </>
  );
}

export default App;
