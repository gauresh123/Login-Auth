import { Card, Grid, Box, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import React from 'react';


function Login(){
    const navigate = useNavigate();
    const regi = useSelector((state)=> state.register.value);
    const regi1 = useSelector((state) => state.register.value1);
    const [flag,setflag]=useState(false);
    const [err,seterr]=useState(false);
    const submit =(e)=>{
        e.preventDefault();
         const data = new FormData(e.target);
         const newdata = {
             email: data.get("em"),
             password:data.get("pass")
         }
         if(newdata.email.includes("") || newdata.password.includes("")){
             setflag(true);
         }if(newdata.email && newdata.password){
             if(newdata.email == regi.map((val)=> val.email)){
                 if(newdata.password == regi1.map((val)=> val.password)){
                    setflag(false);
                    seterr(false);
                   { document.getElementById("login-form").reset()
                    alert("Login Success")
                   setTimeout(()=>{
                    navigate("/dashboard")
                   },1000)
                }
                 }
             }
          
        }else{
             seterr(true);
         }
             
         }
    
    return(
        <div>
            <Grid container sx={{height:"90vh"}}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage:`https://freepngimg.com/thumb/shopping/7-2-shopping-png-hd-thumb.png`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"center"
                }}>
                </Grid>
                <Grid item lg={5} sm={7}>
                    <Card sx={{width:"100%",height:"100%"}}>
                        <Box>
                            <Box component="form" noValidate sx={{}} id="login-form" onSubmit={submit}>
                                <TextField required fullWidth id="email" name="em" label="Email Address" margin="normal"/>
                                <TextField required fullWidth id="password" name="pass" label="password" margin="normal"/>
                                <Box textAlign="center">
                                    <Button type="submit" variant="contained" sx={{mt:3,mb:2,px:5}}>Login</Button>
                                    {
                                        flag?<Alert severity="error">Plase Enter Valid Data</Alert>:null
                                    }
                                    {
                                        err?<Alert severity="error">All Feilds Are Required</Alert>:null
                                    }
                                </Box>

                            </Box>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}

export default Login;