import * as React from 'react'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SelectLabels() {
  const [type, setType] = useState('')
  const navigateTo = useNavigate()
  const location = useLocation()
  const redirectTo = (type) => {
    if (location.pathname.includes('/agrochemical/')) {
      switch (type) {
        case 'entries':
          navigateTo('/agrochemical/entries', { replace: true })
          break
        case 'exits':
          navigateTo('/agrochemical/exits', { replace: true })
          break
        default:
          navigateTo('/agrochemical/entries', { replace: true })
      }
    } else if (location.pathname.includes('/tools/')) {
      if (type === 'entries') {
        return navigateTo('/tools/entries')
      } else {
        return navigateTo('/tools/exits')
      }
    }
  }
  const handleChange = (event) => {
    setType(event.target.value)
    redirectTo(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={type} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>Ver</em>
          </MenuItem>
          <MenuItem value="entries">Entradas</MenuItem>
          <MenuItem value="exits">Salidas</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
