import React from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Product} from '../../../domain/Product';
import {useNavigate} from "react-router-dom";

const ManagementProductItem = (product: Product) => {
    const navigate = useNavigate();

    return (
        <Card raised sx={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            pl: 7,
            width: '75%',
            mt: 2,
            padding: 5
        }}>
            <Box component='div' sx={{mt: 2, mb: 2}}>
                <Typography variant='h4' align='left' sx={{mb: 1}}>{product.title}</Typography>
                <Typography variant='h6' align='left'>{product.artist.name}</Typography>
            </Box>
            <Box component='div' sx={{mt: 2, mb: 2, ml: '10%'}}>
                <Typography align='left'>Quantidade em estoque: {product.quantityInStock}</Typography>
                <Typography align='left'>Quantidade vendida: {product.quantitySold}</Typography>
                <Typography align='left'>Valor unitário: R${product.price}</Typography>
            </Box>

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
                <Button variant="contained" color="secondary" sx={{margin: 1}}>Remover</Button>
            </Box>
        </Card>
    );
}

export default ManagementProductItem;