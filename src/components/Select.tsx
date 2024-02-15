import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const Select: React.FC<{Item: string}> = (props) => {
    const [Item, setItem] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setItem(event.target.value as string)
    }

  return (
    <Box width='250px'>
        <TextField label = {`Select ${props.Item}`} select value = {Item} onChange = {handleChange} fullWidth>
            <MenuItem value = "Item1">Item1</MenuItem>
            <MenuItem value = 'Item2'>Item2</MenuItem>
            <MenuItem value = 'Item3'>Item3</MenuItem>
            <MenuItem value = 'Item4'>Item4</MenuItem>
        </TextField>
    </Box>
  )
}


export default Select