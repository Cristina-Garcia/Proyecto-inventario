import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocation, useNavigate } from 'react-router-dom'

export const ProductsContext = createContext()

function ProductsLocalStorageProvider({ children }) {
  const [openModal, setOpenModal] = useState(false)
  const newId = uuidv4()
  const [agroquimicos, setAgroquimicos] = useState([
    {
      productName: 'Progranic CinnAcar',
      ingredient: 'Extracto de canela',
      expirationDate: '01/09/2024',
      units: '5',
      presentation: 'Litros',
      lot: '123acv',
      type: 'Insecticida',
      supplier: 'CIASA AGRO',
      id: '1DEFWF',
    },
    {
      productName: 'Phc meta tron',
      ingredient: 'Metarhizium anisopliae Cepa Abn Ma 201',
      expirationDate: '01/09/2024',
      units: '1',
      presentation: 'Kilos',
      lot: '123acv',
      type: 'Insecticida',
      supplier: 'FEBEA BIO',
      id: 'dedbihqed',
    },
  ])
  const [otherTools, setOtherTools] = useState([
    {
      toolName: 'Guantes de Nitrilo',
      units: 20,
      supplier: 'uline',
      dateAdmission: '2023-15-10',
      notes: 'Prestamo de Rancho 1',
      id: '12fds-12-sd',
    },
    {
      toolName: 'Overol',
      units: 30,
      supplier: 'uline',
      dateAdmission: '2023-15-10',
      notes: 'Talla xl',
      id: '12fds-21-sda',
    },
  ])

  const navigateTo = useNavigate()
  const location = useLocation()

  const redirectTo = (e) => {
    if (location.pathname.includes('/agrochemical/')) {
      if (e.target.value === 'Entradas') {
        return navigateTo('/agrochemical/entries')
      } else {
        return navigateTo('/agrochemical/exits')
      }
    } else {
      if (e.target.value === 'Entradas') {
        return navigateTo('/tools/entries')
      } else {
        return navigateTo('/tools/exits')
      }
    }
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  const openModalToAdd = () => {
    setOpenModal(true)
  }

  function showProduct() {
    setOpenModal(false)
    const storedData = localStorage.getItem('formData')
    if (storedData) {
      const newData = JSON.parse(storedData)
      if (Object.keys(newData).length === 9) {
        setAgroquimicos([...agroquimicos, { ...newData, id: newId }])
      } else {
        setOtherTools([...otherTools, { ...newData, id: newId }])
      }
    }
  }
  // console.log('agroquimicos', agroquimicos)

  return (
    <ProductsContext.Provider
      value={{
        openModal,
        setOpenModal,
        showProduct,
        closeModal,
        openModalToAdd,
        agroquimicos,
        setAgroquimicos,
        otherTools,
        redirectTo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsLocalStorageProvider
