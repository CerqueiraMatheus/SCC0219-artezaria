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
import {findProductByName} from "../../api/Product";
import {findUserByEmail} from "../../api/User";
import {User} from "../../domain/User";

const ManagementUser = () => {
    const {users, setUsers} = useContext(ManagementContext);

    // Reseta ao iniciar
    useEffect(() => {
        setUsers([]);
    }, []);

    // Lida com a submissão
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length < 1) return;
        let res = await findUserByEmail(event.target.value);
        setUsers(res.users!);
    }

    return (
        <>

            <Typography variant="h4">Gerenciamento de Usuários</Typography>

            {/* Content */}
            <Divider sx={{marginBottom: 5}}/>
            <TextField sx={{margin: 5, width: "50%"}}
                       label="Pesquise pelo e-mail do usuário"
                       variant="outlined"
                       InputProps={{
                           endAdornment: (
                               <SearchIcon/>
                           ),
                       }}
                       onChange={handleChange}
            />

            {/* Itens */}
            <Box component='div'>
                <Grid container spacing={3} sx={{mt: 0, display: 'flex', justifyContent: 'center'}}>
                    {users.length > 0 && (users.map((user) => (
                        <ManagementUserItem {...user} />
                    )))}
                </Grid>
            </Box>
        </>
    );
}

export default ManagementUser;