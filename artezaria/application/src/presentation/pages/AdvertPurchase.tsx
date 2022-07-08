import React, {useContext} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {PRODUCTS_PURCHASE} from "../../data/ProductsPurchaseData";
import ItemAdvertPurchase from "../components/Adverts/ItemAdvertPurchase";
import {useParams} from "react-router-dom";

const AdvertPurchase = () => {
    const {productId} = useParams();
    const purchases = PRODUCTS_PURCHASE.filter(x => x.product.id === parseInt(productId!));

    return (
        <>

            <Typography variant="h4">Vendas do seu anúncio</Typography>

            {/* Content */}
            <Divider sx={{marginBottom: 5}}/>

            <Box component='div'>
                <Grid container spacing={3} sx={{mt: 0, display: 'flex', justifyContent: 'center'}}>
                    {purchases.length > 0 ? (purchases.map((product) => (
                        <ItemAdvertPurchase {...product} />
                    ))) : (
                        <Typography variant='h4'> Não há vendas!</Typography>
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default AdvertPurchase;