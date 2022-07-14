import {Divider, Stack, Typography} from "@mui/material";
import PurchaseItem from "../components/Purchase/PurchaseItem";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../context/UserContext";
import {listPurchasesUser} from "../../api/Purchase";
import {Purchase} from "../../domain/Purchase";
import {useSnackbar} from "notistack";

const Purchases = () => {
    const {user} = useContext(UserContext);
    const [purchases, setPurchases] = useState<Purchase []>();
    const {enqueueSnackbar} = useSnackbar();

    // Carrega as compras
    useEffect(() => {
        const fetchData = async () => {
            const res = await listPurchasesUser(user);
            if (res.purchases) setPurchases(res.purchases);
            else return enqueueSnackbar(res.message, {
                variant: 'error'
            });
        }

        fetchData();
    }, [enqueueSnackbar, user]);

    return (
        <Stack>
            <Typography variant="h4">Minhas compras</Typography>
            <Divider sx={{marginBottom: 5}}/>
            {purchases?.length! > 0 ?
                (purchases?.map((item) => (
                    <PurchaseItem {...item} />
                ))) :
                (<Typography variant="h5">Sem compras :(</Typography>)
            }
        </Stack>
    );
}

export default Purchases;