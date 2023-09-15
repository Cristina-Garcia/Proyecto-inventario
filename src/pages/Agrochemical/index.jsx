import React, { useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { GrFilter } from 'react-icons/gr'
import { IoMdAddCircleOutline, IoIosArrowBack } from 'react-icons/io'
import Layout from '../../components/Layout'
import AgrochemicalModal from '../../components/AgrochemicalModal'

import Product from '../../components/AgrochemicalProduct/Products'
import { ProductsContext } from '../../context'
import './styles.css'

function Agrochemical() {
  const context = useContext(ProductsContext)

  // const { addProduct, saveProducts } = useProducts();

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  return (
    <Layout>
      <div className="agrochemical-page">
        <div className="agrochemical-header">
          <h3>Agroquímicos</h3>
          <select name="" id="">
            <option value="Entradas">Entradas</option>
            <option value="Salidas">Salidas</option>
          </select>
        </div>
        <table className="container">
          <thead className="agrochemical-header-info">
            <tr>
              <td>
                <GrFilter />
              </td>
              <td>Nombre común</td>
              <td>Ingrediente activo</td>
              <td>Fecha de Caducidad</td>
              <td>Unidades</td>
              <td>Presentacion</td>
              <td>Lote</td>
              <td>Tipo</td>
              <td>Proveedor</td>
            </tr>
          </thead>
          <div className="agrochemical-data">
            {/* {context.addedProducts.map((product, index) => (
              <Product
                key={index}
                productName={product.productName}
                ingredient={product.ingredient}
                expirationDate={product.expirationDate}
                units={product.units}
                lot={product.lot}
                presentation={product.presentation}
                supplier={product.supplier}
              />
            ))} */}
          </div>
        </table>
        <div className="interactive-buttons">
          <Link to="/" style={linkStyle}>
            <button className="button-back">
              <IoIosArrowBack />
              Regresar
            </button>
          </Link>
          <div className="icon-add">
            <IoMdAddCircleOutline
              className="add"
              onClick={() => context.openModalToAdd()}
            />
          </div>
        </div>
        {context.openModal &&
          createPortal(
            <AgrochemicalModal onClose={() => context.closeModal()} />,
            document.body
          )}
      </div>
    </Layout>
  )
}

export default Agrochemical
