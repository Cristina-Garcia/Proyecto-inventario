import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDropdown } from 'react-icons/io'
import logo from '../../assets/images/logo.jpg'
import './header.css'

function Header() {
  const fecha = new Date()
  const yearActual = fecha.getFullYear()
  const hoy = fecha.getDate()
  const mesActual = fecha.getUTCMonth() + 1

  return (
    <header className="header">
      <NavLink to="/">
        <img
          className="logo"
          src={logo}
          alt="imagen de avatar sentado con un laptop, creado por catalyststuff de freepik"
        />
      </NavLink>
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
  )
}

export default Header
