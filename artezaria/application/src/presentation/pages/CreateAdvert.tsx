import {Box, Button, Card, CardMedia, Divider, Grid, TextField, Typography} from "@mui/material";
import React, {useContext, useState} from "react";
import {Product} from "../../domain/Product";
import {UserContext} from "../context/UserContext";
import {createProduct} from "../../api/Product";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

function CreateAdvert() {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [pictureSelected, setSelected] = useState(false);
    const [product] = useState(new Product());
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        product.artist = user;
        const res = await createProduct(product);

        if (!res.success) {
            return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }
        enqueueSnackbar(res.message, {
            variant: 'success'
        });

        navigate('/home');

    };

    return (
        <>
            {/* Title */}
            <Typography variant="h4">Novo anúncio</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <Card raised sx={{padding: 5}}>
                <Box component="form" onSubmit={handleSubmit}>
                    <Box marginBottom={2}>
                        {pictureSelected ? (
                                <CardMedia
                                    component="img"
                                    height="400"
                                    src={product.image}
                                    sx={{objectFit: "scale-down", width: "100%"}}
                                />) :
                            (
                                <TextField fullWidth id="standard-basic" required label="URL da foto" variant="outlined"
                                           onChange={e => {
                                               product.image = e.target.value
                                           }}/>)
                        }
                    </Box>
                    {pictureSelected ? (
                            <Button variant="contained" color="primary" onClick={() => setSelected(false)}>
                                Remover foto
                            </Button>
                        )
                        : (
                            <Button variant="contained" color="secondary" onClick={() => setSelected(true)}>
                                Selecionar foto
                            </Button>
                        )}

                    <Divider sx={{marginTop: 2, marginBottom: 2}}/>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField fullWidth id="standard-basic" required label="Título" variant="outlined"
                                       onChange={e => {
                                           product.title = e.target.value
                                       }}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField type="number" fullWidth id="standard-basic" required label="Preço"
                                       variant="outlined" onChange={e => {
                                product.price = parseFloat(e.target.value)
                            }}/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField type="number" fullWidth id="standard-basic" required label="Quantidade"
                                       variant="outlined" onChange={e => {
                                product.quantityInStock = parseInt(e.target.value)
                            }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline minRows={2} fullWidth id="standard-basic" label="Descrição"
                                       required variant="outlined" onChange={e => {
                                product.description = e.target.value
                            }}/>
                        </Grid>
                    </Grid>
                    <Box paddingTop={2} style={{display: "flex"}}>
                        <Button type="submit" variant="contained" style={{marginLeft: "auto"}}> Publicar </Button>
                    </Box>
                </Box>
            </Card>
        </>

    )
}

export default CreateAdvert;