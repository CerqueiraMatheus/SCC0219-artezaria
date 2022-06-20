import React, {useContext} from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import Box from "@mui/material/Box";
import { UserContext } from "../context/UserContext";
import { Avatar, Card, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

function EditProfilePage() {
    const spacing = 2
    const {resetUserData} = useContext(UserContext);

    return (
        <Grid container spacing={spacing}>
            <Grid item xs={12}>
                <Avatar>H</Avatar> 
            </Grid>
            <Grid item spacing={spacing} xs={5}>
                <Stack spacing={spacing}>
                    <Card raised sx={{padding: 5}}>
                        <Typography variant='h4' textAlign='center' gutterBottom>
                            Dados
                        </Typography>
                        <Stack spacing={spacing} alignItems='center'>
                            <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" />
                            <TextField fullWidth id="outlined-basic" label="Sobrenome" variant="outlined" />
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        </Stack>
                    </Card>

                    <Card raised sx={{padding: 5}}>
                        <Typography variant='h4' textAlign='center' gutterBottom>
                            Cartões
                        </Typography>
                        <Stack spacing={spacing} alignItems='center'>
                            <TextField fullWidth id="outlined-basic" label="Nome Titular" variant="outlined" />
                            <TextField fullWidth id="outlined-basic" label="Número" variant="outlined" />
                            <TextField fullWidth id="outlined-basic" label="Validade" variant="outlined" />
                        </Stack>  
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={7}>
                <Card raised sx={{padding: 5}}>
                    <Typography variant='h4' textAlign='center' gutterBottom>
                        Endereços
                    </Typography> 
                    <Stack 
                      spacing={spacing} 
                      alignItems='center'
                      divider={<Divider orientation="horizontal" flexItem />}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Rua" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Número" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Complemento" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="CEP" variant="outlined" />
                          </Grid>
                          <Grid item xs={8}>
                            <TextField fullWidth id="outlined-basic" label="Cidade" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Estado" variant="outlined" />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField fullWidth id="outlined-basic" label="Rua" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Número" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Complemento" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="CEP" variant="outlined" />
                          </Grid>
                          <Grid item xs={8}>
                            <TextField fullWidth id="outlined-basic" label="Cidade" variant="outlined" />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField fullWidth id="outlined-basic" label="Estado" variant="outlined" />
                          </Grid>
                        </Grid>
                    </Stack>  
                </Card>  
            </Grid>
        </Grid>
    );
}

export default EditProfilePage;