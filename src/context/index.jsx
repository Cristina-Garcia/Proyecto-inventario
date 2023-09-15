import { createContext, useEffect, useState } from 'react'
import Product from '../components/AgrochemicalProduct/Products'
export const ProductsContext = createContext()

function ProductsLocalStorageProvider({ children }) {
  const [openModal, setOpenModal] = useState(false)

  const [addedProducts, setAddedProducts] = useState([])

  // const [productToShow, setProductToShow] = useState([]);

  const closeModal = () => {
    setOpenModal(false)
  }
  const openModalToAdd = () => {
    setOpenModal(true)
  }

  useEffect(() => {
    const addProduct = (newProduct) => {
      setAddedProducts((prevProducts) => [...prevProducts, newProduct])
      // setAddedProducts([{ newProduct }, ...addedProducts]);
      console.log('products', addedProducts)
      localStorage.setItem('productData', JSON.stringify(addedProducts))
      console.log(newProduct)
    }
    addProduct()
  }, [])

  function showProduct() {
    setOpenModal(false)
    const storedData = localStorage.getItem('productData')
    if (storedData) {
      setAddedProducts(JSON.parse(storedData))
    }
    console.log('productos', addedProducts)
  }

  return (
    <ProductsContext.Provider
      value={{
        openModal,
        showProduct,
        closeModal,
        openModalToAdd,
        addedProducts,
        setAddedProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsLocalStorageProvider
