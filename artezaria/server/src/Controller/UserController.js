'use strict';

const User = require('../Model/User');
const {SIGNIN_ERROR, SUCCESS, SERVER_ERROR, SIGNUP_ERROR, USER_UPDATE_ERROR} = require("../Util/Messages");

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

// exports.post = async (req, res, next) => {
//     try{
//         const newUser = new User(req.body);
//         await newUser.save()
//         res.status(201).send("Usuário inserido com sucesso!");
//     }
//     catch(e){
//         console.error(e);
//         res.status(400).send("Bad Request");
//     }
// }


//
// const ID_LENGTH_INT = 12;
// const ID_LENGTH_HEX = 24;

// exports.getuserbyemail = async (req, res, next) => {
//     try{
//         const result = await User.findOne({email: req.body.email});
//         res.status(200).send(result);
//     }
//     catch(e){
//         console.error(e);
//     }
// }
//
// exports.post = async (req, res, next) => {
//     try{
//         const newUser = new User(req.body);
//         await newUser.save()
//         res.status(201).send("Usuário inserido com sucesso!");
//     }
//     catch(e){
//         console.error(e);
//         res.status(400).send("Bad Request");
//     }
// }

// exports.put = async (req, res, next) => {
//     try{
//         await User.findOneAndUpdate({email: req.body.email}, req.body);
//         res.status(200).send("Usuário Alterado com sucesso!");
//     }
//     catch(e){
//         console.log(e);
//         res.status(400).send("Bad Request");
//     }
// }
//
// exports.delete = async (req, res, next) => {
//     try{
//         const result = await User.deleteMany(req.body)
//         res.status(200).json(result);
//     }
//     catch(e){
//         console.error(e);
//     }
// }

module.exports = {signIn, signUp, update: updateUser}