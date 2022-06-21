import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ManagementUserItem from '../components/Management/ManagmentUserItem';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { Users } from '../../data/UserData';


const ManagementUser = () => {
    return (
        <>

        <Typography variant="h5">Gerenciamento de Usuários</Typography>

        {/* Content */}
        <Divider/>
         <TextField sx={{margin: 5, width: "50%"}}
        label="TextField"
        variant="outlined" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
        <Box component='div'>
            <Grid container spacing={3} sx={{mt : 0, display: 'flex', justifyContent: 'center'}}>            
                {Users.length > 0 ? (Users.map((user) => (
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