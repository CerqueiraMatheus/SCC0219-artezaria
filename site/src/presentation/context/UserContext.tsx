import {useState, createContext} from 'react';
// @ts-ignore
export const UserContext = createContext<any>();

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({
        id: 0,
        name: '',
        lastName: '',
        email: '',
        address: '',
        cardName: '',
        cardNumber: '',
        cardExpDate: '',
        cardCvv: '',
    });
    const [errors, setErrors] = useState({});

    const setUser = (user) => setUserData(user);

    const handleChange = ({target: {name, value}}) => {
        setUserData({
            ...userData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const resetUserData = () => {
        setUserData({
            id: 0,
            address: "",
            cardCvv: "",
            cardExpDate: "",
            cardName: "",
            cardNumber: "",
            email: "",
            lastName: "",
            name: ""
        });
        setErrors({});
    };

    const isUserLoggedIn = () => userData.id !== 0;

    const getUserData = () => userData;

    return (
        <UserContext.Provider
            value={{
                handleChange,
                userData,
                errors,
                setErrors,
                setUserData,
                resetUserData,
                getUserData,
                isUserLoggedIn,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
