import {Box, Button, Card, CardMedia, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

function CreateAdvert() {
    const uploadFile = () => {
    }
    const [pictureSelected, setSelected] = useState(false);

    return (
        <Stack>
            <Typography variant='h4' gutterBottom>Novo anúncio</Typography>
            <Card raised sx={{padding: 5}}>

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
                        <TextField fullWidth id="standard-basic" label="Title" variant="outlined"/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth id="standard-basic" label="Price" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField multiline minRows={2} fullWidth id="standard-basic" label="Descrição"
                                   variant="outlined"/>
                    </Grid>
                </Grid>
                <Box paddingTop={2} style={{display: "flex"}}>
                    <Button variant="contained" style={{marginLeft: "auto"}}> Publicar </Button>
                </Box>
            </Card>
        </Stack>

    )
}

export default CreateAdvert;