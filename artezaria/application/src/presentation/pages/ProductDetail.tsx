import {useParams} from 'react-router-dom';

import ItemDetail from "../components/Item/ItemDetail"
import {PRODUCTS} from "../../data/ProductsData";
import {useEffect, useState} from "react";
import {findProduct, findPublishedProducts} from "../../api/Product";
import {useSnackbar} from "notistack";
import {Product} from "../../domain/Product";
import Loading from "../components/UI/Loading";

const ItemDetailContainer = () => {
    const {itemId} = useParams();
    const [product, setProduct] = useState<Product>();
    const {enqueueSnackbar} = useSnackbar();

    // Carrega o item ao iniciar
    useEffect(() => {
        const fetchData = async () => {
            const res = await findProduct(itemId!.toString());
            if (res.product) setProduct(res.product);
            else return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }

        fetchData();
    }, []);

    // Reposiciona a tela
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        product ?
            <ItemDetail {...product!}/> : <Loading/>);
};

export default ItemDetailContainer;
