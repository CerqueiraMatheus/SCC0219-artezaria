import {Box, Button, Card, CardMedia, Divider, Grid, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

function CreateAdvert() {
    const uploadFile = () => {
    }
    const [pictureSelected, setSelected] = useState(false);

    return (
        <>
            {/* Title */}
            <Typography variant="h4">Novo anúncio</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <Card raised sx={{padding: 5}}>
                <Box component="form">
                    <Box marginBottom={2}>
                        {pictureSelected &&
                            <CardMedia
                                component="img"
                                height="400"
                                src="https://renatoalves.com.br/blog/wp-content/uploads/2021/06/placeholder.png"
                                onClick={uploadFile}
                                sx={{objectFit: "scale-down", width: "100%"}}
                            />}
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
                        <Grid item xs={9}>
                            <TextField fullWidth id="standard-basic" required label="Título" variant="outlined"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField type="number" fullWidth id="standard-basic" required label="Preço" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline minRows={2} fullWidth id="standard-basic" label="Descrição"
                                       required variant="outlined"/>
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