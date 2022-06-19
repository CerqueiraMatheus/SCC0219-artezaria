import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import {CartContext, InterfaceItem} from '../../context/CartContext';
// import ItemDescription from './ItemDescription';
// import ItemCount from './ItemCount';

import Back from "../UI/Back"
import Success from "../UI/Success";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {Image} from "@mui/icons-material";

const ItemDetail = ({id, title, artist, description, picture, price, stock}) => {
    const {addItemToCart, isInCart} = useContext(CartContext);
    const [showSuccessBar, setShowSuccessBar] = useState(false);

    const handleAddItemToCart = (quantity) => {
        if (isInCart(id) || quantity === 0) return;
        console.log("antes");
        addItemToCart({id: parseInt(`${id}`), name: `${title}`, quantity: 1});
        console.log(isInCart(id) + " depois");
        setShowSuccessBar(true);
    };

    return (
        <>
            <Card raised sx={{margin: "5%", padding: 5}}>
                <img src={picture} style={{ maxHeight: 800, objectFit:"scale-down"}} alt={title}/>
                {/*<CardMedia component='img' image={picture} alt={id} sx={{objectFit:"contain"}}/>*/}
            </Card>
            <Typography variant='h4' textAlign='center' gutterBottom>
                {title}, por {artist}
            </Typography>

            <Divider/>

            <Typography variant='body1' textAlign='justify'>
                {description}
            </Typography>

            <Divider/>
            <Typography component='h5' variant='h6' textAlign='center'>
                {price}
            </Typography>
            <Box display='flex' justifyContent={'center'}>
                {isInCart(id) ? (
                    <Button
                        variant='contained'
                        color='error'
                        startIcon={<AssignmentTurnedInIcon/>}
                        component={Link}
                        to='/cart'
                    >
                        Terminar minha compra
                    </Button>
                ) : stock > 0 ? (
                    <Button variant="contained" onClick={handleAddItemToCart}>
                        Adicionar ao carrinho
                    </Button>
                ) : (
                    <Typography variant='h6' color='textSecondary'>
                        Sem estoque :(
                    </Typography>
                )}
            </Box>
            {showSuccessBar && (
                <Success message={id + title + description + picture + price + stock}/>
            )}
        </>
    );
};

export default ItemDetail;
