import {Button, Divider, Grid, Stack, Typography} from "@mui/material";
import {PRODUCTS} from "../../data/ProductsData";
import ItemAnnouncement from "../components/Item/ItemAnnouncement";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import React from "react";


function Adverts() {

    const navigate = useNavigate();
    const createAdvert = () => navigate(`/create`);

    return (
        <>
            <Typography variant="h4">Meus anúncios</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <Button variant="contained" color="secondary" endIcon={<AddIcon/>} onClick={createAdvert}>Criar novo
                anúncio</Button>

            <Grid container spacing={2} sx={{marginTop: 5}}>
                {PRODUCTS?.map((item) => (
                    <Grid item xs={4} key={item.id}>
                        <ItemAnnouncement {...item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Adverts;