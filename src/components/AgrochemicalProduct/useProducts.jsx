import { useState } from "react";
import useLocalStorageAgrochemical from "../AgrochemicalModal/useLocalStorageAgrochemical";

function useProducts() {
  const { agrochemicalProducts: products, saveProduct: saveProducts } =
    useLocalStorageAgrochemical("PRODUCTS_V1", []);
  const [openModal, setOpenModal] = useState(false);

  const addProduct = (product) => {
    const newProducts = [...products];
    newProducts.push(product);
    saveProducts(newProducts);
  };
  return {
    addProduct,
    saveProducts,
    openModal,
    setOpenModal,
  };
}

export default useProducts;
