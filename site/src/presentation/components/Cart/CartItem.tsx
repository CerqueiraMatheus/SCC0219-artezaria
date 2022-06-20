import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import {Product} from "../../../domain/Product";
import Card from "@mui/material/Card";
import {Add, Remove} from "@mui/icons-material";
import {useCallback, useContext, useState} from "react";
import {CartContext} from "../../context/CartContext";

const CartItem = (item: Product) => {
    // Item states
    const [curItem, setItem] = useState(item);

    // Cart functions
    const {increaseItemQuantity, decreaseItemQuantity, removeItemFromCart} = useContext(CartContext);

    // Dynamic item update
    const handleQuantityChange = useCallback(async (increase: boolean) => {
            setItem(increase ? increaseItemQuantity(curItem) : decreaseItemQuantity(curItem));
        }, [curItem, decreaseItemQuantity, increaseItemQuantity]
    );

    // Remove from cart
    const handleRemove = () => removeItemFromCart(item);

    return (
        <>
            <Card raised sx={{margin: "5%", padding: 5}}>
                <Grid container spacing={3}>

                    {/* Image */}
                    <Grid
                        item
                        xs={2}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <img src={curItem.image} alt={curItem.title}
                             style={{height: '150px', width: '150px', objectFit: "scale-down"}}/>
                    </Grid>

                    {/* Title */}
                    <Grid
                        item
                        xs={3}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Typography variant='h6'>{curItem.title}</Typography>
                    </Grid>

                    {/* Unity price */}
                    <Grid
                        item
                        xs={2}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Box>
                            <Typography variant="body2"> Preço unitário </Typography>
                            <Typography variant='inherit'>{'R$' + curItem.price}</Typography>
                        </Box>
                    </Grid>

                    {/* Quantity selection */}
                    <Grid
                        item
                        xs={2}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Typography variant="body2">
                            Quantidade
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', float: 'center'}}>

                            <div style={{
                                width: "33%", display: "flex",
                                justifyContent: "center"
                            }}>
                                {curItem.quantitySelected > 1 && <Tooltip title='Remover' placement='top'>
                                    <IconButton onClick={() => handleQuantityChange(false)}>
                                        <Remove/>
                                    </IconButton>
                                </Tooltip>}
                            </div>

                            <div style={{
                                width: "33%", display: "flex",
                                justifyContent: "center", padding: "5%"
                            }}>
                                <Typography variant='inherit'>{curItem.quantitySelected}</Typography>
                            </div>

                            <div style={{
                                width: "33%", display: "flex",
                                justifyContent: "center"
                            }}>
                                {curItem.quantityInStock > 0 && <Tooltip title='Adicionar' placement='top'>
                                    <IconButton onClick={() => handleQuantityChange(true)}>
                                        <Add/>
                                    </IconButton>
                                </Tooltip>}
                            </div>
                        </Box>

                    </Grid>

                    <Grid
                        item
                        xs={2}
                        // sm={3}
                        // md={2}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Typography variant="body2"> Subtotal </Typography>
                        <Typography variant='inherit'>
                            {'$' + (curItem.price * curItem.quantitySelected).toFixed(2)}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={1}
                        // sm={2}
                        // md={1}
                        display='grid'
                        textAlign='center'
                        justifyContent='center'
                        alignContent='center'
                    >
                        <Tooltip title='Excluir' placement='top'>
                            <IconButton onClick={handleRemove}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
};

export default CartItem;
