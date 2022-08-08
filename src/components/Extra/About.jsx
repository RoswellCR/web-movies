import React from "react";
import { useState } from "react";
//import {Button} from "@material-ui/core";
// DeleteIcon from "@material-ui/icons/Delete";
//import {Icon, Typography} from "@material-ui/core";
//import AppleIcon from '@material-ui/icons/Apple';
import "../assets/styles/components/About.scss";
import {ThemeProvider} from '@material-ui/core/styles'; 
import theme from '../../assets/styles/temaConfig';

//import Lista from "../components/Lista";
//import Contenedor from "../components/Contenedor"


const About = () => {
  
 
  
  
  return (
      <ThemeProvider theme={theme}>
       
       {/* <Contenedor/> */}
      </ThemeProvider>
  );
};

export default About;


/*
<div className="container">
        <Button variant="contained" color="primary" onClick={()=> setCambia(true)}>
          Somos Veneno!
        </Button>
        <Lista/>
            
        <AppleIcon/>
          {cambia? (<Typography variant="subtitle2" align='center' color="orange">hola</Typography>) : cambia }
        
      </div>
*/ 