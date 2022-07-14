import {useState, createContext} from 'react';
import {User} from "../../domain/User";
import {Product} from "../../domain/Product";
import {deleteUser, updateToAdmin} from "../../api/User";
import {deleteProduct} from "../../api/Product";

// Cart Context
export type ManagementContextType = {
    users: User[];
    updateUser: (user: User) => Promise<User>;
    setUsers: (users: User[]) => void;

    products: Product[];
    removeProduct: (product: Product) => Promise<{message: string, success: boolean}>;
    setProducts: (products: Product[]) => void;

    removeUser: (user: User) => Promise<{message: string, success: boolean}>;
    resetUsers: () => void;
    resetProducts: () => void;
}

// @ts-ignore
export const ManagementContext = createContext<ManagementContextType>();

export const ManagementProvider = ({children}) => {

    // User data
    const [users, setUserData] = useState<User[]>((localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : []) as User[]);

    const setUsers = (u: User[]) => {
        setUserData(u);
        console.log(u);
        localStorage.setItem('users', JSON.stringify([...u]));
    }

    // Update user
    const updateUser = async (u: User) => {
        let index = users.map(function (x) {
            return x._id;
        }).indexOf(u._id);
        let res = await updateToAdmin(u);
        users[index] = res.user;
        setUsers(users);
        localStorage.setItem('users', JSON.stringify([...users]));
        return users[index];
    }

    // Remove user
    const removeUser = async (u: User) => {
        let response = await deleteUser(u);

        if (response.success) {
            setUsers(users.filter((user) => user._id !== u._id));

            localStorage.setItem(
                'users',
                JSON.stringify(users.filter((user) => user._id !== u._id))
            );
        }

        return {
            "message": response.message,
            "success": response.success
        }
    }

    // Remove produt
    const removeProduct = async (p: Product) => {
        let response = await deleteProduct(p);

        if (response.success) {
            setProducts(products.filter((product) => product._id !== p._id));

            localStorage.setItem(
                'products',
                JSON.stringify(products.filter((product) => product._id !== p._id))
            );
        }

        return {
            "message": response.message,
            "success": response.success
        }
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
                users: users,
                updateUser,
                setUsers,
                removeUser,
                resetUsers,
                products,
                removeProduct,
                setProducts,
                resetProducts
            }}
        >
            {children}
        </ManagementContext.Provider>
    );
};
