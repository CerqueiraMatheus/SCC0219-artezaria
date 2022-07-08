import {Routes, Route, Navigate} from 'react-router-dom';

import Header from '../components/Navigation/Header';
import Footer from '../components/Navigation/Footer';

import ManagementProduct from '../pages/ManagementProduct';
import Products from '../pages/Products';
import ThemeContext from '../context/ThemeContext';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ProductDetail from "../pages/ProductDetail";
import ArtistDetail from "../pages/ArtistDetail";
import {CartContext} from "../context/CartContext";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {UserContext} from "../context/UserContext";
import AccountPage from "../pages/Account";
import {useContext} from "react";
import EditProfilePage from '../pages/EditProfile';
import Adverts from '../pages/Adverts';
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ManagementUser from '../pages/ManagementUser';
import Management from '../pages/Management';
import CreateAdvert from '../pages/CreateAdvert';
import {UserTypes} from "../../domain/User";
import Purchases from '../pages/Purchases';
import AdvertPurchase from "../pages/AdvertPurchase";

const DashboardRoutes = () => {
    const {user, isUserLoggedIn} = useContext(UserContext);
    const {amountOfItemsOnCart} = useContext(CartContext);
    console.log(user.type);

    return (
        <>
            <ThemeContext>
                <CssBaseline/>
                <Header/>
                <Container>
                    <Routes>
                        <Route path='/item/:itemId' element={<ProductDetail/>}/>
                        <Route path='/artist/:artistId' element={<ArtistDetail/>}/>
                        <Route path='/signin' element={<SignIn/>}/>
                        <Route path='/signup' element={<SignUp/>}/>

                        {/* General home and redirects */}
                        {
                            (!isUserLoggedIn() || user.type !== (UserTypes.ADMIN)) &&
                            <>
                                <Route path='/home' element={<Products/>}/>
                                <Route path='*' element={<Navigate to='/home'/>}/>
                            </>
                        }

                        {/* When logged in */}
                        {(user.type === UserTypes.CLIENT || user.type === UserTypes.ARTIST) && (
                            <>
                                <Route path='/account' element={<AccountPage/>}/>
                                <Route path='/profile' element={<EditProfilePage/>}/>
                                <Route path='/purchases' element={<Purchases/>}/>
                                <Route path='/cart' element={<Cart/>}/>
                                {amountOfItemsOnCart > 0 && <Route path='/checkout' element={<Checkout/>}/>}

                                {/* Artist specific */}
                                {user.type === UserTypes.ARTIST && (
                                    <>
                                        <Route path='/adverts' element={<Adverts/>}/>
                                        <Route path='/adverts/purchases/:productId' element={<AdvertPurchase/>}/>
                                        <Route path='/create' element={<CreateAdvert/>}/>
                                    </>
                                )}
                            </>
                        )}

                        {/* Admin specific*/}
                        {user.type === (UserTypes.ADMIN) && (
                            <>
                                <Route path='/management' element={<Management/>}/>
                                <Route path='/management/user' element={<ManagementUser/>}/>
                                <Route path='/management/product' element={<ManagementProduct/>}/>
                                <Route path='*' element={<Navigate to='/management'/>}/>
                            </>
                        )}

                    </Routes>
                </Container>
                <Footer/>
            </ThemeContext>
        </>
    );
};

export default DashboardRoutes;
