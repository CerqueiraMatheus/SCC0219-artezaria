import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import {UserContext} from "../../context/UserContext";

const payments = [
    {name: 'Card type', detail: 'Visa'},
    {name: 'Card holder', detail: 'Mr John Smith'},
    {name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234'},
    {name: 'Expiry date', detail: '04/2024'},
];

export default function Review() {
    const {totalCartPrice, cart} = useContext(CartContext);
    const {user} = useContext(UserContext);

    return (
        <React.Fragment>
            {/* Title */}
            <Typography variant="h6" gutterBottom>
                Sua compra
            </Typography>

            {/* Items */}
            <List disablePadding>

                {/* Item */}
                {cart.map((product) => (
                    <ListItem key={product.title} sx={{py: 1, px: 0}}>
                        <ListItemText primary={product.title} secondary={`Quantidade: ${product.quantitySelected}`}/>
                        <Typography variant="body2">{`R$${product.price * product.quantitySelected}`}</Typography>
                    </ListItem>
                ))}

                {/* Total */}
                <ListItem sx={{py: 1, px: 0}}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                        R${totalCartPrice}
                    </Typography>
                </ListItem>
            </List>

            {/* Confirmation */}
            <Grid container spacing={2}>

                {/* Deliver */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                        Entrega
                    </Typography>
                    <Typography gutterBottom>{user.name}</Typography>
                    <Typography gutterBottom>{user.address}</Typography>
                </Grid>

                {/* Payment */}
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                        Pagamento
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}