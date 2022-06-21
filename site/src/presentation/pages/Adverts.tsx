import { Button, Grid, Stack, Typography } from "@mui/material";
import {products} from "../../data/ProductsData";
import ItemAnnouncement from "../components/Item/ItemAnnouncement";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";


function Adverts() {
    
    const navigate = useNavigate();
    const createAdvert = () => navigate(`/create`);

    return (
        <Stack spacing={2}>
            <Stack direction="row" justifyContent={"space-between"}> 
                <Typography variant='h4' textAlign='left' gutterBottom paddingLeft={3}>Anúncios</Typography>
                <Button variant="contained" endIcon={<AddIcon />} onClick={createAdvert}>Criar</Button>
            </Stack>
            
            <Grid container spacing={2}> 
                {products?.map((item) => (
                    <Grid item xs={12} sm={6} lg={3} key={item.id}>
                        <ItemAnnouncement {...item} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default Adverts;