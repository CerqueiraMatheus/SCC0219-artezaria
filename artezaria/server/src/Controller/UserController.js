'use strict';

const User = require('../Model/User');
const {
    SIGNIN_ERROR,
    SUCCESS,
    SERVER_ERROR,
    SIGNUP_ERROR,
    USER_UPDATE_ERROR,
    PRODUCT_LIST_ERROR, USER_DELETE_PRODUCT_ERROR, USER_DELETE_PURCHASE_ERROR
} = require("../Util/Messages");
const Product = require("../Model/Product");
const Purchase = require("../Model/Purchase");
const {ObjectID, ObjectId} = require("mongodb");
const PurchaseItem = require("../Model/PurchaseItem");

// Entrada
const signIn = async (req, res) => {
    try {

        // console.log(JSON.parse(req.body));
        console.log(req.body);
        console.log(req.body.email);

        // Busca por um usuário
        const user = await User.findOne({email: req.body.email, password: req.body.password});

        console.log(user);

        // Retorna o usuário e uma mensagem
        return res.status(200).send({
            "message": (user) ? SUCCESS : SIGNIN_ERROR,
            "user": user
        });

    } catch (e) {
        console.log(e);

        // Erro do servidor
        return res.status(400).send(SERVER_ERROR);
    }
}

// Cadastro
const signUp = async (req, res) => {
    try {
        // Cria o novo usuário
        const user = new User(req.body);
        await user.save();

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "success": true
        });
    } catch (e) {
        // Erro do servidor
        return res.status(400).send({
            "message": e.code === 11000 ? SIGNUP_ERROR : SERVER_ERROR,
            "success": false
        });
    }
}

// Atualização
const updateUser = async (req, res) => {
    try {
        // Encontra o usuário
        await User.findOneAndUpdate({email: req.body.user.email}, req.body.user);

        console.log(req.body.user);
        console.log(req.body.user.email);
        // Envia a resposta
        res.status(200).send({
            "message": SUCCESS,
            "success": true
        });
    } catch (e) {
        // Erro
        res.status(400).send({
            "message": USER_UPDATE_ERROR,
            "success": true
        });
    }
}


// Pesquisa
const findUserByEmail = async (req, res) => {
    try {
        // Busca o usuário
        const users = await User.aggregate([
            {$match: {"email": {$regex: '^' + req.body.user.email, $options: 'i'}}},
        ]);

        console.log(req.body.user.email);
        console.log(users);

        // Retorna sucesso e uma mensagem
        return res.status(200).send({
            "message": SUCCESS,
            "users": users
        });
    } catch (e) {
        // Retorna sucesso e uma mensagem
        return res.status(400).send({
            "message": USER_UPDATE_ERROR,
            "users": null
        });
    }
};

// Atualização para admin
const updateToAdmin = async (req, res) => {
    try {
        let reqUser = req.body.user;

        let user = await User.findOneAndUpdate({"_id": new ObjectId(reqUser._id)}, {"type": 2}, {
            new: true
        });

        reqUser.type = user.type;

        return res.status(200).send({
            "message": SUCCESS,
            "user": reqUser
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "user": null
        });
    }
}

// Deleção
const deleteUser = async (req, res) => {
    try {
        let user = new User(req.body.user);
        console.log(user);

        // Busca os produtos
        const products = await Product.find({"artist": user._id});

        // Verifica se usuário tem produtos
        if (products.length > 0) return res.status(200).send({
            "message": USER_DELETE_PRODUCT_ERROR,
            "success": false
        });

        // Busca as compras
        const purchases = await Purchase.find({"user": user._id});

        // Verifica se usuário tem compras
        if (purchases.length > 0) return res.status(200).send({
            "message": USER_DELETE_PURCHASE_ERROR,
            "success": false
        });

        await user.delete();

        return res.status(200).send({
            "message": SUCCESS,
            "success": true
        });
    } catch (e) {
        console.log("aqui?");
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "success": false
        });
    }
}

// Encontrar por ID
const findByID = async (req, res) => {
    try {
        const user = await User.aggregate([
            {$match: {_id: new ObjectId(req.params.id)}}
        ]);

        return res.status(200).send({
            "message": SUCCESS,
            "user": user[0]
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "user": null
        });
    }
}

module.exports = {signIn, signUp, updateUser, findUserByEmail, updateToAdmin, deleteUser, findByID}