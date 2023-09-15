import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import ToolsModal from '../../components/ToolsModalForm'
import './styles.css'
import TableToolsEntries from '../../components/TableTools'
import { ProductsContext } from '../../context'
import InteractiveButtons from '../../components/InteractiveButtons'

function Tools() {
  const { otherTools, openModal, setOpenModal } = useContext(ProductsContext)

  return (
    <Layout>
      <div className="tools-page">
        <div className="tools-header">
          <h3>Herramientas</h3>
          <select name="" id="">
            <option value="Entradas">
              <Link>Entradas</Link>
            </option>
            <option value="Salidas">
              <Link>Salidas</Link>
            </option>
          </select>
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
