'use strict';

const User = require("../Model/User");
const Purchase = require("../Model/Purchase");
const PurchaseItem = require("../Model/PurchaseItem");
const Product = require("../Model/Product");
const {SUCCESS, SERVER_ERROR, PURCHASE_ERROR} = require("../Util/Messages");
const {ObjectId} = require("mongodb");

const buyCart = async (req, res) => {
    try {
        let stopOperation = false;
        let user = new User(req.body.user);
        let total = 0;

        let items = [];
        let dbProducts = [];

        // console.log(req.body.products[0].user);
        // Converte os objetos
        for (let p of req.body.products) items.push(new PurchaseItem(p));
        console.log(items);

        for (let item of items) {

            // Encontra o produto
            const res = await Product.findOne({"_id": ObjectId(item.product._id)});
            let dbProduct = new Product(res);

            // Atualiza o produto
            dbProduct.quantityInStock -= item.quantitySelected;
            dbProduct.quantitySold += item.quantitySelected;

            dbProducts.push(dbProduct);
            // Verifica se a quantidade é válida
            if (dbProduct.quantityInStock < 0) {
                stopOperation = true;
                break;
            }

            // Atualiza o total
            total += dbProduct.price;
        }

        // Se a operação deve ser pausada
        if (stopOperation) return res.status(200).send({
            "message": PURCHASE_ERROR,
            "success": false
        });

        // Registra a compra
        let purchase = new Purchase();
        purchase.user = user;
        purchase.total = total;
        await purchase.save();


        for (let product of dbProducts) {
            // Atualiza a quantidade do produto
            await Product.findOneAndUpdate({"_id": ObjectId(product._id)}, product);
        }

        for (let item of items) {
            // Registra um item de compra
            item.purchase = purchase._id;
            console.log(item);
            item._id = null;

            await item.save();
        }

        // Retorna sucesso e uma mensagem
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

const listPurchasesUser = async (req, res) => {
    try {
        let resPurchase = await Purchase.find({"user": new ObjectId(req.body.user._id)});
        let purchasesAndItems = [];

        for (let p of resPurchase) {
            let purchase = JSON.parse(JSON.stringify(p));
            purchase.items = await PurchaseItem.aggregate([
                {$match: {"purchase": new ObjectId(purchase._id)}},
                {
                    $lookup: {
                        from: "product",
                        localField: "product",
                        foreignField: "_id",
                        as: "product"
                    }
                },
                {$unwind: "$product"}
            ]);
            purchasesAndItems.push(purchase);
        }

        return res.status(200).send({
            "message": SUCCESS,
            "purchases": purchasesAndItems
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "purchases": null
        });
    }
}

const listPurchasesItem = async (req, res) => {
    console.log(req.body);
    try {
        let purchases = await PurchaseItem.aggregate([
            {$match: {"product": new ObjectId(req.body.product._id)}},
            {
                $lookup: {
                    from: "product",
                    localField: "product",
                    foreignField: "_id",
                    as: "product"
                }
            },
            {
                $lookup: {
                    from: "user",
                    localField: "user",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {$unwind: "$product"},
            {$unwind: "$user"}
        ]);

        return res.status(200).send({
            "message": SUCCESS,
            "purchases": purchases
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "purchases": null
        });
    }
}

const markItemSent = async (req, res) => {
    try {
        let reqItem = req.body.purchaseItem;

        let item = await PurchaseItem.findOneAndUpdate({"_id": new ObjectId(reqItem._id)}, {"status": 1}, {
            new: true
        });

        reqItem.status = item.status;

        return res.status(200).send({
            "message": SUCCESS,
            "purchaseItem": reqItem
        });
    } catch (e) {
        console.log(e);
        // Erro do servidor
        return res.status(400).send({
            "message": SERVER_ERROR,
            "purchaseItem": null
        });
    }
}

module.exports = {buyCart, listPurchasesUser, listPurchasesItem, markItemSent};