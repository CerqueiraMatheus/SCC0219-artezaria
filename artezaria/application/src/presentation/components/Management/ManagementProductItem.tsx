import React, {useContext} from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Product} from '../../../domain/Product';
import {useNavigate} from "react-router-dom";
import {ManagementContext} from "../../context/ManagementContext";
import {useSnackbar} from "notistack";
import Grid from "@mui/material/Grid";

const ManagementProductItem = (product: Product) => {
    const navigate = useNavigate();
    const {removeProduct} = useContext(ManagementContext);
    const {enqueueSnackbar} = useSnackbar();

    // Lida com a remoção
    const handleRemove = async () => {
        let response = await removeProduct(product);

        if (response.success)
            return enqueueSnackbar(product.title + " removido com sucesso!", {
                variant: 'success'
            });

        return enqueueSnackbar(response.message, {
            variant: 'error'
        });
    }

    return (
        <Card raised sx={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            width: '75%',
            padding: 5,
            marginBottom: 1
        }}>

            <Grid container spacing={2} alignItems="center">

                {/* Título */}
                <Grid item xs={6}>
                    <Box component='div' sx={{mt: 2, mb: 2}}>
                        <Typography variant='h6' align='left' sx={{mb: 1}}>{product.title}</Typography>
                        <Typography variant='body1' align='left'>{product.artist.name}</Typography>
                    </Box>
                </Grid>

                {/* Informações de estoque */}
                <Grid item xs={3}>
                    <Box component='div' sx={{mt: 2, mb: 2, ml: '10%'}}>
                        <Typography align='left'>Quantidade em estoque: {product.quantityInStock}</Typography>
                        <Typography align='left'>Quantidade vendida: {product.quantitySold}</Typography>
                        <Typography align='left'>Valor unitário: R${product.price}</Typography>
                    </Box>
                </Grid>

                {/* Ações */}
                <Grid item xs={3}>
                    <Box component='div' sx={{
                        width: 'auto',
                        mt: 'auto',
                        mb: 'auto',
                        ml: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: 'auto',
                        borderSpacing: 2
                    }}>
                        <Button variant="contained" color="inherit" sx={{margin: 1}}
                                onClick={() => navigate('/item/' + product._id)}>Ver
                            Mais</Button>
                        <Button variant="contained" color="secondary" sx={{margin: 1}}
                                onClick={handleRemove}>Remover</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default ManagementProductItem;