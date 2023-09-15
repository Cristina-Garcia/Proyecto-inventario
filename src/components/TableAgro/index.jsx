import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function TableAgroEntries({ products }) {
  // const product = products.length > 1 ? products.map((product) => product) : ''
  // console.log(products)
  const productos = products.length > 5 ? products.slice(0, 5) : products

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={9}>
              Últimas entradas
            </TableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>
              <FilterAltIcon />
            </StyledTableCell>
            <StyledTableCell align="center">Nombre común</StyledTableCell>
            <StyledTableCell align="center">Ingrediente activo</StyledTableCell>
            <StyledTableCell align="center">Fecha de Caducidad</StyledTableCell>
            <StyledTableCell align="center">Unidades</StyledTableCell>
            <StyledTableCell align="center">presentación</StyledTableCell>
            <StyledTableCell align="center">Lote</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center">Proveedor</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.productName}</StyledTableCell>
              <StyledTableCell align="left">{row.ingredient}</StyledTableCell>
              <StyledTableCell align="right">
                {row.expirationDate}
              </StyledTableCell>
              <StyledTableCell align="right">{row.units}</StyledTableCell>
              <StyledTableCell align="right">
                {row.presentation}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lot}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.supplier}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
