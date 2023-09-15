import React from 'react'

function Product(props) {
  const {
    productName,
    ingredient,
    expirationDate,
    units,
    lot,
    presentation,
    supplier,
  } = props
  console.log('probando')
  return (
    <thead className="agrochemical-header">
      <tr>
        <td>1</td>
        <td>{productName}</td>
        <td>{ingredient}</td>
        <td>{expirationDate}</td>
        <td>{units}</td>
        <td>{presentation}</td>
        <td>{lot}</td>
        <td>{supplier}</td>
      </tr>
    </thead>
  )
}

export default Product
