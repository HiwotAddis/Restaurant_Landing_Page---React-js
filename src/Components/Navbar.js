import React, { useState } from 'react'
import { Link } from 'react-scroll'
import Logo from "../Assets/Logo.svg"
import {BsCart2} from "react-icons/bs"
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box,Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRounded from '@mui/icons-material/PhoneRounded'
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded'
// import icon from '@mui/icons-material/icon'
const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false)
    const menuOptions=[ 
        {
            text:"Home",
            icon:<HomeIcon/>,
            id: "home"
        },
        {
            text:"About",
            icon:<InfoIcon/>,
            id: "about"
        },
        {
            text:"Testimonials",
            icon:<CommentRoundedIcon/>,
            id: "testimonials"
        },
        {
            text:"Contact",
            icon:<PhoneRounded/>,
            id: "contact"
        },
        {
            text:"Cart",
            icon:<ShoppingCartRounded/>
        },
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt=''/>
        </div>
        <div className='navbar-links-container'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='about' smooth={true} duration={500}>About</Link>
            <Link to='testimonials' smooth={true} duration={500}>Testimonials</Link>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
            <a href=''><BsCart2 className='navbar-cart-icon'/></a>
            <button className='primary-button'>Bookings Now</button>
        </div>
        <div className='navbar-menu-container'><HiOutlineBars3 onClick={()=>setOpenMenu(true)}/></div>
        <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor='right'>
            <Box
                sx={{width: 250}}
                role="presentation"
                onClick={()=>setOpenMenu(false)}
                onKeyDown={()=>setOpenMenu(false)}
                >
                    <List>
                    {menuOptions.map((item)=>(
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                {item.id ? (
                                    <Link to={item.id} smooth={true} duration={500}>
                                        <ListItemText primary={item.text} />
                                    </Link>
                                    ):(
                                        <ListItemText primary={item.text} />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Box>
        </Drawer>
    </nav>
  );
};

export default Navbar;
