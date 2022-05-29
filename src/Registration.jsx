import { Card, Grid,Box, TextField,Button, Alert } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, add1 } from "./store/registerSlice";
import React from 'react';


 
function Registration(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[flag,setflag]=useState(false);
    const regsub = (e)=>{
        e.preventDefault();
        const data = new FormData(e.target);
        const newdata = {
            name:data.get("name"),
            email:data.get("email"),
            password:data.get("password"),
            confirmpass:data.get("cinfpass")
        }
         if(newdata.name && newdata.email && newdata.password && newdata.confirmpass){
          if(newdata.password==newdata.confirmpass){
                alert("Registration Complite");
                dispatch(add({email:newdata.email,name:newdata.name}))
                dispatch(add1({password:newdata.password}));
                navigate("/login");
                setflag(false);
            }else{
                setflag(true);
            }
        }
    }
    

    return(
        <div>
            <Grid container sx={{height:"90vh"}}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage:`https://replit.com/@GaureshWarang/LoginAuth#Codingpic1.png`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"center"
                }}>
                </Grid>
                <Grid item lg={5} sm={7}>
                    <Card sx={{width:"100%",height:"100%"}}>
                        <Box>
                            <Box sx={{}}>
                                <Box component="form" noValidate id="regi-form" onSubmit={regsub}>
                                    <TextField required fullWidth id="nme" label="name" name="name" margin="normal"/>
                                    <TextField required fullWidth id="emai" label="Email" name="email" margin="normal"/>
                                    <TextField required fullWidth id="pass" label="Password" name="password" margin="normal"/>
                                    <TextField required fullWidth id="cpass" label="Confirm Password" name="cinfpass" margin="normal"/>
                                    <Box textAlign="center">
                                    <Button type="submit" variant="contained" sx={{mt:3,mb:2,px:5}}>Register</Button>
                                    {
                                        flag?<Alert severity="error">All Feilds Are Required</Alert>:null
                                    }
                                     </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Registration;