import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import ListIcon from '@mui/icons-material/List';
import SensorWindowIcon from '@mui/icons-material/SensorWindow';



const Sidebar: React.FC<{ setIsDrawerOpen: (state: boolean) => void; isDrawerOpen : boolean  }> = (props) => {
  
  
  
  return (

    <Drawer
        anchor='left'
        open={props.isDrawerOpen}
        onClose={() => props.setIsDrawerOpen(false)}
    >
        <Box p={2} width = '75px' textAlign= "center" role = "presentation" >

            

            <Stack
                p={1}
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={4}
                
                >
                    <IconButton edge = 'end' size='large' color='inherit' aria-label = 'logo' >
                    <ListIcon  />
                </IconButton>
                <IconButton edge = 'end' size='large' color='inherit' aria-label = 'logo' >
                <SensorWindowIcon />
                </IconButton>

                

                <IconButton edge = 'end' size='large' color='inherit' aria-label = 'logo' >
                <GroupsIcon />
                </IconButton>
                
                    
                    

            </Stack>
            
        </Box>
    </Drawer>


  )
}

export default Sidebar
