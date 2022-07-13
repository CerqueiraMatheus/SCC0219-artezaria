import {Product} from "../domain/Product";
import axios from "axios";
import {SERVER_URL} from "../util/Consts";
import {User} from "../domain/User";

export const buyCart = async (products: Product[], user: User) => {
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
