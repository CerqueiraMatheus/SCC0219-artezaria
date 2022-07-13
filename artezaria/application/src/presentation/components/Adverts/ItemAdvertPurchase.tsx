import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {PurchaseItem, PurchaseItemStatus} from "../../../domain/PurchaseItem";
import {markItemSent} from "../../../api/Purchase";
import {useSnackbar} from "notistack";

const ItemAdvertPurchase = (itemAdvertPurchase: PurchaseItem) => {
    const [item, setItem] = useState<PurchaseItem>(itemAdvertPurchase);
    const {enqueueSnackbar} = useSnackbar();

    const updateSatus = async () => {
        let res = await markItemSent(item);
        if (res.purchaseItem) return setItem(res.purchaseItem);
        return enqueueSnackbar(res.message, {
            variant: 'error'
        });
    }

    return (
        <Card raised sx={{
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            pl: 7,
            width: '75%',
            mt: 2,
            padding: 5
        }}>
            <Box component='div' sx={{mt: 2, mb: 2}}>
                <Typography variant='h6' align='left' sx={{mb: 1}}>Item: {item.product.title}</Typography>
                <Typography variant='h6'
                            align='left'>Quantidade: {item.quantitySelected}</Typography>
            </Box>
            <Box component='div' sx={{mt: 2, mb: 2, ml: '10%'}}>
                <Typography variant='h6' align='left'
                            sx={{mb: 1}}>Para: {item.user.name} {item.user.lastName}</Typography>
                <Typography variant='h6' align='left'>Endereço: {item.user.address}</Typography>
            </Box>

            <Box component='div' sx={{
                width: 'auto',
                mt: 'auto',
                mb: 'auto',
                ml: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 'auto',
                borderSpacing: 2
            }}>
                {item.status === PurchaseItemStatus.NAO_ENVIADO && (
                    <Button variant="contained" color="secondary" onClick={updateSatus} sx={{margin: 1}}>
                        Marcar como enviado
                    </Button>)
                }

                {item.status === PurchaseItemStatus.ENVIADO && (
                    <Button variant="contained" color="secondary" disabled={true} sx={{margin: 1}}>
                        Enviado
                    </Button>)
                }

                {item.status === PurchaseItemStatus.RECEBIDO && (
                    <Button variant="contained" color="secondary" disabled={true} sx={{margin: 1}}>
                        Recebido
                    </Button>)
                }
            </Box>
        </Card>
    );
}

export default ItemAdvertPurchase;