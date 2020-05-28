import React, { useState } from 'react';
import {
    Grid,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    Collapse,
    Box,
    Tooltip,
    InputBase,
    Badge,
    Menu,
    MenuItem,
    Avatar,
} from '@material-ui/core';

import MenuRounded from '@material-ui/icons/MenuRounded';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import LoginComponent from '../Login';
import ShoppingCartComponent from './ShoppingCart';
import '../../css/header.css';

function userMenuSection(userMenuAnchor, handleUserMenuClose) {
    return (
        <Menu
            elevation={1}
            id="user-menu"
            anchorEl={userMenuAnchor}
            keepMounted
            open={Boolean(userMenuAnchor)}
            onClick={handleUserMenuClose}
            className="user-menu"
        >
            <div className="user-menu__section">
                <div className="user-menu__logo-section">
                    <Grid container justify="center" alignItems="center" direction="column">
                            <Avatar className="user-menu__logo">U</Avatar>
                            <h3>Bienvenido</h3>
                    </Grid>
                </div>
                <Divider />
                <div className="user-menu__sub-section-content">
                    <MenuItem>
                        <SettingsRoundedIcon
                            fontSize={'small'}
                            className="user-menu__sub-section"
                        />
                        <span className="user-menu__sub-section-text">
                            Mi cuenta
                        </span>
                    </MenuItem>
                    <MenuItem>
                        <ShoppingCartRoundedIcon
                            fontSize={'small'}
                            className="user-menu__sub-section"
                        />
                        <span className="user-menu__sub-section-text">
                            Compras
                        </span>
                    </MenuItem>
                    <MenuItem>
                        <ExitToAppRoundedIcon
                            fontSize={'small'}
                            className="user-menu__sub-section"
                        />
                        <span className="user-menu__sub-section-text">
                            Salir
                        </span>
                    </MenuItem>
                </div>
            </div>
        </Menu>
    )
}

export default function HeaderSection() {
    const isLoginIn = false;
    const [open, setOpen] = useState(false);
    const [openMenuSection, setOpenMenuSection] = useState(false);
    const [openShoppingModal, setShoppingModal] = useState(false);
    const [userMenuAnchor, setUserMenu] = useState(null);
    const [clickUser, setUserSection] = useState(false);

    const handlShoppingModal = () => {
        setShoppingModal(!openShoppingModal);
    };

    const handleCloseShoppingModal = () => {
        setShoppingModal(!openShoppingModal);
    };
    const handleUserMenuClose = () => {
        setUserMenu(null);
        setUserSection(false);

    };
    const userSection = (
        isLoginIn ?
        userMenuSection(userMenuAnchor, handleUserMenuClose) :
        <LoginComponent setUserSection={setUserSection} />
    );

    const handleUserSection = (event) => {
        setUserSection(!clickUser);

        if (isLoginIn) {
            setUserMenu(event.currentTarget);
        }
    };
    
    const handleUserMenuClick = (event) => {
        setUserMenu(event.currentTarget);
    };


    const handleOpenMenuSection = () => {
        setOpenMenuSection(!openMenuSection);
    };

    const handleOpenMenu = () => {
        setOpen(true);
    };
    const handleCloseMenu = () => {
        setOpen(false);
    };
   
    return (
        <div>
            <Grid container className="header">
                <Grid container item xs={4} alignItems="center">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleOpenMenu}
                    >
                        <Tooltip arrow title="Menú">
                            <MenuRounded fontSize='large' />
                        </Tooltip>
                    </IconButton>
                    <Drawer
                        className="menu menu-width"
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <div
                            className="menu-width"
                            role="presentation"
                        >
                            <List>
                                <Box display="flex" flexDirection="row-reverse">
                                    <IconButton className="menu-section__close" onClick={handleCloseMenu}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </Box>
                                <Divider />
                                <ListItem button key={'Revistas'} onClick={handleCloseMenu}>
                                    <ListItemIcon><InboxIcon /></ListItemIcon>
                                    <ListItemText primary={'Revistas'} />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem button key={'Colecciones'} onClick={handleOpenMenuSection}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={'Colecciones'} />
                                    {openMenuSection ? <ExpandLess color="disabled" /> : <ExpandMore color="disabled" />}
                                </ListItem>
                                <Collapse className="menu-section__sub" in={openMenuSection} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button onClick={handleCloseMenu}>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Clarín" />
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </div>
                    </Drawer>
                </Grid>
                <Grid container item xs={4} justify="center">
                    <img className="image-logo" src="./src/image/logo.png" />
                </Grid>
                <Grid container item xs={4} justify="flex-end" alignItems="center">
                    <InputBase
                        placeholder="Collecciones, revistas ..."
                        className="search-field"
                    />
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton onClick={handlShoppingModal}>
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartRoundedIcon />
                        </Badge>
                    </IconButton>
                    {openShoppingModal && <ShoppingCartComponent setShoppingModal={setShoppingModal} />}
                    <IconButton onClick={handleUserSection}>
                        <PersonRoundedIcon />
                    </IconButton>
                    {clickUser && userSection}
                </Grid>
            </Grid>
        </div>
    );
}
