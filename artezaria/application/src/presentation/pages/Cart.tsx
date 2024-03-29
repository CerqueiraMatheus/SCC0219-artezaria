import React, {useContext, Fragment} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {CartContext} from "../context/CartContext";
import Back from "../components/UI/Back";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {

    // Cart functions
    const {amountOfItemsOnCart, totalCartPrice, cart} = useContext(CartContext);

    // Handle navigation
    const navigate = useNavigate();
    const startCheckout = () => navigate(`/checkout`);

    return (
        <>

            {/* Title */}
            <Typography variant="h4">Carrinho ({amountOfItemsOnCart})</Typography>

            {/* Content */}
            <Divider/>
            {cart.length > 0 ? (
                // With items
                <>
                    {/* Items */}
                    <Container className='animate__animated animate__fadeIn'>
                        {cart.map((item) => (
                            <Fragment key={item._id}>
                                <CartItem {...item}  />
                                <Divider variant='middle' sx={{my: 3}}/>
                            </Fragment>
                        ))}
                    </Container>

                    {/* Total */}
                    <Typography
                        variant='h6'
                        // align='right'
                        className='animate__animated animate__fadeInUp'>
                        Total: R${totalCartPrice}
                    </Typography>

                    {/* Checkout */}
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            variant='contained'
                            color='error'
                            component={Link}
                            to='/checkout'
                            startIcon={<PointOfSaleIcon/>}
                            onClick={startCheckout}
                        >
                            Ir ao pagamento
                        </Button>
                    </Box>

                    {/* Back */}
                    <Back/>
                </>
            ) : (
                // Without items
                <Typography variant="h5">
                    Nenhum item no carrinho. Vamos às compras?
                </Typography>
            )}
        </>
    );
};

export default Cart;
