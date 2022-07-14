'use strict';

const User = require('../Model/User');
const Product = require('../Model/Product');
const {
    SUCCESS, PRODUCT_INSERT_ERROR, PRODUCT_LIST_ERROR,
    USER_DELETE_PRODUCT_ERROR,
    USER_DELETE_PURCHASE_ERROR,
    SERVER_ERROR, PRODUCT_DELETE_ERROR
} = require("../Util/Messages");
const Console = require("console");
const {ObjectId} = require('mongodb');
const Purchase = require("../Model/Purchase");
const PurchaseItem = require("../Model/PurchaseItem");

// Inserção
const createProduct = async (req, res) => {
    try {
        // Cria o novo usuário
        let product = new Product(req.body.product);

        product._id = null;
        // Configura o ID do artista
        product.artist = req.body.product.artist._id;

        console.log(req.body.product);
        // Salva o produto
        await product.save();

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "success": true
        });
    } catch (e) {
        console.log(e);
        // Retorna erro
        return res.status(400).send({
            "message": PRODUCT_INSERT_ERROR,
            "success": true
        });
    }
};

// Pesquisa
const findPublishedProducts = async (req, res) => {
    try {
        // Cria o artista
        let user = new User(req.body.artist);

        // Busca os produtos
        const products = await Product.aggregate([
            {$match: {"artist": user._id}},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "products": products
        });
    } catch (e) {
        // Retorna sucesso e uma mensagem
        return res.status(400).send({
            "message": PRODUCT_LIST_ERROR,
            "products": null
        });
    }
};

// Pesquisa
const findProduct = async (req, res) => {
    try {
        // Busca o produto
        const product = await Product.aggregate([
            {$match: {"_id": ObjectId(req.body.product._id)}},
            {$limit: 1},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "product": product[0]
        });
    } catch (e) {
        // Retorna sucesso e uma mensagem
        return res.status(400).send({
            "message": PRODUCT_LIST_ERROR,
            "product": null
        });
    }
};

// Pesquisa
const findProductByName = async (req, res) => {
    try {
        // Busca o produto
        const products = await Product.aggregate([
            {$match: {"title": {$regex: '^' + req.body.product.title, $options: 'i'}}},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "products": products
        });
    } catch (e) {
        // Retorna sucesso e uma mensagem
        return res.status(400).send({
            "message": PRODUCT_LIST_ERROR,
            "products": null
        });
    }
};

// Deleção
const deleteProduct = async (req, res) => {
    try {
        let product = new Product(req.body.product);
        console.log(product);

        // Busca os itens das compras
        const purchases = await PurchaseItem.find({"product": product._id});

        // Verifica se produto está em compras
        if (purchases.length > 0) return res.status(200).send({
            "message": PRODUCT_DELETE_ERROR,
            "success": false
        });

        await product.delete();

        return res.status(200).send({
            "message": SUCCESS,
            "success": true
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "success": false
        });
    }
}

// Mais vendidos
const getMostSold = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {$sort: {quantitySold: -1}},
            {$limit: 10},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        return res.status(200).send({
            "message": SUCCESS,
            "products": products
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "success": false
        });
    }
}

// Mais recentes
const getMostRecent = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {$sort: {_id: -1}},
            {$limit: 10},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        return res.status(200).send({
            "message": SUCCESS,
            "products": products
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "success": false
        });
    }
}

// Produtos de artista
const getByArtist = async (req, res) => {
    try {
        const products = await Product.aggregate([
            {$match: {artist: new ObjectId(req.params.id)}},
            {$limit: 10},
            {$sort: {quantitySold: -1}},
            {
                $lookup: {
                    from: "user",
                    localField: "artist",
                    foreignField: "_id",
                    as: "artist"
                }
            },
            {$unwind: "$artist"}
        ]);

        return res.status(200).send({
            "message": SUCCESS,
            "products": products
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "products": false
        });
    }
}

module.exports = {
    createProduct,
    findProduct,
    findPublishedProducts,
    findProductByName,
    deleteProduct,
    getMostSold,
    getMostRecent,
    getByArtist
};