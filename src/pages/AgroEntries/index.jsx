import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Box } from '@mui/material'
import { DataContext } from '../../context'
// import { ProductsContext } from '../../context'
import AgrochemicalModal from '../../components/AgrochemiclModalForm'
import TableAgroEntries from '../../components/TableAgro'
import Select from '../../components/SelectComponent'
import InteractiveButtons from '../../components/InteractiveButtons'
import './index.css'
import '../../assets/styles/index.css'

function AgrochemicalEntries() {
  // const { agroquimicos, openModal, closeModal, redirectTo } =
  //   useContext(ProductsContext)
  const { agroquimicos, openModal, closeModal, redirectTo } =
    useContext(DataContext)
  return (
    <Box sx={{ p: 2, height: 'calc(100vh - 125px)' }}>
      <div className="agrochemical-header">
        <h3>ENTRADAS</h3>
        <Select redirectTo={redirectTo} />
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
