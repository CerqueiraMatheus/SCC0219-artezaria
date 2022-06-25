import {useState, createContext, useContext} from 'react';
import {User} from "../../domain/User";

// Cart Context
export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
    resetUser: () => void;
    updateUser: (user: User) => void;
    isUserLoggedIn: () => boolean;
}

// @ts-ignore
export const UserContext = createContext<UserContextType>();

export const UserProvider = ({children}) => {

    // User data
    const [user, setUserData] = useState<User>((localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : new User()) as User);
    const setUser = (user: User) => {
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Reset user
    const resetUser = () => {
        setUserData(new User());
        localStorage.setItem('user', JSON.stringify(new User()));
    };

    // Update user
    const updateUser = (user: User) => {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Check logged in
    const isUserLoggedIn = () => {
        console.log(JSON.stringify(user));
        return (user?.id !== 0);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                resetUser,
                updateUser,
                isUserLoggedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
