import React, {useContext, useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {User, UserTypes} from '../../../domain/User';

import {useNavigate} from 'react-router-dom';
import {ManagementContext} from "../../context/ManagementContext";
import {PurchaseItem} from "../../../domain/PurchaseItem";
import {useSnackbar} from "notistack";
import {markItemSent} from "../../../api/Purchase";
import {updateToAdmin} from "../../../api/User";

const ManagementUserItem = (u: User) => {
    const [user, setUser] = useState<User>(u);
    const {enqueueSnackbar} = useSnackbar();

    const navigate = useNavigate();
    const {removeUser, updateUser} = useContext(ManagementContext);

    // Lida com a remoção
    const handleRemove = async () => {
        let response = await removeUser(user);

        if (response.success)
            return enqueueSnackbar(u.name + " removido com sucesso!", {
                variant: 'success'
            });

        return enqueueSnackbar(response.message, {
            variant: 'error'
        });
    }

    // Lida com a atualização
    const handleUpdate = async () => {
        setUser(await updateUser(u));
        return enqueueSnackbar("Agora, " + u.name + " é administrador!", {
            variant: 'success'
        });
    }

    useEffect(() => {
        setUser(u);
    }, [u]);

    return (
        <Card raised sx={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            pl: 7,
            width: '75%',
            mt: 2,
            padding: 5
        }}>
            {/* Dados gerais */}
            <Box component='div' sx={{mt: 2, mb: 2}}>
                <Typography variant='h4' align='left' sx={{mb: 1}}>{user.name + ' ' + user.lastName} </Typography>
                <Typography align='left'>Email: {user.email}</Typography>
                <Typography align='left'>Endereço: {user.address}</Typography>
            </Box>

            {/* Ações */}
            <Box component='div' sx={{
                width: 'auto',
                mt: 'auto',
                mb: 'auto',
                ml: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 'auto',
                borderSpacing: 2
            }}>
                {user.type === UserTypes.ARTIST &&
                    <Button sx={{margin: 1}} variant="contained" color="inherit" onClick={() => {
                        navigate('/artist/' + user._id)
                    }}>Ver perfil</Button>}
                {user.type !== UserTypes.ADMIN && (
                    <>
                        <Button variant='contained' color='inherit' sx={{margin: 1}} onClick={handleUpdate}>Tornar
                            Admin</Button>
                        <Button variant="contained" color="secondary" onClick={handleRemove}
                                sx={{margin: 1}}>Excluir</Button>
                    </>
                )}
            </Box>
        </Card>
    );
}

export default ManagementUserItem;