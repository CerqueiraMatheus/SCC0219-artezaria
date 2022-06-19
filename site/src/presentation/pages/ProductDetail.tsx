import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import Loading from "../components/UI/Loading";
import ItemDetail from "../components/Item/ItemDetail"
import {items} from "../../data/ProductsData";

// import LoadingSpinner from '../ui/LoadingSpinner';
// import ItemDetail from './ItemDetail';
// import { db } from '../../firebase/config';
// import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    // useEffect(async () => {
    //     try {
    //         const docRef = doc(db, 'items', itemId);
    //         const docItem = await getDoc(docRef);
    //
    //         setItem({ id: docItem.id, ...docItem.data() });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, [itemId]);
    let itemTest = items.find(x => x.id === parseInt(itemId!))!;

    return <ItemDetail id={itemTest.id}
                       title={itemTest.title}
                       description={itemTest.description}
                       picture={itemTest.image}
                       price={itemTest.price}
                       stock={itemTest.quantity}
                       artist={itemTest.artist}/>;
};

export default ItemDetailContainer;
