import React, { useEffect, useState } from "react";

function useLocalStorageAgrochemical(agrochemicalProduct, initialValue) {
  const [agrochemical, setAgrochemical] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageProduct = localStorage.getItem(agrochemicalProduct);
        let parsedProduct;
        if (!localStorageProduct) {
          localStorageProduct.setItem(agrochemicalProduct, JSON.stringify([]));
          parsedProduct = initialValue;
        } else {
          parsedProduct = JSON.parse(localStorageProduct);
        }
        setAgrochemical(parsedProduct);
      } catch (error) {
        console.log("Hubo un error inesperado");
      }
    }, 1000);
  }, []);

  function saveProduct(newProduct) {
    try {
      const stringifiedProduct = JSON.stringify(newProduct);
      localStorage.setItem(agrochemicalProduct, stringifiedProduct);
      setAgrochemical(newProduct);
    } catch (error) {
      console.log("Otro error");
    }
  }
  return { agrochemical, saveProduct };
}

export default useLocalStorageAgrochemical;
