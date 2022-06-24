import { Divider, Grid, Stack, Typography } from "@mui/material";
import { PRODUCTS } from "../../data/ProductsData";
import PurchaseItem from "../components/Purchase/CartItem";

const Purchases = () => {
    return (
        <Stack>
            <Typography variant="h4">Minhas Compras</Typography>
            <Divider sx={{marginBottom: 5}}/>

            <Grid container>
                <Grid item xs={4}>
                    <PurchaseItem {...PRODUCTS[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <PurchaseItem {...PRODUCTS[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <PurchaseItem {...PRODUCTS[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <PurchaseItem {...PRODUCTS[0]}/>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default Purchases;