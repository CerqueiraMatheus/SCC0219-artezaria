import ItemList from '../components/Item/ItemList';
import {products} from "../../data/ProductsData";

const Products = () => {
    return (
        <div>
            <ItemList items={products} title={"Mais vendidos"}/>

            <ItemList items={products} title={"Mais recentes"}/>

            <ItemList items={products} title={"Título 3"}/>

            <ItemList items={products} title={"Título 4"}/>

            <ItemList items={products} title={"Título 5"}/>

        </div>
    );
};
export default Products;