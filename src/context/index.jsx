import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useLocation, useNavigate } from 'react-router-dom'

/* ---- */
import axios from 'axios'

// export const ProductsContext = createContext()

export const DataContext = createContext()

// function ProductsLocalStorageProvider({ children }) {
//   const [openModal, setOpenModal] = useState(false)
//   const newId = uuidv4()
//   const [agroquimicos, setAgroquimicos] = useState([
//     {
//       Nombre_común: 'Progranic CinnAcar',
//       Ingrediente_activo: 'Extracto de canela',
//       Fecha_de_caducidad: '01/09/2024',
//       units: '5',
//       Presentación: 'Litros',
//       Lote: '123acv',
//       Tipo: 'Insecticida',
//       Proveedor: 'CIASA AGRO',
//       product_id: '1DEFWF',
//     },
//     {
//       Nombre_común: 'Phc meta tron',
//       Ingrediente_activo: 'Metarhizium anisopliae Cepa Abn Ma 201',
//       Fecha_de_caducidad: '01/09/2024',
//       Unidades: '1',
//       Presentación: 'Kilos',
//       Lote: '123acv',
//       Tipo: 'Insecticida',
//       Proveedor: 'FEBEA BIO',
//       product_id: 'dedbihqed',
//     },
//   ])
//   const [otherTools, setOtherTools] = useState([
//     {
//       toolName: 'Guantes de Nitrilo',
//       Unnidades: 20,
//       supplier: 'uline',
//       dateAdmission: '2023-15-10',
//       notes: 'Prestamo de Rancho 1',
//       product_id: '12fds-12-sd',
//     },
//     {
//       toolName: 'Overol',
//       units: 30,
//       supplier: 'uline',
//       dateAdmission: '2023-15-10',
//       notes: 'Talla xl',
//       id: '12fds-21-sda',
//     },
//   ])

//   const navigateTo = useNavigate()
//   const location = useLocation()

//   const redirectTo = (e) => {
//     if (location.pathname.includes('/agrochemical/')) {
//       if (e.target.value === 'Entradas') {
//         return navigateTo('/agrochemical/entries')
//       } else {
//         return navigateTo('/agrochemical/exits')
//       }
//     } else {
//       if (e.target.value === 'Entradas') {
//         return navigateTo('/tools/entries')
//       } else {
//         return navigateTo('/tools/exits')
//       }
//     }
//   }
//   const closeModal = () => {
//     setOpenModal(false)
//   }
//   const openModalToAdd = () => {
//     setOpenModal(true)
//   }

//   function showProduct() {
//     setOpenModal(false)
//     const storedData = localStorage.getItem('formData')
//     if (storedData) {
//       const newData = JSON.parse(storedData)
//       if (Object.keys(newData).length === 9) {
//         setAgroquimicos([...agroquimicos, { ...newData, id: newId }])
//       } else {
//         setOtherTools([...otherTools, { ...newData, id: newId }])
//       }
//     }
//   }
//   // console.log('agroquimicos', agroquimicos)

//   return (
//     <ProductsContext.Provider
//       value={{
//         openModal,
//         setOpenModal,
//         showProduct,
//         closeModal,
//         openModalToAdd,
//         agroquimicos,
//         setAgroquimicos,
//         otherTools,
//         redirectTo,
//       }}
//     >
//       {children}
//     </ProductsContext.Provider>
//   )
// }

function ProductsFromDbProvider({ children }) {
  const [agroquimicos, setAgroquimicos] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/agroquimicos')
      .then((response) => {
        setAgroquimicos(response.data)
      })
      .catch((error) => {
        console.error('Error obteniendo los datos:', error)
      })
  }, [])
  const [openModal, setOpenModal] = useState(false)
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
  return (
    <DataContext.Provider
      value={{
        openModal,
        setOpenModal,
        showProduct,
        closeModal,
        openModalToAdd,
        agroquimicos,
        setAgroquimicos,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
// export default ProductsLocalStorageProvider
export default ProductsFromDbProvider
