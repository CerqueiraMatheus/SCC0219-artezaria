import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {useNavigate} from 'react-router-dom';
import Link from "@mui/material/Link";
import {UserContext} from "../../context/UserContext";
import {UserTypes} from "../../../domain/User";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function PrimarySearchAppBar() {
    const {amountOfItemsOnCart} = useContext(CartContext);
    const navigate = useNavigate();
    const handleNavigation = () => navigate(`/home`);
    const {user, isUserLoggedIn} = useContext(UserContext);

    return (
        <Box sx={{flexGrow: 1, marginBottom: "2%"}}>
            <AppBar position="relative">
                <Toolbar>

                    {/* Title */}
                    <Box component="div" sx={{flexGrow: 1}}>
                        <Link variant="h6" onClick={handleNavigation} color="text.primary" component="button"
                              underline="none">
                            artezaria
                        </Link>
                    </Box>

                    {/* Empty component - to be search bar? */}
                    <Box component="div" sx={{flexGrow: 1}}>
                    </Box>

                    {/* Actions */}
                    <Box component="div" sx={{flexGrow: 1}}>

                        {user.type !== UserTypes.ADMIN ? (
                                <>
                                    {/* Cart */}
                                    <IconButton color="inherit" size="large"
                                                onClick={isUserLoggedIn() ? () => navigate('/cart') : () => navigate('/signin')}>
                                        <Badge badgeContent={amountOfItemsOnCart} color="error">
                                            <ShoppingCartIcon/>
                                        </Badge>
                                    </IconButton>

                                    {/* Profile */}
                                    <IconButton color="inherit" size="large"
                                                onClick={isUserLoggedIn() ? () => navigate('/account') : () => navigate('/signin')}>
                                        <AccountCircleIcon/>
                                    </IconButton>
                                </>) :
                            (
                                <IconButton color="inherit" size="large"
                                            onClick={() => navigate('/management')}>
                                    <AdminPanelSettingsIcon/>
                                </IconButton>
                            )}
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}