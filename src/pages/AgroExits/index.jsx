import { Box } from '@mui/material'
import React, { useContext } from 'react'
import Select from '../../components/SelectComponent'
import InteractiveButtons from '../../components/InteractiveButtons'
import { ProductsContext } from '../../context'

function AgrochemicalExits() {
  const { redirectTo } = useContext(ProductsContext)
  return (
    <Box sx={{ p: 2, height: 'calc(100vh - 125px)' }}>
      <div className="agrochemical-header">
        <h3>SALIDAS</h3>
        <Select redirectTo={redirectTo} />
      </div>
      <div>
        {/* <TableAgroEntries products={agroquimicos} /> */}
        <InteractiveButtons basePath="/agrochemical" />
      </div>
    </Box>
  )
}

export default AgrochemicalExits
