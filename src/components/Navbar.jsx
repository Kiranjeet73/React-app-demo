import { Mail, Notifications } from '@mui/icons-material';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { AppBar,Avatar,Badge,InputBase,Menu,MenuItem,styled, Toolbar, Typography} from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  
  });
  
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    Padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"20px",
     alignItems: "center",
     [theme.breakpoints.up("sm")] :{

    display:"flex"
     }
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"10px",
     alignItems: "center",
     [theme.breakpoints.up("sm")]:{

      display:"none"
       }
    
  }));

const Navbar = () => {
   const [open, setOpen] = useState(false)
  
   return (
    
<AppBar  position="sticky"><StyledToolbar>
    <Typography variant='h6' sx={{display:{ xs:"none", sm:"block"}}}>Kaur Dev</Typography>
    <EmojiNatureIcon  sx={{display:{ xs:"block", sm:"none"}}}/>
  <Search >
    <InputBase   placeholder="Search..." ></InputBase>
  </Search>
  <Icons>
    <Badge badgeContent={4} color="error"><Mail /></Badge>
  <Badge badgeContent={5} color="error"><Notifications /></Badge> 
  <Avatar  sx={{width:30, height:30}}    src="https://images.pexels.com/photos/13624924/pexels-photo-13624924.jpeg?cs=srgb&dl=pexels-abderrahman-bouallal-13624924.jpg&fm=jpg&_gl=1*1suhzje*_ga*NTY2NTI0Nzg1LjE2NjY0Njc4ODg.*_ga_8JE65Q40S6*MTY2NjQ2Nzg4OS4xLjEuMTY2NjQ2ODE2OS4wLjAuMA.."
  onClick={e=>setOpen(true)} />
  </Icons>
  <UserBox onClick={e=>setOpen(true)}><Avatar  sx={{width:30, height:30}} src="https://images.pexels.com/photos/13624924/pexels-photo-13624924.jpeg?cs=srgb&dl=pexels-abderrahman-bouallal-13624924.jpg&fm=jpg&_gl=1*1suhzje*_ga*NTY2NTI0Nzg1LjE2NjY0Njc4ODg.*_ga_8JE65Q40S6*MTY2NjQ2Nzg4OS4xLjEuMTY2NjQ2ODE2OS4wLjAuMA.."/>
 
  </UserBox>
    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open ={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Username</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
 </AppBar>

  )
}

export default Navbar
