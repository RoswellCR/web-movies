import React from 'react'
import { 
    makeStyles,
    Drawer,
    Divider
} from "@material-ui/core";
import Lista from '../Lista'; 


const drawerWidth=240;

const estilos= makeStyles(theme=> ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
        },
        toolbar:theme.mixins.toolbar,
    }))

const Cajon = (props) => {
    
    const classes = estilos();
    return (
        <Drawer 
            className= {classes.drawer}
            variant= {props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null} //manda si existe o si no dejalo en null
            classes={{
                paper:classes.drawerPaper,
            }}
            anchor="left"
            
            >
            <div className={classes.toolbar}>

            </div>
            <Divider/>
            <Lista/>
        </Drawer>
    )
}

export default Cajon;
