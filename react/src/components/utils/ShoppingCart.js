import React, { useState } from 'react';

import {
    Modal,
    Backdrop,
    Fade,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Button,
    Avatar,
    TablePagination,
} from '@material-ui/core';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

import '../../css/shoppingCart.css';

function createData(producto, precio, cantidad, totalParcial, action) {
    return { producto, precio, cantidad, totalParcial, action };
};

const deleteButton = (
    <IconButton>
        <DeleteForeverRoundedIcon color="error" />
    </IconButton>
);

const productContent = (
    <div>
        <Grid container>
            <Grid item xs={3}>
                <Avatar className="shopping-cart-modal__product-icon" src="./src/image/over_carousel/collection_1.png" />
            </Grid>
            <Grid container item xs={9} justify="flex-start" alignItems="center">
                <div className="shopping-cart-modal__product-title">Colección animados</div>
                <div className="shopping-cart-modal__product-code">Prod Code: A29LP89894GL</div>
            </Grid>
        </Grid>
    </div>
);

const productCountAction = (
    <div className="shopping-cart-modal__change-count-section">
        <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs={4}>
                <IconButton className="shopping-cart-modal__change-count-button">
                    <Avatar className="shopping-cart-modal__change-count-icon" >-</Avatar>
                </IconButton>
            </Grid>
            <Grid item xs={4}>
                <span className="shopping-cart-modal__text">1</span>
            </Grid>
            <Grid item xs={4}>
                <IconButton className="shopping-cart-modal__change-count-button">
                    <Avatar className="shopping-cart-modal__change-count-icon" >+</Avatar>
                </IconButton>
            </Grid>
        </Grid>
    </div>
)

const price = (<span className="shopping-cart-modal__text">$122</span>)
const parcialTotal = (<span className="shopping-cart-modal__text">$244</span>)

const rows = [
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
    createData(productContent, price, productCountAction, parcialTotal, deleteButton),
];

export default function ShoppingCartComponent(props) {
    const [openModal, setOpenModal] = useState(true);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleCloseModal = () => {
        setOpenModal(false);
        props.setShoppingModal(false);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                className="shopping-cart-modal"
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Grid className="shopping-cart-modal__section" container justify="center" alignItems="center">
                    <Fade in={openModal}>
                        <div>
                            <Grid container justify="flex-end" alignItems="flex-start">
                                <IconButton className="shopping-cart-modal__close-button" onClick={handleCloseModal}>
                                    <CloseRoundedIcon className="shopping-cart-modal__close-button-icon" />
                                </IconButton>
                            </Grid>
                            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                                <Paper>
                                    <TableContainer component={Paper} className="shopping-cart-modal__table">
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <span className="shopping-cart-modal__text">Producto</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span className="shopping-cart-modal__text">Precio</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span className="shopping-cart-modal__text">Cantidad</span>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span className="shopping-cart-modal__text">Total parcial</span>
                                                    </TableCell>
                                                    <TableCell align="right"></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.producto}
                                                        </TableCell>
                                                        <TableCell align="right">{row.precio}</TableCell>
                                                        <TableCell align="right">{row.cantidad}</TableCell>
                                                        <TableCell align="right">{row.totalParcial}</TableCell>
                                                        <TableCell>{row.action}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow>
                                                    <TableCell >
                                                        <Grid item container justify="flex-start" alignItems="center" xs={12}>
                                                            <TablePagination
                                                                className="shopping-cart-modal__pagination"
                                                                rowsPerPageOptions={[4]}
                                                                component="div"
                                                                count={rows.length}
                                                                rowsPerPage={rowsPerPage}
                                                                page={page}
                                                                onChangePage={handleChangePage}
                                                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                                            />
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <span className="shopping-cart-modal__text-total">Total: </span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className="shopping-cart-modal__text-total">$1234</span>
                                                    </TableCell>
                                                    <TableCell  colSpan={2}>
                                                        <Grid className="buy-button" item container justify="flex-end" alignItems="center" xs={12}>
                                                            <Button variant="contained" color="primary">
                                                                Comprar
                                                            </Button>
                                                        </Grid>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>
                        </div>
                    </Fade>
                </Grid>
            </Modal>
        </div>
    );
};
