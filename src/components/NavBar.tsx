import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AppsIcon from '@mui/icons-material/Apps';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const NavBar: React.FC<{ setIsDrawerOpen: (state: boolean) => void }> = (props) => {
  return (
    <>
    <AppBar position='static'>
        <Toolbar>
        <Box position = "absolute" left="20px">
            <IconButton edge = 'end' size='large' color='inherit' aria-label = 'logo' onClick={() => props.setIsDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>

            </Box>

            <Box position = "absolute" right="25px">

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
                >
                  <HelpOutlineIcon />
                  <QuestionAnswerIcon />
                  <ManageAccountsIcon />
                  <AppsIcon />
                  <PermIdentityIcon />



            </Stack>

            </Box>
        </Toolbar>

    </AppBar>
    </>
  )
}

export default NavBar
