import {useState, createContext} from 'react';
import {User} from "../../domain/User";

// Cart Context
export type UserContextType = {
    user: User;
    setUser: (user: User) => void;
    resetUser: () => void;
    isUserLoggedIn: () => boolean;
}

// @ts-ignore
export const UserContext = createContext<UserContextType>();

export const UserProvider = ({children}) => {
    // User data
    const [user, setUserData] = useState<User>(new User());
    const setUser = (user: User) => setUserData(user);

    // Reset user
    const resetUser = () => {
        setUserData(new User());
    };

    // Check logged in
    const isUserLoggedIn = () => user?.id !== 0;

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                resetUser,
                isUserLoggedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
