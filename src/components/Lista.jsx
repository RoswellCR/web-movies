import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from "@material-ui/core";
import AdbIcon from '@material-ui/icons/Adb';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const Lista = () => { 
    return (
            <div>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <AdbIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Modo ANDROID" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <BluetoothIcon/>
                        </ListItemIcon>
                        <ListItemText primary="activar Bluetooth" />
                    </ListItem>
                    <Divider/>
                </List>
            </div>
    );
}

export default Lista;