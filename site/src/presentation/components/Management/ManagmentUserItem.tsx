import React from 'react';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {User} from '../../../domain/User';
import {Navigate} from 'react-router-dom';

const ManagmentUserItem = (user: User) => {
    return (
        <Card raised sx={{boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', pl: 7, width: '75%', mt: 2, padding: 5}} >  
            <Box component='div' sx={{mt: 2, mb: 2}} >
                <Typography variant='h4' align='left' sx={{mb: 1}} >{user.name + ' ' + user.lastName} </Typography>
                <Typography align='left'>Email: {user.email}</Typography> 
                <Typography align='left'>Endereço : {user.address}</Typography>
            </Box>
            <Box component='div' sx={{width: '50%', mt: 'auto', mb: 'auto', ml: 'auto', mr: 3, display: 'flex', justifyContent: 'space-around'}} >
                {/* Adicionar rota para os botões Ver mais e Remover  */}
                <Button variant="contained" color="inherit">Ver perfil</Button>
                <Button variant='contained' color='inherit'>Tornar Admin</Button>
                <Button variant="contained" color="secondary">Excluir</Button>
            </Box>
        </Card>
    );
}

export default ManagmentUserItem;