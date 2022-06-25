import {PurchaseItem, PurchaseItemStatus} from "../domain/PurchaseItem";
import {userClient} from "./UserData";
import {productA} from "./ProductsData";

const purchasesA = new PurchaseItem({id: 1, user: userClient, product: productA, status: PurchaseItemStatus.NOT_SENT});
const purchasesB = new PurchaseItem({id: 2, user: userClient, product: productA, status: PurchaseItemStatus.SENT});
const purchasesC = new PurchaseItem({id: 2, user: userClient, product: productA, status: PurchaseItemStatus.RECEIVED});

export const PRODUCTS_PURCHASE = [purchasesA, purchasesB, purchasesC];