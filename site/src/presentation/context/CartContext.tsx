import {useState, createContext} from 'react';

// Interface Item
export interface InterfaceItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
}

// Cart Context
export type CartContextType = {
    cart: InterfaceItem[];
    setCart: (cart: InterfaceItem[]) => void;
    addItemToCart: (item: { id: number, name: string, quantity: number }) => void;
    removeItemFromCart: (item: number) => void;
    isInCart: (item: number) => boolean;
    amountOfItemsOnCart: () => number;
    totalCartPrice: () => number;
    resetCart: () => void;
    getCart: () => any;
}

// @ts-ignore
export const CartContext = createContext<CartContextType>({});

// Cart Provider
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []
    );

    // Add item to cart
    const addItemToCart = (item) => {
        setCart([...cart, item]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));
    };

    // Remove item from cart
    const removeItemFromCart = (id) => {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.id !== id))
        );
    };

    // Check if item is in cart
    const isInCart = (itemId) => cart.some((cartItem) => cartItem.id === itemId);

    // Amount of items on cart
    const amountOfItemsOnCart = () =>
        cart.reduce((acc, item) => (acc += item.quantity), 0);

    // Total cart price
    const totalCartPrice = () =>
        cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);

    // Reset cart
    const resetCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    const getCart = () =>
        cart;

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addItemToCart,
                removeItemFromCart,
                isInCart,
                amountOfItemsOnCart,
                totalCartPrice,
                resetCart,
                getCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
