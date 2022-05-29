import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from 'react';


function Layout (){
    return(
        <div>
            <CssBaseline/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layout;