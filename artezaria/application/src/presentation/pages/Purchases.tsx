import {Divider, Grid, Stack, Typography} from "@mui/material";
import {PRODUCTS} from "../../data/ProductsData";
import PurchaseItem from "../components/Purchase/PurchaseItem";
import {useContext, useEffect, useState} from "react";
import {findPublishedProducts} from "../../api/Product";
import {UserContext} from "../context/UserContext";
import {listPurchasesUser} from "../../api/Purchase";
import {Purchase} from "../../domain/Purchase";
import {useSnackbar} from "notistack";
import Back from "../components/UI/Back";

const Purchases = () => {
    const {user} = useContext(UserContext);
    const [purchases, setPurchases] = useState<Purchase []>();
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        const fetchData = async () => {
            const res = await listPurchasesUser(user);
            if (res.purchases) setPurchases(res.purchases);
            else return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }

        fetchData();
    });

    return (
        <Stack>
            <Typography variant="h4">Minhas compras</Typography>
            <Divider sx={{marginBottom: 5}}/>
            {/*<Grid container>*/}
                {purchases?.map((item) => (
                    // <Grid item xs={4} key={item._id}>
                        <PurchaseItem {...item} />
                    // </Grid>
                ))}
            {/*</Grid>*/}
        </Stack>
    );
}

export default Purchases;