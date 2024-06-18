import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
// import { ProductsContext } from '../../context'
import { DataContext } from '../../context'

import Layout from '../../components/Layout'
import ToolsModal from '../../components/ToolsModalForm'
import TableToolsEntries from '../../components/TableTools'
import InteractiveButtons from '../../components/InteractiveButtons'
import Select from '../../components/SelectComponent'
import './styles.css'

function Tools() {
  // const { otherTools, openModal, setOpenModal, redirectTo } =
  //   useContext(ProductsContext)
  const { otherTools, openModal, setOpenModal, redirectTo } =
    useContext(DataContext)
  return (
    <Layout>
      <div className="tools-page">
        <div className="tools-header">
          <h3>Herramientas</h3>
          <Select redirectTo={redirectTo} />
        </div>
        <TableToolsEntries products={otherTools} />
        <InteractiveButtons />
        {openModal &&
          createPortal(
            <ToolsModal onClose={() => setOpenModal(false)} />,
            document.body
          )}
      </div>
    </Layout>
  )
}

export default Tools
