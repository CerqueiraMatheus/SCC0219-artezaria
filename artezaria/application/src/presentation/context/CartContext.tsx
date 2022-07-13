import {useState, createContext, useEffect, useContext} from 'react';
import {Product} from "../../domain/Product";
import {UserContext} from "./UserContext";
import {PurchaseItem} from "../../domain/PurchaseItem";

// Cart Context
export type CartContextType = {
    cart: PurchaseItem[];
    setCart: (cart: PurchaseItem[]) => void;
    addItemToCart: (item: Product) => PurchaseItem;
    removeItemFromCart: (item: Product) => void;
    isInCart: (item: Product) => boolean;
    amountOfItemsOnCart: number;
    totalCartPrice: number;
    resetCart: () => void;
    increaseItemQuantity: (item: Product) => PurchaseItem;
    decreaseItemQuantity: (item: Product) => PurchaseItem;
}

// Amount of items on cart
function countSelectedItems(cart: PurchaseItem[]) {
    return cart.reduce((acc, cartItem: PurchaseItem) => (acc += cartItem.quantitySelected), 0);
}

// Total cart price
function countSelectedPrice(cart: PurchaseItem[]) {
    return cart.reduce((acc, cartItem: PurchaseItem) => (acc += cartItem.product.price * cartItem.quantitySelected), 0);
}

// @ts-ignore
export const CartContext = createContext<CartContextType>({});

// Cart Provider
export const CartProvider = ({children}) => {

    const {user} = useContext(UserContext);

    // Cart
    let [cart, setCart] = useState(
        (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []) as PurchaseItem []
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
        if (user._id === "") resetCart();
    }, [user]);

    // Value updater
    function updateValues(cart: PurchaseItem[]) {
        setPrice(countSelectedPrice(cart));
        setAmount(countSelectedItems(cart));
    }

    // Add item to cart
    const addItemToCart = (item: Product) => {
        let purchaseItem = new PurchaseItem({product: item, user: user});
        purchaseItem.pickOne();

        setCart([...cart, purchaseItem]);
        localStorage.setItem('cart', JSON.stringify([...cart, item]));

        return purchaseItem;
    };

    // Remove item from cart
    const removeItemFromCart = (item: Product) => {
        setCart(cart.filter((cartItem) => cartItem.product._id !== item._id));
        localStorage.setItem(
            'cart',
            JSON.stringify(cart.filter((cartItem) => cartItem.product._id !== item._id))
        );
    };

    // Check if item is in cart
    const isInCart = (item) => cart.some((cartItem: PurchaseItem) => cartItem.product._id === item._id);

    // Increase item of cart
    const increaseItemQuantity = (item: Product) => {
        // item = new Product(item);
        // item = item.pickOne();
        let index = cart.map(function (x) {
            return x.product._id;
        }).indexOf(item._id);
        let purchaseItem = cart[index];
        purchaseItem.pickOne();
        cart[index] = purchaseItem;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        updateValues(cart);
        return cart[index];
    }

    // Decrease item of cart
    const decreaseItemQuantity = (item: Product) => {
        // item = new Product(item);
        // item = item.removeOne();
        let index = cart.map(function (x) {
            return x.product._id;
        }).indexOf(item._id);
        let purchaseItem = cart[index];
        purchaseItem.removeOne();
        cart[index] = purchaseItem;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        updateValues(cart);
        return cart[index];
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
