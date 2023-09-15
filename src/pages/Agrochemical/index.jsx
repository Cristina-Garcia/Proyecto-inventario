import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import Layout from '../../components/Layout'
import AgrochemicalModal from '../../components/AgrochemiclModalForm'
import { ProductsContext } from '../../context'
import TableAgroEntries from '../../components/TableAgro'
import InteractiveButtons from '../../components/InteractiveButtons'
import './styles.css'

function Agrochemical() {
  const { openModal, closeModal, agroquimicos } = useContext(ProductsContext)

  // const { addProduct, saveProducts } = useProducts();

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
        <TableAgroEntries products={agroquimicos} />
        <InteractiveButtons />
        {openModal &&
          createPortal(
            <AgrochemicalModal onClose={() => closeModal()} />,
            document.body
          )}
        {/* {context.openModal && (
          <AgrochemicalModal onClose={() => context.closeModal()} />
        )} */}
      </div>
    </Layout>
  )
}

export default Agrochemical
