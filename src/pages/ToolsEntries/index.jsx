import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { createPortal } from 'react-dom'
// import { ProductsContext } from '../../context'
import { DataContext } from '../../context'

import TableToolsEntries from '../../components/TableTools'
import InteractiveButtons from '../../components/InteractiveButtons'

import ToolsModal from '../../components/ToolsModalForm'
// import './index.css'
import '../../assets/styles/index.css'
import SelectLabels from '../../components/SelectComponent'

function ToolsEntries() {
  // const { otherTools, openModal, closeModal, redirectTo } =
  //   useContext(ProductsContext)
  const { tools, openModal, closeModal } = useContext(DataContext)

  return (
    <Box sx={{ p: 2, height: 'calc(100vh - 125px)' }}>
      <div className="agrochemical-header">
        <h3>ENTRADAS</h3>
        <SelectLabels />
      </div>
      <div>
        <TableToolsEntries products={tools} />
        <InteractiveButtons basePath="/tools" />
      </div>
      {openModal &&
        createPortal(
          <ToolsModal onClose={() => closeModal()} />,
          document.body
        )}
    </Box>
  )
}

export default ToolsEntries
