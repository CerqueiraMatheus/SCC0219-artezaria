import React, {useContext, useState} from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {User, UserTypes} from '../../../domain/User';

import {useNavigate} from 'react-router-dom';
import {ManagementContext} from "../../context/ManagementContext";

const ManagementUserItem = (user: User) => {
    const navigate = useNavigate();
    // Item states
    const [curUser] = useState(user);
    const {removeUser} = useContext(ManagementContext);

    const handleRemove = () => {
        removeUser(user);
    }

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
            <Box component='div' sx={{mt: 2, mb: 2}}>
                <Typography variant='h4' align='left' sx={{mb: 1}}>{curUser.name + ' ' + curUser.lastName} </Typography>
                <Typography align='left'>Email: {curUser.email}</Typography>
                <Typography align='left'>Endereço: {curUser.address}</Typography>
            </Box>

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
                {curUser.type === UserTypes.ARTIST &&
                    <Button sx={{margin: 1}} variant="contained" color="inherit" onClick={() => {
                        navigate('/artist/' + curUser._id)
                    }}>Ver perfil</Button>}
                {curUser.type !== UserTypes.ADMIN && (
                    <>
                        <Button variant='contained' color='inherit' sx={{margin: 1}}>Tornar Admin</Button>
                        <Button variant="contained" color="secondary" onClick={handleRemove}
                                sx={{margin: 1}}>Excluir</Button>
                    </>
                )}
            </Box>
        </Card>
    );
}

export default ManagementUserItem;