'use strict';

const User = require('../Model/User');
const {LOGIN_ERROR, SUCCESS} = require("../Util/Messages");
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

const signIn = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});
        console.log(req.body.email, req.body.password);
        console.log(user);

        return res.status(200).send({
            "message": (user) ? SUCCESS : LOGIN_ERROR,
            "user": user
        });

    } catch (e) {
        console.error(e);
        res.status(400).send("Bad Request");
    }
}

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

module.exports = {signIn}