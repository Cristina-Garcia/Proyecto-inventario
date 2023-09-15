import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline, IoIosArrowBack } from 'react-icons/io'
import './index.css'
import { ProductsContext } from '../../context'

function InteractiveButtons() {
  const { setOpenModal } = useContext(ProductsContext)
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }
  return (
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
  )
}

export default InteractiveButtons
