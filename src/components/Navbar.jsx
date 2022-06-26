import { AppBar,Box, styled, Toolbar, Typography,InputBase,Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React,{useState} from 'react';
import ApiIcon from '@mui/icons-material/Api';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"2px 10px",
  borderRadius:"5px",
  width:"40%",
}))

const IconBox = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
      display:"flex",
  },
 
}))

const UserBox = styled(Box)(({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
      display:"none",
  },
}))

const Navbar = () => {
  const [openMenu,setOpenMenu]= useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar >
          <Typography variant="h5" sx={{display:{xs:"none",sm:"block"}}}>WEDEV</Typography>
          <ApiIcon sx={{display:{xs:"block",sm:"none"}}}/>
          <Search><InputBase placeholder='Search...' sx={{width:"100%"}}/></Search>
          <IconBox>
            <Badge badgeContent={4} color="error">
                <MailIcon/>
            </Badge>
            <Badge badgeContent={9} color="error">
                <NotificationsIcon/>
            </Badge>
            <Avatar alt="Arbab Anjum" src="/static/images/avatar/1.jpg" sx={{width:30,height:30}} onClick={()=>{setOpenMenu(true)}}/>
          </IconBox>
          <UserBox onClick={()=>{setOpenMenu(true)}}>
            <Avatar alt="Arbab Anjum" src="/static/images/avatar/1.jpg" sx={{width:30,height:30}} />
            <Typography>Arbab</Typography>
          </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openMenu}
        onClose = {e=>setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
export default Navbar;
