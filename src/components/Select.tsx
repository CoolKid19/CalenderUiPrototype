import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const Select: React.FC<{Item: string; setItem: (Item: string) => void; width: string; options: string[]}> = (props) => {
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        props.setItem(event.target.value as string)
    }

  return (
    < >
        <TextField
        select
        value={props.Item}
        onChange={handleChange}
        size='small'
        style={{
          width: props.width,
        }}
        
      >
            {
            props.options.map((option)=>
             <MenuItem value = {option}>{option}</MenuItem>)
            }
            
        </TextField>
    </>
  )
}


export default Select