import {Product} from "../domain/Product";
import axios from "axios";
import {SERVER_URL} from "../util/Consts";
import {User} from "../domain/User";
import {PurchaseItem} from "../domain/PurchaseItem";

export const buyCart = async (products: PurchaseItem[], user: User) => {
    try {
        let response = await axios.post(SERVER_URL + "purchase/buy", {
            "products": products,
            "user": user
        });

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

export const listPurchasesUser = async (user: User) => {
    try {
        let response = await axios.post(SERVER_URL + "purchase/listbyuser", {
            "user": user
        });

        return {
            "message": response.data.message,
            "purchases": response.data.purchases
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "purchases": null
        };
    }
}

export const listPurchasesItem = async (item: Product) => {
    try {
        let response = await axios.post(SERVER_URL + "purchase/listbyproduct", {
            "product": item
        });

        return {
            "message": response.data.message,
            "purchases": response.data.purchases
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "purchases": null
        };
    }
}


export const markItemSent = async (item: PurchaseItem) => {
    try {
        let response = await axios.post(SERVER_URL + "purchase/markitemsent", {
            "purchaseItem": item
        });

        console.log(response);

        return {
            "message": response.data.message,
            "purchaseItem": response.data.purchaseItem
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "purchaseItem": null
        };
    }
}