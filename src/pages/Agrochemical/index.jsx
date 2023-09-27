import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { ProductsContext } from '../../context'
import TableAgroEntries from '../../components/TableAgro'
import Select from '../../components/SelectComponent'
import InteractiveButtons from '../../components/InteractiveButtons'
import './styles.css'

function Agrochemical() {
  const { agroquimicos, isActiveEntries, redirectTo } =
    useContext(ProductsContext)

  const productsToShow =
    agroquimicos.length > 5 ? products.slice(0, 5) : agroquimicos

  return (
    <Layout>
      <div className="agrochemical-page">
        <div className="agrochemical-header">
          <h3>Agroquímicos</h3>
          <Select redirectTo={redirectTo} />
        </div>
        <TableAgroEntries
          products={productsToShow}
          isActiveEntries={isActiveEntries}
        />
        <InteractiveButtons />

        {/* {context.openModal && (
          <AgrochemicalModal onClose={() => context.closeModal()} />
        )} */}
      </div>
    </Layout>
  )
}

export default Agrochemical
