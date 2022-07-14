import {Product} from "../domain/Product";
import axios from "axios";
import {SERVER_URL} from "../util/Consts";
import {User} from "../domain/User";

// Cria um produto
export const createProduct = async (product: Product) => {
    try {
        let response = await axios.post(SERVER_URL + "product/create", {
            "product": product
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

// Encontra os produtos publicados por um usuário
export const findPublishedProducts = async (user: User) => {
    try {
        let response = await axios.post(SERVER_URL + "product/findpublished", {
            "artist": user
        });

        return {
            "message": response.data.message,
            "products": <Product[]> response.data.products
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "products": null
        };
    }
}

// Encontra um produto por seu ID
export const findProduct = async (id: string) => {
    try {
        let response = await axios.post(SERVER_URL + "product/find", {
            "product": new Product({_id: id})
        });

        return {
            "message": response.data.message,
            "product": new Product(response.data.product)
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "product": null
        };
    }
}

// Encontra um produto por seu nome
export const findProductByName = async (name: string) => {
    try {
        let response = await axios.post(SERVER_URL + "product/findbyname", {
            "product": new Product({title: name})
        });

        return {
            "message": response.data.message,
            "products": <Product[]> response.data.products
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "products": null
        };
    }
}

// Deleta um produto
export const deleteProduct = async (product: Product) => {
    try {
        let response = await axios.delete(SERVER_URL + "product/delete", {
            data: {
                "product": product
            }
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

// Lista produtos (mais vendidos ou mais recentes)
export const getProducts = async (mostSold: boolean) => {
    try {
        let response = await axios.get(SERVER_URL + "product/" + (mostSold ? "mostsold" : "mostrecent"));

        return {
            "message": response.data.message,
            "products": response.data.products
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "products": false
        };
    }
}

// Lista produtos de um artista
export const getProductsByArtist = async (id: string) => {
    try {
        let response = await axios.get(SERVER_URL + "product/byartist/" + id);

        return {
            "message": response.data.message,
            "products": response.data.products
        }
    } catch (e) {
        console.log(e);
        return {
            "message": "Erro do servidor!",
            "products": []
        };
    }
}