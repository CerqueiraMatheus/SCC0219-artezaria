import {CardActionArea, Divider, Stack, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {Product} from "../../../domain/Product";
import Card from "@mui/material/Card";
import {Purchase} from "../../../domain/Purchase";
import {PurchaseItemStatus} from "../../../domain/PurchaseItem";
import Grid from "@mui/material/Grid";

const PurchaseItem = (item: Purchase) => {
    return (
        <>
            <Card sx={{boxShadow: 3, margin: 1}}>
                <CardActionArea sx={{padding: "2%"}}>
                    {/*<Stack alignItems="center" direction="row" spacing={2}>*/}
                    {/*<img src={item.image} alt={item.title} style={{height: '150px', width: '150px', objectFit: "scale-down"}}/>*/}
                    {/*<Stack>*/}
                    <Typography variant='h6'>Identificador: {item._id}</Typography>

                    <Divider sx={{marginTop: '2%', marginBottom: '2%'}}/>

                    <Grid container>
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Item </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Preço</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Status</Typography>
                        </Grid>

                        {item.items?.map((item) => (
                            <>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>{item.product.title} </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>R${item.product.price} </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>{item.status} </Typography>
                                </Grid>
                            </>
                        ))}
                    </Grid>

                    <Divider sx={{marginTop: '2%', marginBottom: '2%'}}/>

                    <Typography variant='h6'>Total: R${item.total}</Typography>
                    {/*    <Box>*/}
                    {/*        <Typography variant="body2">{item.artist.name} {item.artist.lastName}</Typography>*/}
                    {/*        <Typography variant='inherit'>{'R$' + item.price}</Typography>*/}
                    {/*    </Box>*/}
                    {/*</Stack>*/}
                    {/*</Stack>*/}
                </CardActionArea>
            </Card>
        </>
    );
};

export default PurchaseItem;