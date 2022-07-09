import React from 'react';
import './App.css';
import AppRouter from './presentation/routers/AppRouter';
import {CartProvider} from './presentation/context/CartContext';
import {UserProvider} from "./presentation/context/UserContext";
import {ManagementProvider} from "./presentation/context/ManagementContext";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <CartProvider>
                    <ManagementProvider>
                        <SnackbarProvider anchorOrigin={{horizontal: "center", vertical: "bottom"}}>
                            <AppRouter/>
                        </SnackbarProvider>
                    </ManagementProvider>
                </CartProvider>
            </UserProvider>
        </div>
    );
}

export default App;
