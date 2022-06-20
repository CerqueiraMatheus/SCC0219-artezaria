import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';

// import NavBar from '../components/Navigation/Nav';

import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

// import Navbar from '../components/NavBar/NavBar';
// import ItemListCointainer from '../components/Item/ItemListCointainer';
// import ItemDetailContainer from '../components/Item/ItemDetailContainer';
// import Cart from '../components/Cart/Cart';
// import Checkout from '../components/Checkout/Checkout';

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
                        {!isUserLoggedIn() && <Route path='/signin' element={<SignIn/>}/>}
                        {!isUserLoggedIn() && <Route path='/signup' element={<SignUp/>}/>}
                        {isUserLoggedIn() && <Route path='/account' element={<AccountPage/>}/>}
                        {isUserLoggedIn() && <Route path='/profile' element={<EditProfilePage/>}/>}
                        {isUserLoggedIn() && <Route path='/adverts' element={<Adverts/>}/>}
                        {isUserLoggedIn() && <Route path='/cart' element={<Cart/>}/>}
                        {amountOfItemsOnCart > 0 && <Route path='/checkout' element={<Checkout/>}/>}
                        <Route path='*' element={<Navigate to='/home'/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </ThemeContext>
        </>
    );
};

export default DashboardRoutes;
