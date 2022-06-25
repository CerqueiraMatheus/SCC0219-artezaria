import {useParams} from 'react-router-dom';

import ItemDetail from "../components/Item/ItemDetail"
import {PRODUCTS} from "../../data/ProductsData";

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    let itemTest = PRODUCTS.find(x => x.id === parseInt(itemId!))!;
    return <ItemDetail {...itemTest}/>;
};

export default ItemDetailContainer;
