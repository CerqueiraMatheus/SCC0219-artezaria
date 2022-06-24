import {Stack, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import {Product} from "../../../domain/Product";
import Card from "@mui/material/Card";

const PurchaseItem = (item: Product) => {
    return (
        <Card raised sx={{maxWidth: 350, margin: "1%", padding: 2}} >
            <Stack alignItems="center" direction="row" spacing={2}> 
                <img src={item.image} alt={item.title} style={{height: '150px', width: '150px', objectFit: "scale-down"}}/>
                <Stack>
                    <Typography variant='h6'>{item.title}</Typography>
                    <Box>
                        <Typography variant="body2"> Preço </Typography>
                        <Typography variant='inherit'>{'R$' + item.price}</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Card>
    );
};

export default PurchaseItem;
