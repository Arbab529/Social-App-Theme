import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed">
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>

          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>

          <ListItemButton component="a" href="#group">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>

          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>

          <ListItemButton component="a" href="#marketplace">
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>

          <ListItemButton component="a" href="#Settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>

          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <DarkModeIcon />
            </ListItemIcon>
            <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
          </ListItemButton>

        </List>
      </Box>
    </Box>
  )
}

export default Sidebar