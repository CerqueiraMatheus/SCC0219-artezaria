import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ItemDetail from "../components/Item/ItemDetail"
import {products} from "../../data/ProductsData";

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    let itemTest = products.find(x => x.id === parseInt(itemId!))!;
    return <ItemDetail {...itemTest}/>;
};

export default ItemDetailContainer;
