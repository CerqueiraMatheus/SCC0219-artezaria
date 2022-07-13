import {Button, Divider, Grid, Typography} from "@mui/material";
import ItemAdvert from "../components/Adverts/ItemAdvert";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {findPublishedProducts} from "../../api/Product";
import {UserContext} from "../context/UserContext";
import {Product} from "../../domain/Product";
import {useSnackbar} from "notistack";

function Adverts() {
    const {user} = useContext(UserContext);
    const [products, setProducts] = useState<Product []>();
    const navigate = useNavigate();
    const createAdvert = () => navigate(`/create`);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        const fetchData = async () => {
            const res = await findPublishedProducts(user);
            if (res.products) setProducts(res.products);
            else return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }

        fetchData();
    }, []);

    return (
        <>
            <Typography variant="h4">Meus anúncios</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <Button variant="contained" color="secondary" endIcon={<AddIcon/>} onClick={createAdvert}>Criar novo
                anúncio</Button>

            <Grid container spacing={2} sx={{marginTop: 5}}>
                {products?.map((item) => (
                    <Grid item xs={4} key={item._id}>
                        <ItemAdvert {...item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Adverts;