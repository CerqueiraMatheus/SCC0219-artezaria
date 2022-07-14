import React, {useContext, useEffect} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {PRODUCTS} from '../../data/ProductsData';
import SearchIcon from '@mui/icons-material/Search';
import ManagementProductItem from '../components/Management/ManagementProductItem';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {ManagementContext} from "../context/ManagementContext";
import {findProductByName} from "../../api/Product";

const ManagementProduct = () => {
    const {products, setProducts} = useContext(ManagementContext);

    // Reseta ao iniciar
    useEffect(() => {
        setProducts([]);
    }, []);

    // Lida com a submissão
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length < 1) return;
        let res = await findProductByName(event.target.value);
        setProducts(res.products!);
    }

    return (
        <>

            <Typography variant="h4">Gerenciamento de anúncios</Typography>

            {/* Content */}
            <Divider sx={{marginBottom: 5}}/>
            <TextField sx={{margin: 5, width: "50%"}}
                       label="Pesquise pelo título do anúncio"
                       variant="outlined"
                       InputProps={{
                           endAdornment: (
                               <SearchIcon/>
                           ),
                       }}
                       onChange={handleChange}
            />

            {/* Itens */}
            <Box component='div'>
                <Grid container spacing={3} sx={{mt: 0, display: 'flex', justifyContent: 'center'}}>
                    {products.length > 0 && (products.map((product) => (
                        <ManagementProductItem {...product} />
                    )))}
                </Grid>
            </Box>
        </>
    );
}

export default ManagementProduct;