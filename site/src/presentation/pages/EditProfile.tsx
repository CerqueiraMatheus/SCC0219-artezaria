import React, {useContext} from "react";
import AccountRowCard from "../components/Account/AccountRowCard";
import Box from "@mui/material/Box";
import { UserContext } from "../context/UserContext";
import { Avatar, Card, Container, Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AddressCard from "../components/Account/AdressCard";
import { user } from "../../data/UserData";

function EditProfilePage() {

	let loggedUser = user;

    const spacing = 2
    return (
        <Grid container spacing={spacing}>
            <Grid item xs={12}>
                <Avatar>H</Avatar> 
            </Grid>
            <Grid item xs={5}>
                <Stack spacing={spacing}>
                    <Card raised sx={{padding: 5}}>
                        <Typography variant='h4' textAlign='center' gutterBottom>
                            Dados
                        </Typography>
                        <Stack spacing={spacing} alignItems='center'>
                            <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined" defaultValue={loggedUser.name}/>
                            <TextField fullWidth id="outlined-basic" label="Sobrenome" variant="outlined" defaultValue={loggedUser.lastName}/>
                            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" defaultValue={loggedUser.email}/>
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
                <AddressCard addresses={user.address}/>
            </Grid>
        </Grid>
    );
}

export default EditProfilePage;