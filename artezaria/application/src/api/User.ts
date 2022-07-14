import axios from 'axios';
import {User} from "../domain/User";
import {SERVER_URL} from "../util/Consts";

// Login
export const signIn = async (email: string, password: string) => {
    try {
        let response = await axios.post(SERVER_URL + "user/signin", {
            "email": email,
            "password": password
        });

        return {
            "message": response.data.message,
            "user": response.data.user ? new User(response.data.user) : null
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "user": null
        };
    }
}

// Cadastro
export const signUp = async (name: string, lastName: string, address: string, email: string, password: string) => {
    try {
        let response = await axios.put(SERVER_URL + "user/signup", {
            "name": name,
            "lastName": lastName,
            "address": address,
            "email": email,
            "password": password
        });

        return {
            "message": response.data.message,
            "success": response.data.success
        }
    } catch (e: any) {
        return {
            "message": e.response.data.message,
            "success": false
        };
    }
}

// Atualização
export const update = async (user: User) => {
    try {
        let response = await axios.put(SERVER_URL + "user/update", {"user": user});

        return {
            "message": response.data.message,
            "success": response.data.success
        }
    } catch (e: any) {
        return {
            "message": e.response.data.message,
            "success": false
        };
    }
}

// Encontra por e-mail
export const findUserByEmail = async (email: string) => {
    try {
        let response = await axios.post(SERVER_URL + "user/findbyemail", {
            "user": new User({email: email})
        });

        console.log(response);
        return {
            "message": response.data.message,
            "users": <User[]> response.data.users
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "users": null
        };
    }
}

// Atualiza para administrador
export const updateToAdmin = async (user: User) => {
    try {
        let response = await axios.post(SERVER_URL + "user/updatetoadmin", {
            "user": user
        });

        console.log(response);

        return {
            "message": response.data.message,
            "user": response.data.user
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "user": null
        };
    }
}

// Deleta usuário
export const deleteUser = async (user: User) => {
    try {
        let response = await axios.delete(SERVER_URL + "user/delete", {
            data: {
                "user": user
            }
        });

        console.log(response);

        return {
            "message": response.data.message,
            "success": response.data.success
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "success": false
        };
    }
}

// Lista usuário por ID
export const getUserByID = async (id: string) => {

    try {
        let response = await axios.get(SERVER_URL + "user/findbyid/" + id);
        return {
            "message": response.data.message,
            "user": new User(response.data.user)
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "user": null
        };
    }
}