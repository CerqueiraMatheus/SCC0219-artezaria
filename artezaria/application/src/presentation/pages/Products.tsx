import ItemList from '../components/Item/ItemList';
import {PRODUCTS} from "../../data/ProductsData";
import {useEffect, useState} from "react";
import {findPublishedProducts, getProducts, getProductsByArtist} from "../../api/Product";

const Products = () => {
    const [mostSold, setMostSold] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);
    const [vanGogh, setVanGogh] = useState([]);
    const [edvardMuch, setEdvardMunch] = useState([]);
    const [vitalino, setVitalino] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setMostSold((await getProducts(true)).products);
            setMostRecent((await getProducts(false)).products);
            setVanGogh((await getProductsByArtist("62cf15c0720bdb073681fcb9")).products);
            setVitalino((await getProductsByArtist("62cf5b293bc94c14a25aa3dc")).products);
        }

        fetchData();
    }, []);

    return (
        <div>
            {mostSold.length > 0 && (
                <ItemList items={mostSold} title={"Mais vendidos"}/>
            )}

            {mostRecent.length > 0 && (
                <ItemList items={mostRecent} title={"Mais recentes"}/>
            )}

            {vanGogh.length > 0 && (
                <ItemList items={vanGogh} title={"Por Van Gogh"}/>
            )}

            {vitalino.length > 0 && (
                <ItemList items={vitalino} title={"Por Mestre Vitalino"}/>
            )}

            {/*<ItemList items={PRODUCTS} title={"Título 4"}/>*/}

            {/*<ItemList items={PRODUCTS} title={"Título 5"}/>*/}

        </div>
    );
};
export default Products;