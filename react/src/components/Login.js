import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import '../css/login.css';

function LoginTab(checked=false) {
    return (
        <div className="login-section__content">
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <TextField
                        required
                        id="filled-email-input"
                        label="Email"
                        type="email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-password-input"
                        label="Contraseña"
                        type="password"
                    />
                </Grid>
                <Grid item container direction="column" alignItems="center">
                    <Button className="login-section__button-login" variant="contained" color="primary">Entrar</Button>
                    <a className="login-section__link">Olvidaste la contraseña</a>
                </Grid>
            </Grid>
        </div>
    )
}

function RegistrationTab(checked=false) {
    return (
        <div className="registration-section__content">
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <TextField
                        id="filled-nombre-input"
                        label="Nombre"
                        type="text"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-email-input"
                        label="Email"
                        type="email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-password-input"
                        label="Contraseña"
                        type="password"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        required
                        id="filled-password-input"
                        label="Repetir contraseña"
                        type="password"
                    />
                </Grid>
                <Grid item container direction="column" alignItems="center">
                    <Button className="login-section__button-regis" variant="contained" color="primary">Registrarse</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default function LoginComponent(props) {
    const [openModal, setOpenModal] = useState(true);
    const [tabValue, setTabValue] = useState('one');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        props.setUserSection(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                className="login-modal"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Grid className="login-modal__section" container justify="center" alignItems="center">
                    <Fade in={openModal}>
                        <div className="login-modal__content">
                            <Grid container justify="flex-end" alignItems="flex-start">
                                <IconButton className="login-modal__close-button" onClick={handleCloseModal}>
                                    <CloseRoundedIcon className="login-modal__close-button-icon" />
                                </IconButton>
                            </Grid>
                            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                                <Tabs
                                    value={tabValue}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    onChange={handleTabChange}
                                >
                                    <Tab value='one' label="INICIAR SESIÓN" />
                                    <Tab value='two' label="REGISTRARSE" />
                                </Tabs>
                                {tabValue == 'one' ? <LoginTab /> : <RegistrationTab />}
                            </Grid>
                        </div>
                    </Fade>
                </Grid>
            </Modal>
        </div>
    );
};
