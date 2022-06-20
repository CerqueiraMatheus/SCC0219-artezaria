import { Box, Button, Card, CardMedia, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function CreateAdvert() {
    const uploadFile = () => {}
    
    return (
        <Stack>
            <Typography variant='h4' gutterBottom>Novo anúncio</Typography>
            <Card raised sx={{padding: 5}}>
                <Box marginBottom={2}>
                <CardMedia
                    component="img"
                    height="280"
                    src="https://renatoalves.com.br/blog/wp-content/uploads/2021/06/placeholder.png"
                    onClick={uploadFile}
                />
                </Box>
                
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <TextField fullWidth id="standard-basic" label="Title" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth id="standard-basic" label="Price" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField multiline minRows={2} fullWidth id="standard-basic" label="Descrição" variant="outlined" />
                    </Grid>
                </Grid>
                <Box paddingTop={2} style={{ display: "flex" }}> 
                    <Button variant="contained" style={{ marginLeft: "auto" }}> Publicar </Button> 
                </Box>
            </Card>
        </Stack>
        
    )
}

export default CreateAdvert;