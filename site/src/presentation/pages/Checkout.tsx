import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentForm from "../components/Checkout/Payment";
import Review from "../components/Checkout/Review";
import {useContext, useEffect} from "react";
import {CartContext} from "../context/CartContext";
import {wait} from "@testing-library/user-event/dist/utils";

// Checkout steps
const steps = ['Método de pagamento', 'Revisão dos itens'];

// Select step
function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <PaymentForm/>;
        case 1:
            return <Review/>;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    // Step
    const [activeStep, setActiveStep] = React.useState(0);
    const {resetCart} = useContext(CartContext);


    useEffect(() => {
            if (activeStep === steps.length) {
                wait(5000).then(() => resetCart());
            }
        }, [activeStep, resetCart]
    );

    // Next handler
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    // Back handler
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>

                {/* Title */}
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>

                {/* Stepper */}
                <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* Step */}
                <React.Fragment>
                    {activeStep === steps.length ? (

                        // Confirmation
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Obrigado pela sua compra :)
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                        </React.Fragment>
                    ) : (

                        // Ongoing step
                        <React.Fragment>
                            {getStepContent(activeStep)}

                            {/* Step actions */}
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                {/* Back */}
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{mt: 3, ml: 1}} color="inherit">
                                        Voltar
                                    </Button>
                                )}

                                {/* Confirmation */}
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{mt: 3, ml: 1}}
                                    color="secondary"
                                >
                                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </React.Fragment>
            </Paper>
        </Container>
    );
}