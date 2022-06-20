import {useNavigate} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import Link from "@mui/material/Link";

const ItemAnnouncement = ({id, title, description, price, image, quantity, artist}) => {

    const navigate = useNavigate();
    const openProduct = () => navigate(`/item/${id}`);

    return (
        <Card sx={{maxWidth: 345, boxShadow: 3, margin: 1}}>
            <CardHeader
                title={
                    <Link 
                        variant="body1" 
                        onClick={openProduct} 
                        component="button" 
                        underline="none"
                        color="text.primary">
                        {title}
                    </Link>
                }
                style={
                    {textAlign: 'left'}
                }
            />
            <CardMedia
                component="img"
                height="280"
                image={image}
                alt="Paella dish"
            />
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Typography variant='h4' align='left'>
                    {price}
                </Typography>

                <Button variant="contained" onClick={openProduct}>
                    Excluir
                </Button>
            </CardActions>
        </Card>
    );
}

export default ItemAnnouncement;
