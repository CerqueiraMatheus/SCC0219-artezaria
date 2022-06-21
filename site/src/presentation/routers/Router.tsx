import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';

import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

import ManagementProduct from '../pages/ManagementProduct';
import Products from '../pages/Products';
import ThemeContext from '../context/ThemeContext';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ProductDetail from "../pages/ProductDetail";
import ArtistDetail from "../pages/ArtistDetail";
import {CartContext, CartProvider} from "../context/CartContext";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {UserContext, UserProvider} from "../context/UserContext";
import AccountPage from "../pages/Account";
import {useContext} from "react";
import EditProfilePage from '../pages/EditProfile';
import Adverts from '../pages/Adverts';
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ManagementUser from  '../pages/ManagementUser';
import Management from '../pages/Management';
import CreateAdvert from '../pages/CreateAdvert';

const DashboardRoutes = () => {
    const {isUserLoggedIn} = useContext(UserContext);
    const {amountOfItemsOnCart} = useContext(CartContext);

    return (
        <>
            <ThemeContext>
                <CssBaseline/>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/home' element={<Products/>}/>
                        <Route path='/item/:itemId' element={<ProductDetail/>}/>
                        <Route path='/artist/:artistId' element={<ArtistDetail/>}/>
                        <Route path='/management/product' element={<ManagementProduct/>}/>s
                        {!isUserLoggedIn() && <Route path='/signin' element={<SignIn/>}/>}
                        {!isUserLoggedIn() && <Route path='/signup' element={<SignUp/>}/>}
                        {isUserLoggedIn() && <Route path='/account' element={<AccountPage/>}/>}
                        {isUserLoggedIn() && <Route path='/profile' element={<EditProfilePage/>}/>}
                        {isUserLoggedIn() && <Route path='/adverts' element={<Adverts/>}/>}
                        {isUserLoggedIn() && <Route path='/create' element={<CreateAdvert/>}/>}
                        {isUserLoggedIn() && <Route path='/cart' element={<Cart/>}/>}
                        {amountOfItemsOnCart > 0 && <Route path='/checkout' element={<Checkout/>}/>}
                        {<Route path='/management/user' element={<ManagementUser />}/>}
                        {/* Adicionar uma nova rota para a página management considerando uma flag de usuário admin */}
                        {/* A rota abaixo é apenas uma rota temporária */}
                        <Route path='/management' element={<Management />}/>
                        <Route path='*' element={<Navigate to='/home'/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </ThemeContext>
        </>
    );
};

export default DashboardRoutes;
