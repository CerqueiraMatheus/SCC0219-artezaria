import {CardActionArea, Divider, Typography} from '@mui/material';
import Card from "@mui/material/Card";
import {Purchase} from "../../../domain/Purchase";
import {PurchaseItemStatus} from "../../../domain/PurchaseItem";
import Grid from "@mui/material/Grid";

const PurchaseItem = (item: Purchase) => {
    return (
        <>
            <Card sx={{boxShadow: 3, margin: 1}}>
                <CardActionArea sx={{padding: "2%"}}>

                    {/* Título */}
                    <Typography variant='h6'>Identificador: {item._id}</Typography>

                    <Divider sx={{marginTop: '2%', marginBottom: '2%'}}/>

                    <Grid container>
                        {/* Cabeçalho */}
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Item </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Preço</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='body1' style={{fontWeight: 600}}>Status</Typography>
                        </Grid>

                        {/* Itens */}
                        {item.items?.map((item) => (
                            <>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>{item.product.title} </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>R${item.product.price} </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant='body1'>{PurchaseItemStatus[item.status]} </Typography>
                                </Grid>
                            </>
                        ))}
                    </Grid>

                    <Divider sx={{marginTop: '2%', marginBottom: '2%'}}/>

                    {/* Preço */}
                    <Typography variant='h6'>Total: R${item.total}</Typography>

                </CardActionArea>
            </Card>
        </>
    );
};

export default PurchaseItem;
