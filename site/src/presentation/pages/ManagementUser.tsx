import React, {useContext, useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ManagementUserItem from '../components/Management/ManagementUserItem';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {USERS} from '../../data/UserData';
import {ManagementContext} from "../context/ManagementContext";


const ManagementUser = () => {
    const {users, setUsers} = useContext(ManagementContext);
    setUsers(USERS);
    let [localUsers] = useState(users);

    useEffect(() => {
        localUsers = users;
    }, [users]);

    return (
        <>

            <Typography variant="h4">Gerenciamento de Usuários</Typography>

            {/* Content */}
            <Divider sx={{marginBottom: 5}}/>
            <TextField sx={{margin: 5, width: "50%"}}
                       label="Pesquise pelo ID do usuário"
                       variant="outlined"
                       InputProps={{
                           endAdornment: (
                               <SearchIcon/>
                           ),
                       }}
            />
            <Box component='div'>
                <Grid container spacing={3} sx={{mt: 0, display: 'flex', justifyContent: 'center'}}>
                    {localUsers.length > 0 ? (localUsers.map((user) => (
                        <ManagementUserItem {...user} />
                    ))) : (
                        <Typography variant='h4'> Não há resultados!</Typography>
                    )}
                </Grid>
            </Box>
        </>
    );
}

export default ManagementUser;