import { Divider, Grid, Stack, Typography } from "@mui/material";
import { PRODUCTS } from "../../data/ProductsData";
import PurchaseItem from "../components/Purchase/CartItem";

const Purchases = () => {
    return (
        <Stack>
            <Typography variant="h4">Minhas Compras</Typography>
            <Divider sx={{marginBottom: 5}}/>
            <Grid container>
                {PRODUCTS?.map((item) => (
                    <Grid item xs={4} key={item.id}>
                        <PurchaseItem {...item} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default Purchases;