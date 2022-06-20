import { Button, Grid, Stack, Typography } from "@mui/material";
import {items} from "../../data/ProductsData";
import ItemAnnouncement from "../components/Item/ItemAnnouncement";
import AddIcon from '@mui/icons-material/Add';



function Adverts() {
    return (
        <Stack spacing={2}>
            <Stack direction="row" justifyContent={"space-between"}> 
                <Typography variant='h4' textAlign='left' gutterBottom paddingLeft={3}>Anúncios</Typography>
                <Button variant="contained" endIcon={<AddIcon />}>Criar</Button>
            </Stack>
            
            <Grid container spacing={2}> 
                {items?.map((item) => (
                    <Grid item xs={10} sm={6} lg={3} key={item.id}>
                        <ItemAnnouncement {...item} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
        
    );
}

export default Adverts;