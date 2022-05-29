import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react';


function Dashboard (){
    const navigate = useNavigate();
    const logot = ()=>{
        setTimeout(()=>{
            navigate("/login")
        },1000)
    }

  const select = useSelector((state)=> state.register.value);    

    return(
        <div>
               <Grid container 
     spacing={0}
    align="center"
    justify="center"
    direction="column"
    style={{ backgroundColor: '#263238' }}
>
                <Grid item lg={7} sm={5}>
                    <h2 style={{color:"white"}}>
                        {
                            select.map((val)=>{
                                return (<><h2 style={{marginTop:"10px"}}>Name : {val.name}</h2><br />
                                           <h2>Email : {val.email}</h2><br /></>)
                            })
                        }
                    </h2>
                    <br />
                     <Button onClick={logot} variant="contained" style={{color:"white",background:'#d81b60',marginBottom:"10px"}}>Log out</Button>
                </Grid>
                </Grid>

            
        </div>
    )
}

export default Dashboard;