import styles from './menu.module.css'

import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Menu = ()=>{

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
          return;
        }
        setOpen(open);
      };
            
    return(
        <div className={styles.menu}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <List>
                {['Inicio', 'Sobre mim', 'Projetos'].map((text) => (
                <ListItem button key={text}>
                    {text}
                </ListItem>
                ))}
            </List>
            </Drawer>
    </div>
    );
}

export default Menu;