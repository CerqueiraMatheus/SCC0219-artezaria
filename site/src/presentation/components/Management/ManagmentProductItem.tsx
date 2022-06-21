import React from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Product } from '../../../domain/Product';

const ManagmentProductItem = (product: Product) => {
    return (
        <Card raised sx={{boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', pl: 7, width: '75%', mt: 2, padding: 5}} >  
            <Box component='div' sx={{mt: 2, mb: 2}} >
                <Typography variant='h4' align='left' sx={{mb: 1}} >{product.title}</Typography>
                <Typography variant='h6' align='left'>{product.artist.name}</Typography>
            </Box>
            <Box component='div' sx={{mt: 2, mb: 2, ml: '10%'}}>
                <Typography align='left'>Quantidade em estoque: {product.quantityInStock}</Typography>
                <Typography align='left'>Quantidade vendida: {product.quantitySold}</Typography>
                <Typography align='left'>Valor unitário: R${product.price}</Typography>
            </Box>
            <Box component='div' sx={{width: '30%', mt: 'auto', mb: 'auto', ml: 'auto', mr: 5, display: 'flex', justifyContent: 'space-around'}} >
                {/* Adicionar rota para os botões Ver mais e Remover  */}
                <Button variant="contained" color="inherit">Ver Mais</Button>
                <Button variant="contained" color="secondary">Remover</Button>
            </Box>
        </Card>
    );
}

export default ManagmentProductItem;