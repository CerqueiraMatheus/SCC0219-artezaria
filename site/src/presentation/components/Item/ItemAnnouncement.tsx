import {useNavigate} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import Link from "@mui/material/Link";
import { Product } from '../../../domain/Product';

const ItemAnnouncement = (item: Product) => {

    // Navigation handlers
    const navigate = useNavigate();
    const openProduct = () => navigate(`/item/${item.id}`);

    return (
        <Card sx={{maxWidth: 345, boxShadow: 3, margin: 1}}>
            {/* Header */}
            <CardHeader
                /* Title */
                title={<Link variant="body1" onClick={openProduct} component="button" underline="none"
                             color="text.primary">
                    {item.title}
                </Link>}
                style={{textAlign: 'left'}}
            />

            {/* Image */}
            <CardMedia
                component="img"
                height="280"
                image={item.image}
                alt="Paella dish"
                onClick={openProduct}
            />
            {/* Actions */}
            <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                {/* Price */}
                <Typography variant='h4' align='left'>
                    R${item.price}
                </Typography>

                {/* Open */}
                <Button variant="contained" onClick={openProduct}>
                    Ver mais
                </Button>
            </CardActions>
        </Card>
    )
        ;
}

export default ItemAnnouncement;
