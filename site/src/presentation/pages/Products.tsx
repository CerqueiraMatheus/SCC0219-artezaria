import ItemList from '../components/Item/ItemList';
import Sidebar from '../components/Navigation/Sidebar';
import {items} from "../../data/ProductsData";
import Box from "@mui/material/Box";
import RowCard from "../components/Account/AccountRowCard";

const Products = () => {
    return (
        // <Box sx={{flexBasis: 240}}>
        //     <Sidebar></Sidebar>
        // </Box>
        <div>
            <ItemList items={items} title={"Mais vendidos"}/>

            <ItemList items={items} title={"Mais recentes"}/>

            <ItemList items={items} title={"Título 3"}/>

            <ItemList items={items} title={"Título 4"}/>

            <ItemList items={items} title={"Título 5"}/>

        </div>
    );
};
export default Products;