
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupsIcon from '@mui/icons-material/Groups';
import PortraitIcon from '@mui/icons-material/Portrait';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const Sidebar = ( {mode, setMode}) => {
  return (
    <Box flex={1} p={2}  sx={{display:{ xs:"none", sm:"block"}}}>
      <Box position="fixed">
      <List>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>
         <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Homepage" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#pages">
        <ListItemIcon>
         <PagesIcon/>
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#Groups">
        <ListItemIcon>
         <GroupsIcon/>
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton  component="a" href="#Profile">
        <ListItemIcon>
         <PortraitIcon/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton  component="a" href="#Friends">
        <ListItemIcon>
         <PeopleAltIcon/>
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton  component="a" href="#Marketplace">
        <ListItemIcon>
         <StorefrontIcon/>
        </ListItemIcon>
        <ListItemText primary="Marketplace" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton  component="a" href="#Marketplace">
        <ListItemIcon>
         <ModeNightIcon/>
        </ListItemIcon>
        <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
      </ListItemButton>
    </ListItem>
    </List>
    </Box>
    </Box>
    
  );
};
  

export default Sidebar
