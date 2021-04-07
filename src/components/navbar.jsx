import { AppBar, Button, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <AppBar position="static" className="flex">
                <Toolbar className="container">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Holzrechnung
                    </Typography>
                    <Button id="login-button" className="float-right" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Navbar;