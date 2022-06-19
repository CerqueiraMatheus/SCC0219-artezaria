import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {useNavigate} from 'react-router-dom';
import Link from "@mui/material/Link";
import {UserContext} from "../../context/UserContext";

export default function PrimarySearchAppBar() {
    const {amountOfItemsOnCart} = useContext(CartContext);
    const navigate = useNavigate();
    const handleNavigation = () => navigate(`/home`);
    const {isUserLoggedIn} = useContext(UserContext);

    return (
        <Box sx={{flexGrow: 1, marginBottom: "2%"}}>
            <AppBar position="relative" sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
                <Toolbar>
                    <Box component="div" sx={{flexGrow: 1}}>
                        <Link variant="h6" onClick={handleNavigation} color="text.primary" component="button"
                              underline="none">
                            artezaria
                        </Link>
                    </Box>
                    <Box component="div" sx={{flexGrow: 1}}>
                    </Box>

                    <Box component="div" sx={{flexGrow: 1}}>
                        <IconButton color="inherit" size="large">
                            <Badge badgeContent={amountOfItemsOnCart()} color="error">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>

                        <IconButton color="inherit" size="large"
                                    onClick={isUserLoggedIn() ? () => navigate('/account') : () => navigate('/signin')}>
                            <AccountCircleIcon/>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}