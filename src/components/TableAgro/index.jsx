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
            <StyledTableCell align="center">Presentación</StyledTableCell>
            <StyledTableCell align="center">Lote</StyledTableCell>
            <StyledTableCell align="center">Tipo</StyledTableCell>
            <StyledTableCell align="center">Proveedor</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => {
            const truncatedId =
              row.product_id.substring(0, 4) +
              '...' +
              row.product_id.substring(row.product_id.length - 4)

            const isoDate = row.Fecha_de_Caducidad
            const date = new Date(isoDate)
            const day = String(date.getUTCDate()).padStart(2, '0') // getUTCDate para usar la fecha en UTC
            const month = String(date.getUTCMonth() + 1).padStart(2, '0') // getUTCMonth es 0-indexado
            const year = date.getUTCFullYear()

            // Formatear la fecha como DDMMAAAA
            const formattedDate = `${day}/${month}/${year}`

            return (
              <StyledTableRow key={row.product_id}>
                <StyledTableCell component="th" scope="row">
                  {truncatedId}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.Nombre_común}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.Ingrediente_activo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {formattedDate}
                </StyledTableCell>
                <StyledTableCell align="center">{row.Unidades}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.Presentación}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Lote}</StyledTableCell>
                <StyledTableCell align="right">{row.Tipo}</StyledTableCell>
                <StyledTableCell align="left">{row.Proveedor}</StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
