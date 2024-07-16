import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  IoMdAddCircleOutline,
  IoIosArrowBack,
  IoIosRemoveCircleOutline,
} from 'react-icons/io'
import './index.css'
// import { ProductsContext } from '../../context'
import { DataContext } from '../../context'

function InteractiveButtons({ basePath }) {
  // const { setOpenModal } = useContext(ProductsContext)
  const { setOpenModal } = useContext(DataContext)
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }
  const location = useLocation()
  const isEntryOrExit = location.pathname.includes(`${basePath}/`)

  const backButtonPath = isEntryOrExit ? '/' : `${basePath}/entries`
  const addButton =
    location.pathname === `${basePath}/entries` ? (
      <IoMdAddCircleOutline
        className="icon-add"
        onClick={() => setOpenModal(true)}
      />
    ) : location.pathname === `${basePath}/exits` ? (
      <IoIosRemoveCircleOutline className="icon-add" />
    ) : null

  // console.log(location)
  return (
    <div className="interactive-buttons">
      <Link to={backButtonPath} style={linkStyle}>
        <button className="button-back">
          <IoIosArrowBack />
          Regresar
        </button>
      </Link>
      <div>{addButton}</div>
    </div>
  )
}

export default InteractiveButtons
