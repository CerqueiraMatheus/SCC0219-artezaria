import React, {useContext, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ItemAdvertPurchase from "../components/Adverts/ItemAdvertPurchase";
import {useParams} from "react-router-dom";
import {Product} from "../../domain/Product";
import {PurchaseItem} from "../../domain/PurchaseItem";
import {listPurchasesItem} from "../../api/Purchase";
import Loading from "../components/UI/Loading";

const AdvertPurchase = () => {
    const {productId} = useParams();
    const [purchases, setPurchases] = useState<PurchaseItem[]>([]);
    const [isLoading, setLoading] = useState(true);

    // Atualiza ao iniciar a página
    useEffect(() => {
        const fetchData = async () => {
            const res = await listPurchasesItem(new Product({_id: productId}));
            if (res.purchases) setPurchases(res.purchases);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <>
            {!isLoading ? (
                <>
                    {/* Vendas */}
                    <Typography variant="h4">Vendas do seu anúncio</Typography>

                    {/* Content */}
                    <Divider sx={{marginBottom: 5}}/>

                    {/* Itens */}
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
            ) : (<Loading/>)}
        </>
    );
}

export default AdvertPurchase;