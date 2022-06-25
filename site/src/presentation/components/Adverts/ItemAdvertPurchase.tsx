import {useNavigate} from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import {PurchaseItem, PurchaseItemStatus} from "../../../domain/PurchaseItem";

const ItemAdvertPurchase = (itemAdvertPurchase: PurchaseItem) => {

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
                <Typography variant='h6' align='left' sx={{mb: 1}}>Item: {itemAdvertPurchase.product.title}</Typography>
                <Typography variant='h6'
                            align='left'>Quantidade: {itemAdvertPurchase.product.quantitySelected}</Typography>
            </Box>
            <Box component='div' sx={{mt: 2, mb: 2, ml: '10%'}}>
                <Typography variant='h6' align='left'
                            sx={{mb: 1}}>Para: {itemAdvertPurchase.user.name} {itemAdvertPurchase.user.lastName}</Typography>
                <Typography variant='h6' align='left'>Endereço: {itemAdvertPurchase.user.address}</Typography>
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
                {itemAdvertPurchase.status === PurchaseItemStatus.NOT_SENT && (
                    <Button variant="contained" color="secondary" sx={{margin: 1}}>
                        Marcar como enviado
                    </Button>)
                }

                {itemAdvertPurchase.status === PurchaseItemStatus.SENT && (
                    <Button variant="contained" color="secondary" disabled={true} sx={{margin: 1}}>
                        Enviado
                    </Button>)
                }

                {itemAdvertPurchase.status === PurchaseItemStatus.RECEIVED && (
                    <Button variant="contained" color="secondary" disabled={true} sx={{margin: 1}}>
                        Recebido
                    </Button>)
                }
            </Box>
        </Card>
    );
}

export default ItemAdvertPurchase;