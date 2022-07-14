import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import {signIn, signUp} from "../../api/User";
import {useSnackbar} from "notistack";

export default function SignUp() {
    const navigate = useNavigate();
    const openSignIn = () => navigate(`/signin`);
    const {setUser} = useContext(UserContext);
    const {enqueueSnackbar} = useSnackbar();

    // Lida com a submissão
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const res1 = await signUp(
            data.get('firstName')!.toString(),
            data.get('lastName')!.toString(),
            data.get('address')!.toString(),
            data.get('email')!.toString(),
            data.get('password')!.toString()
        );

        if (!res1.success) {
            return enqueueSnackbar(res1.message, {
                variant: 'error'
            });
        }

        const res2 = await signIn(
            data.get('email')!.toString(),
            data.get('password')!.toString()
        );

        if (!res2.user) {
            return enqueueSnackbar(res1.message, {
                variant: 'error'
            });
        }

        enqueueSnackbar(res1.message, {
            variant: 'success'
        });

        setUser(res2.user);
        navigate('/home');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                {/* Título */}
                <Typography component="h1" variant="h5">
                    Cadastro
                </Typography>

                {/* Campos */}
                <Box component="form" onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Sobrenome"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="address"
                                label="Endereço"
                                name="address"
                                autoComplete="address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{mt: 3, mb: 2}}
                    >
                        Cadastrar
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" color="text.secondary" onClick={openSignIn}>
                                Já tem conta? Entre!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}