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
import {CartProvider} from "../context/CartContext";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {UserContext, UserProvider} from "../context/UserContext";
import AccountPage from "../pages/Account";
import {useContext} from "react";

const DashboardRoutes = () => {
    const {isUserLoggedIn} = useContext(UserContext);

    return (
        <>
            <ThemeContext>
                <CssBaseline/>
                <Header/>
                <Container sx={{minHeight: "65vh"}}>
                    <Routes>
                        <Route path='/home' element={<Products/>}/>
                        <Route path='/item/:itemId' element={<ProductDetail/>}/>
                        <Route path='/artist/:artistId' element={<ArtistDetail/>}/>
                        {!isUserLoggedIn() && <Route path='/signin' element={<SignIn/>}/>}
                        {!isUserLoggedIn() && <Route path='/signup' element={<SignUp/>}/>}
                        {isUserLoggedIn() && <Route path='/account' element={<AccountPage/>}/>}
                        {/* <Route path='/' element={<ItemListCointainer />} />
                <Route path='/category/:categoryId' element={<ItemListCointainer />} />
                <Route path='/search/:term' element={<ItemListCointainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} /> */}

                        <Route path='*' element={<Navigate to='/home'/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </ThemeContext>
        </>
    );
};

export default DashboardRoutes;
