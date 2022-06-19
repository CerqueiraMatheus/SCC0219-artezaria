import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {artists} from "../../../data/ArtistsData";
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const navigate = useNavigate();

    return (
        <div>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box', paddingTop: 5, zIndex: 1},
                }}
            >
                <Toolbar/>
                <Typography variant="h6">
                    Artistas
                </Typography>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {artists.map((artist) => (
                            <ListItem key={artist.name} disablePadding>
                                <ListItemButton onClick={() => navigate(`/artist/${artist.id}`)}>
                                    <ListItemText primary={artist.name}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}