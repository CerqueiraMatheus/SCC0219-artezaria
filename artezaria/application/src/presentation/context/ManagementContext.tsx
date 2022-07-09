import {useState, createContext} from 'react';
import {User} from "../../domain/User";
import {Product} from "../../domain/Product";

// Cart Context
export type ManagementContextType = {
    users: User[];
    setUsers: (users: User[]) => void;

    products: Product[];
    setProducts: (products: Product[]) => void;

    removeUser: (user: User) => void;
    resetUsers: () => void;
    resetProducts: () => void;
}

// @ts-ignore
export const ManagementContext = createContext<ManagementContextType>();

export const ManagementProvider = ({children}) => {

    // User data
    const [users, setUserData] = useState<User[]>((localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : []) as User[]);

    const setUsers = (u: User[]) => {
        console.log(JSON.stringify(users));
        setUserData(u);
        localStorage.setItem('users', JSON.stringify([...u]));
    }

    const removeUser = (u: User) => {
        setUsers(users.filter((user) => user._id !== u._id));
        localStorage.setItem(
            'users',
            JSON.stringify(users.filter((user) => user._id !== u._id))
        );
    }

    // Reset user
    const resetUsers = () => {
        setUserData([]);
        localStorage.setItem('users', JSON.stringify([]));
    };

    // User data
    const [products, setProductData] = useState<Product[]>((localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : []) as Product[]);


    const setProducts = (products: Product[]) => {
        setProductData(products);
        localStorage.setItem('products', JSON.stringify([...products]));
    }

    // Reset user
    const resetProducts = () => {
        setProductData([]);
        localStorage.setItem('products', JSON.stringify([]));
    };

    return (
        <ManagementContext.Provider
            value={{
                users,
                setUsers,
                removeUser,
                resetUsers,
                products,
                setProducts,
                resetProducts
            }}
        >
            {children}
        </ManagementContext.Provider>
    );
};
