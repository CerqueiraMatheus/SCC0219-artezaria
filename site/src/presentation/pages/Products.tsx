import ItemList from '../components/Item/ItemList';
import {PRODUCTS} from "../../data/ProductsData";

const Products = () => {
    return (
        <div>
            <ItemList items={PRODUCTS} title={"Mais vendidos"}/>

            <ItemList items={PRODUCTS} title={"Mais recentes"}/>

            <ItemList items={PRODUCTS} title={"Título 3"}/>

            <ItemList items={PRODUCTS} title={"Título 4"}/>

            <ItemList items={PRODUCTS} title={"Título 5"}/>

        </div>
    );
};
export default Products;