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
    let [cart, setCart] = useState<PurchaseItem[]>(
        (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []) as PurchaseItem []
    );

    const getCart = () => {
        if (cart == null || cart === []) setCart((localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : []) as PurchaseItem []);
        console.log(cart);
        return cart as PurchaseItem [];
    }

    // Amount counter
    let [amountOfItemsOnCart, setAmount] = useState(countSelectedItems(getCart()));

    // Total price
    let [totalCartPrice, setPrice] = useState(countSelectedPrice(getCart()));

    // On cart change updates
    useEffect(() => {
        console.log("aqui");
        updateValues(cart);
    }, [cart]);

    useEffect(() => {
        if (user._id === "") resetCart();
    }, [user]);

    // Value updater
    function updateValues(cart: PurchaseItem[]) {
        if (cart) {
            setPrice(countSelectedPrice(cart));
            setAmount(countSelectedItems(cart));
        }
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
        let index = cart.map(function (x) {
            return x.product._id;
        }).indexOf(item._id);
        let purchaseItem = cart[index];
        purchaseItem.product.quantityInStock -= 1;
        purchaseItem.quantitySelected += 1;
        cart[index] = purchaseItem;
        setCart(cart);
        localStorage.setItem('cart', JSON.stringify([...cart]));
        updateValues(cart);
        return cart[index];
    }

    // Decrease item of cart
    const decreaseItemQuantity = (item: Product) => {
        let index = cart.map(function (x) {
            return x.product._id;
        }).indexOf(item._id);
        let purchaseItem = cart[index];
        purchaseItem.product.quantityInStock += 1;
        purchaseItem.quantitySelected -= 1;
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
