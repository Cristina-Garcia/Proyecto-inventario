import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { DataContext } from '../../context'
// import { ProductsContext } from '../../context'
import TableAgroEntries from '../../components/TableAgro'
import Select from '../../components/SelectComponent'
import InteractiveButtons from '../../components/InteractiveButtons'

import './styles.css'

function Agrochemical() {
  const { agroquimicos, isActiveEntries, redirectTo } = useContext(DataContext)
  const productsToShow =
    agroquimicos.length > 15 ? agroquimicos.slice(0, 23) : agroquimicos

  return (
    <Layout>
      <div className="agrochemical-page">
        <div className="agrochemical-header">
          <h3>Agroquímicos</h3>
          {/* <select name="" id="" value="">
            <option value="entries">Entradas</option>
            <option value="departures">Salidas</option>
          </select> */}
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
