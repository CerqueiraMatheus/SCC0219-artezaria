import React from 'react';
import './App.css';
import AppRouter from './presentation/routers/AppRouter';
import {CartProvider} from './presentation/context/CartContext';
import {UserProvider} from "./presentation/context/UserContext";
import {ManagementProvider} from "./presentation/context/ManagementContext";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <CartProvider>
                    <ManagementProvider>
                        <AppRouter/>
                    </ManagementProvider>
                </CartProvider>
            </UserProvider>
        </div>
    );
}

export default App;
