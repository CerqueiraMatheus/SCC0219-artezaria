import { Grid } from "@mui/material";
import {items} from "../../data/ProductsData";
import ItemAnnouncement from "../components/Item/ItemAnnouncement";
import ItemCard from "../components/Item/ItemCard";


function Adverts() {
    return (
        <Grid container spacing={2}> 
        {items?.map((item) => (
            <Grid item xs={10} sm={6} lg={3} key={item.id}>
                <ItemAnnouncement {...item} />
            </Grid>
        ))}
        </Grid>
    );
}

export default Adverts;