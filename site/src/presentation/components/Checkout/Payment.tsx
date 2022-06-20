import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm() {
    return (
        <React.Fragment>
            {/* Title */}
            <Typography variant="h6" gutterBottom>
                Insira seus dados
            </Typography>

            <Grid container spacing={3}>

                {/* Name */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Nome no cartão"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>

                {/* Card number */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Número do cartão"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Validade"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>

                {/* CVV */}
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Três números de segurança"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}