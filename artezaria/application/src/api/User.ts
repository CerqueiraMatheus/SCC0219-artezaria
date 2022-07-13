import axios from 'axios';
import {User} from "../domain/User";
import {SERVER_URL} from "../util/Consts";

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