import { useContext, useState } from 'react'
import { DataContext } from '../context'
// import {ProductsContext} from '../context'
export const useForm = (initialValues) => {
  const { showProduct } = useContext(DataContext)
  const [formData, setFormData] = useState(initialValues)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      admissionDate: new Date().toLocaleString(),
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('beforeLocal', formData)
    setFormData(initialValues)
    localStorage.setItem('formData', JSON.stringify(formData))
    console.log('AfterLocal', formData)
    showProduct()
  }

  return { formData, handleChange, handleSubmit }
}
