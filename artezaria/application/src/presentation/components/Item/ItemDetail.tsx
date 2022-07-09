import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import {CartContext} from '../../context/CartContext';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {Product} from "../../../domain/Product";
import Success from "../UI/Success";
import {UserContext} from "../../context/UserContext";
import {UserTypes} from "../../../domain/User";

const ItemDetail = (item: Product) => {
    // Cart actions
    const {addItemToCart, isInCart} = useContext(CartContext);
    const {user} = useContext(UserContext);

    // Success bar actions
    const [showSuccessBar, setShowSuccessBar] = useState(false);

    // Add item handler
    const handleAddItemToCart = () => {
        item = item.pickOne();
        addItemToCart(item);
        setShowSuccessBar(true);
    };

    return (
        <>
            {/* Product image */}
            <Card raised sx={{margin: "5%", padding: 5, borderCollapse: "border-box"}}>
                <img src={item.image} style={{maxHeight: 800, objectFit: "scale-down", width: "100%"}}
                     alt={item.title}/>
            </Card>

            {/* Product title */}
            <Typography variant='h4' textAlign='center' gutterBottom>
                {item.title}, por {item.artist.name}
            </Typography>

            <Divider/>

            {/* Product description */}
            <Typography variant='body1' textAlign='justify'>
                {item.description}
            </Typography>

            <Divider/>

            {/* Product price */}
            <Typography component='h5' variant='h6' textAlign='center'>
                R${item.price}
            </Typography>

            {/* Product actions */}
            {((user._id !== item.artist._id) && (user.type !== UserTypes.ADMIN)) &&
                <Box display='flex' justifyContent={'center'}>
                    {isInCart(item) ? (

                        // Item in cart
                        <Button
                            variant='contained'
                            color='error'
                            startIcon={<AssignmentTurnedInIcon/>}
                            component={Link}
                            to='/cart'
                        >
                            Terminar minha compra
                        </Button>
                    ) : item.isAvailable() ? (

                        // Item not in cart
                        <Button variant="contained" onClick={handleAddItemToCart}>
                            Adicionar ao carrinho
                        </Button>
                    ) : (

                        // Item out of stock
                        <Typography variant='h6' color='textSecondary'>
                            Sem estoque :(
                        </Typography>
                    )}
                </Box>}

            {/* Success */}
            {showSuccessBar && (
                <Success message={"Adicionado!"}/>
            )}
        </>
    );
};

export default ItemDetail;
