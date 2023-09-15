import { NavLink } from 'react-router-dom'
import imgagroquimicos from '../../assets/images/agroquimicos.jpg'
import imgherramientas from '../../assets/images/herramientas.jpg'
import Layout from '../../components/Layout'

function Home() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  return (
    <Layout>
      <section className="container-menu">
        <NavLink to="/last-entries">
          <button className="button-menu">Ultimas entradas</button>
        </NavLink>
        <NavLink to="/last-departures">
          <button className="button-menu">Ultimas salidas</button>
        </NavLink>
      </section>
      <section className="container-main">
        <NavLink to="/agrochemical" style={linkStyle}>
          <figure className="card card-agroquimicos">
            <p>Agroquimicos</p>
            <img
              src={imgagroquimicos}
              alt="Imagen de un saco de agroquimico  y un aplicador"
            />
          </figure>
        </NavLink>
        <NavLink to="/tools" style={linkStyle}>
          <figure className="card card-herramientas">
            <p>Herramientas</p>
            <img
              src={imgherramientas}
              alt="imagen de una caja con herramientas"
            />
          </figure>
        </NavLink>
      </section>
    </Layout>
  )
}

export default Home
