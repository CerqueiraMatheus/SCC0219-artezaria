import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext";
import {USERS} from "../../data/UserData";
import ErrorSnackbar from "../components/UI/Error";

export default function SignIn() {
    const navigate = useNavigate();
    const openSignUp = () => navigate(`/signup`);
    const {setUser} = useContext(UserContext);
    const [showErrorBar, setShowErrorBar] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        const user = USERS.find(x => x.email === data.get('email')! && x.password === data.get('password')!)!;
        if (user) {
            setUser(user);
            console.log(user);
            navigate('/home');
        } else {
            setShowErrorBar(true);
        }
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
                <Typography component="h1" variant="h5">
                    Entrar
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Endereço de e-mail"
                        name="email"
                        autoComplete="email"
                        type="email"
                        onChange={() => setShowErrorBar(false)}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        onChange={() => setShowErrorBar(false)}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="secondary"/>}
                        label="Lembre-se de mim"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{mt: 3, mb: 2}}
                    >
                        Entrar
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" color="text.secondary">
                                Esqueceu a senha?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" color="text.secondary" onClick={openSignUp}>
                                Ainda não tem conta? Cadastre-se!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {/* Success */}
            {showErrorBar && (<ErrorSnackbar message={"Usuário não encontrado!"}/>)}
        </Container>
    );
}