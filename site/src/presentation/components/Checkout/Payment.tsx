import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {useContext, useState} from "react";
import InputMask from 'react-input-mask';
import {UserContext} from "../../context/UserContext";

export default function PaymentForm() {
    const {user} = useContext(UserContext);
    const handleNameChange = (e) => {
    }

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
                        onChange={e => {
                            user.creditCard.name = e.target.value
                        }}
                    />
                </Grid>

                {/* Card number */}
                <Grid item xs={12} md={6}>
                    <InputMask
                        mask="9999 9999 9999 9999"
                        maskChar=""
                        onChange={e => {
                            user.creditCard.number = parseInt(e.target.value)
                        }}
                    >
                        {() =>
                            <TextField
                                required
                                id="cardNumber"
                                label="Número do cartão"
                                fullWidth
                                autoComplete="cc-number"
                                variant="standard"
                                // type="number"
                            />}
                    </InputMask>
                </Grid>
                <Grid item xs={12} md={6}>
                    <InputMask
                        mask="99/99"
                        maskChar=""
                        onChange={e => {
                            user.creditCard.expiryDate = e.target.value
                        }}
                    >
                        {() => <TextField
                            required
                            id="expDate"
                            label="Validade"
                            fullWidth
                            variant="standard"
                            // type="date"

                        />}
                    </InputMask>
                </Grid>

                {/* CVV */}
                <Grid item xs={12} md={6}>
                    <InputMask
                        mask="999"
                        maskChar=""
                        onChange={e => {
                            user.creditCard.cvv = parseInt(e.target.value)
                        }}
                    >
                        {() =>
                            <TextField
                                required
                                id="cvv"
                                label="CVV"
                                defaultValue=""
                                helperText="Três números de segurança"
                                fullWidth
                                autoComplete="cc-csc"
                                variant="standard"
                            />}
                    </InputMask>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}