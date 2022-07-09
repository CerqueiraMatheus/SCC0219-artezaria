'use strict';

const User = require('../Model/User');
const Product = require('../Model/Product');
const {SUCCESS, PRODUCT_INSERT_ERROR, PRODUCT_LIST_ERROR} = require("../Util/Messages");
const Console = require("console");
const {ObjectId} = require('mongodb');

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

module.exports = {createProduct, findProduct, findPublishedProducts};