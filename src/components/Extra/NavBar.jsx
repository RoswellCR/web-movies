import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {ThemeProvider} from '@material-ui/core/styles'; 
import theme from '../assets/styles/temaConfig';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,  //para darle al alto la forma dinamica
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
    title: {
        flexGrow:1},
    appBar:{
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
          },}
        
}))

const NavBar = (props) => { 

   const classes= useStyles();

    return (
        <div> {/*eliminar este div */}
            <AppBar className={classes.appBar}>
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} 
                   color="inherit" aria-label="menu"
                   onClick={() => props.accionAbrir()}
                   >
                    <MenuIcon/>
                  </IconButton>
                 
                  <Typography variant="h6" className={classes.title}>
                      <Link to="/">
                        Home 
                      </Link>
                  </Typography>

            
                <button variant="text">
                    login
                </button>
              </Toolbar>  
            </AppBar>
            <div className={classes.offset}> {/*eliminar este div*/}

            </div>
        </div>
    ); 

}

export default NavBar;