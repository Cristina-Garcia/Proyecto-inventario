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

export default function TableToolsEntries({ products }) {
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
            <StyledTableCell align="center">Unidades</StyledTableCell>
            <StyledTableCell align="center">Proveedor</StyledTableCell>
            <StyledTableCell align="center">Fecha de Ingreso</StyledTableCell>
            <StyledTableCell align="center">Notas</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((product) => {
            const truncatedId =
              product.id.substring(0, 4) +
              '...' +
              product.id.substring(product.id.length - 4)
            return (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="row">
                  {truncatedId}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {product.toolName}
                </StyledTableCell>
                <StyledTableCell align="right">{product.units}</StyledTableCell>
                <StyledTableCell align="left">
                  {product.supplier}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.dateAdmission}
                </StyledTableCell>
                <StyledTableCell align="left">{product.notes}</StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
