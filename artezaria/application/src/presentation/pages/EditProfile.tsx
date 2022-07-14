import React, {useContext, useEffect} from "react";
import {UserContext} from "../context/UserContext";
import {Card, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {User, UserTypes} from "../../domain/User";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {update} from "../../api/User";
import {useSnackbar} from "notistack";

function EditProfilePage() {
    const {user, updateUser} = useContext(UserContext);
    const localUser = new User(user);
    const {enqueueSnackbar} = useSnackbar();

    const spacing = 2;
    const navigate = useNavigate();

    // Lida com a submissão do formulário
    const handleSubmit = async () => {

        const res = await update(localUser);
        if (!res.success) {
            return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }

        enqueueSnackbar(res.message, {
            variant: 'success'
        });

        updateUser(localUser);
        navigate('/home');
    }

    return (
        <>
            {/* Title */}
            <Typography variant="h4">Editar perfil</Typography>
            <Divider sx={{marginBottom: 5}}/>


            <Card raised sx={{padding: 5}}>

                {/* Dados do usuário */}
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
                               defaultValue={localUser.email} disabled={true} onChange={e => {
                        localUser.email = e.target.value
                    }} required/>
                </Stack>
            </Card>

            <div style={{margin: 10}}/>

            {/* Endereço */}
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

            {/* Biografia */}
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

            {/* Tornar admin */}
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