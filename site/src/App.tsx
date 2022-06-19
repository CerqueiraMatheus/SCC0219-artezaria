import React from 'react';
import './App.css';
import AppRouter from './presentation/routers/AppRouter';
import {CartProvider} from './presentation/context/CartContext';
import {UserProvider} from "./presentation/context/UserContext";

function App() {
    return (
        <div className="App">
            <UserProvider>
                <CartProvider>
                    <AppRouter/>
                </CartProvider>
            </UserProvider>
        </div>
    );
}

export default App;
