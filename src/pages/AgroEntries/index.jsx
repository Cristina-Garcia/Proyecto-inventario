import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Box } from '@mui/material'
import { DataContext } from '../../context'
// import { ProductsContext } from '../../context'
import AgrochemicalModal from '../../components/AgrochemiclModalForm'
import TableAgroEntries from '../../components/TableAgro'
import InteractiveButtons from '../../components/InteractiveButtons'
import './index.css'
import '../../assets/styles/index.css'
import SelectLabels from '../../components/SelectComponent'

function AgrochemicalEntries() {
  // const { agroquimicos, openModal, closeModal, redirectTo } =
  //   useContext(ProductsContext)
  const { agroquimicos, openModal, closeModal, redirectTo } =
    useContext(DataContext)
  // const productsToShow =
  //   agroquimicos.length > 20 ? agroquimicos.slice(0, 20) : agroquimicos
  return (
    <Box sx={{ p: 2, height: 'calc(100vh - 180px)' }}>
      <div className="agrochemical-header">
        <h3>ENTRADAS</h3>
        <SelectLabels redirectTo={redirectTo} />
      </div>
      <div>
        <TableAgroEntries products={agroquimicos} />
        <InteractiveButtons basePath="/agrochemical" />
      </div>
      {openModal &&
        createPortal(
          <AgrochemicalModal onClose={() => closeModal()} />,
          document.body
        )}
    </Box>
  )
}

export default AgrochemicalEntries
