import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { GrFilter } from 'react-icons/gr'
import { IoMdAddCircleOutline, IoIosArrowBack } from 'react-icons/io'
import Layout from '../../components/Layout'
import ToolsModal from '../../components/ToolsModal'
import './styles.css'

function Tools() {
  const [openModal, setOpenModal] = useState(false)

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }
  return (
    <Layout>
      <div className="tools-page">
        <div className="tools-header">
          <h3>Herramientas</h3>
          <select name="" id="">
            <option value="Entradas">Entradas</option>
            <option value="Salidas">Salidas</option>
          </select>
        </div>
        <div className="container">
          <ul className="tools-header-info">
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
          <Link to="/" style={linkStyle}>
            <button className="button-back">
              <IoIosArrowBack />
              Regresar
            </button>
          </Link>
          <div>
            <IoMdAddCircleOutline
              className="icon-add"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
        {openModal &&
          createPortal(
            <ToolsModal onClose={() => setOpenModal(false)} />,
            document.body
          )}
      </div>
    </Layout>
  )
}

export default Tools
