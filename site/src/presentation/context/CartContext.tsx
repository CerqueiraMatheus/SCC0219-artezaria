import {useState, createContext, useEffect, useContext} from 'react';
import {Product} from "../../domain/Product";
import {UserContext} from "./UserContext";

// Cart Context
export type CartContextType = {
    cart: Product[];
    setCart: (cart: Product[]) => void;
    addItemToCart: (item: Product) => void;
    removeItemFromCart: (item: Product) => void;
    isInCart: (item: Product) => boolean;
    amountOfItemsOnCart: number;
    totalCartPrice: number;
    resetCart: () => void;
    increaseItemQuantity: (item: Product) => Product;
    decreaseItemQuantity: (item: Product) => Product;
}

// Amount of items on cart
function countSelectedItems(cart: Product[]) {
    return cart.reduce((acc, cartItem: Product) => (acc += cartItem.quantitySelected), 0);
}

// Total cart price
function countSelectedPrice(cart: Product[]) {
    return cart.reduce((acc, cartItem: Product) => (acc += cartItem.price * cartItem.quantitySelected), 0);
}

// @ts-ignore
export const CartContext = createContext<CartContextType>({});

// Cart Provider
export const CartProvider = ({children}) => {

    const {user} = useContext(UserContext);

    // Cart
    let [cart, setCart] = useState(
        (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []) as Product []
    );

    // Amount counter
    let [amountOfItemsOnCart, setAmount] = useState(countSelectedItems(cart));

    // Total price
    let [totalCartPrice, setPrice] = useState(countSelectedPrice(cart));

    // On cart change updates
    useEffect(() => {
        updateValues(cart);
    }, [cart]);

    useEffect(() => {
        if (user.id === 0) resetCart();
    }, [user]);

    // Value updater
    function updateValues(cart: Product[]) {
        setPrice(countSelectedPrice(cart));
        setAmount(countSelectedItems(cart));
    }

    // Add item to cart
    const addItemToCart = (item: Product) => {
        setCart([...cart, item]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));
    };

    // Remove item from cart
    const removeItemFromCart = (item: Product) => {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.id !== item.id))
        );
    };

    // Check if item is in cart
    const isInCart = (item) => cart.some((cartItem: Product) => cartItem.id === item.id);

    // Increase item of cart
    const increaseItemQuantity = (item: Product) => {
        item = new Product(item);
        item = item.pickOne();
        let index = cart.map(function (x) {
            return x.id;
        }).indexOf(item.id);
        cart[index] = item;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        updateValues(cart);
        return item;
    }

    // Decrease item of cart
    const decreaseItemQuantity = (item: Product) => {
        item = new Product(item);
        item = item.removeOne();
        let index = cart.map(function (x) {
            return x.id;
        }).indexOf(item.id);
        cart[index] = item;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        updateValues(cart);
        return item;
    }

    // Reset cart
    const resetCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

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
                increaseItemQuantity,
                decreaseItemQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
