import {AppBar,Box,Toolbar,Typography,Button} from "@mui/material";
import { NavLink } from "react-router-dom";
import React from 'react';


function Navbar(){
    return(
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}} >
                        NavBar
                    </Typography>
                    <Button component={NavLink} to="/" sx={{color:"white"}}>Home</Button>
                    <Button component={NavLink} to="/contact"  sx={{color:"white"}}>Contact</Button>
                    <Button component={NavLink} to="/login"  sx={{color:"white"}}>Login</Button>
                    <Button component={NavLink} to="/register"  sx={{color:"white"}}>Register</Button>
                </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar;