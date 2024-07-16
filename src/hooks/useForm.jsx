import { useContext, useState } from 'react'
import { DataContext } from '../context'
// import {ProductsContext} from '../context'

import { axiosClient } from '../service/axiosclient.js'
import { v4 as uuidv4 } from 'uuid'
export const useForm = (initialValues) => {
  const { showProduct, closeModal } = useContext(DataContext)
  const [formData, setFormData] = useState(initialValues)

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //     admissionDate: new Date().toLocaleString(),
  //   })
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('beforeLocal', formData)
  //   setFormData(initialValues)
  //   localStorage.setItem('formData', JSON.stringify(formData))
  //   console.log('AfterLocal', formData)
  //   showProduct()
  // }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/api/agroquimicos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      // console.log(formData)
      // const response = await axiosClient.post('/api/agroquimicos', {
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      if (response.ok) {
        // Manejar la respuesta si es exitosa

        console.log('Producto agregado correctamente')
        closeModal()
        showProduct()
      } else {
        // Manejar la respuesta si hay un error
        console.error('Error al agregar el producto')
      }
    } catch (error) {
      console.error('Error en la solicitud', error)
    }
  }
  return { formData, handleChange, handleSubmit }
}
