import React, {useContext, useState} from "react";
import {UserContext} from "../context/UserContext";
import {Avatar, Card, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {User, UserTypes} from "../../domain/User";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function EditProfilePage() {
    const {user, updateUser} = useContext(UserContext);
    const localUser = new User(user);

    const spacing = 2;
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log(JSON.stringify(localUser))
        updateUser(localUser);
        navigate('/home');
    }

    return (
        <>
            {/* Title */}
            <Typography variant="h4">Editar perfil</Typography>
            <Divider sx={{marginBottom: 5}}/>

            <Card raised sx={{padding: 5}}>
                <Typography variant='h4' textAlign='center' gutterBottom>
                    Dados
                </Typography>
                <Stack spacing={spacing} alignItems='center'>
                    <TextField fullWidth id="outlined-basic" label="Nome" variant="outlined"
                               defaultValue={localUser.name} onChange={e => {
                        localUser.name = e.target.value
                    }} required/>
                    <TextField fullWidth id="outlined-basic" label="Sobrenome" variant="outlined"
                               defaultValue={localUser.lastName} onChange={e => {
                        localUser.lastName = e.target.value
                    }} required/>
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined"
                               defaultValue={localUser.email} onChange={e => {
                        localUser.email = e.target.value
                    }} required/>
                </Stack>
            </Card>

            <div style={{margin: 10}}/>

            {user.type !== UserTypes.ADMIN &&
                <Card raised sx={{padding: 5}}>
                    <Typography variant='h4' textAlign='center' gutterBottom>
                        Endereço
                    </Typography>
                    <Grid item xs={12}>
                        <TextField fullWidth id="outlined-basic" label="Rua" variant="outlined"
                                   defaultValue={localUser.address} onChange={e => {
                            localUser.address = e.target.value
                        }} required/>
                    </Grid>
                </Card>}

            <div style={{margin: 10}}/>

            {user.type === UserTypes.ARTIST &&
                <Card raised sx={{padding: 5}}>
                    <Typography variant='h4' textAlign='center' gutterBottom>
                        Biografia
                    </Typography>
                    <Grid item xs={12}>
                        <TextField multiline minRows={2} fullWidth id="standard-basic"
                                   variant="outlined" defaultValue={localUser.description} onChange={e => {
                            localUser.description = e.target.value
                        }} required/>
                    </Grid>
                </Card>}

            <div style={{margin: 20}}/>

            {user.type === UserTypes.CLIENT &&
                <Card raised sx={{padding: 5}}>
                    <Typography variant='h4' textAlign='center' gutterBottom>
                        Torne-se um artesão
                    </Typography>
                    <Grid item xs={12}>
                        <FormControlLabel label="Desejo me tornar um artesão e publicar minhas obras" control={
                            <Checkbox
                                color="secondary"
                                onChange={e => {
                                    localUser.type = e.target.value ? UserTypes.ARTIST : UserTypes.CLIENT
                                }}
                                inputProps={{'aria-label': 'controlled'}}
                            />}
                        />
                    </Grid>
                </Card>}

            <div style={{margin: 20}}/>

            <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                type="submit">
                Salvar
            </Button>
        </>
    );
}

export default EditProfilePage;