import {useNavigate} from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import Link from "@mui/material/Link";
import {Product} from "../../../domain/Product";

// Generate random color
const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + hex.toString(16);
}

const ItemCard = (item: Product) => {

    // Navigation handlers
    const navigate = useNavigate();
    const openArtist = () => navigate(`/artist/${item.artist.id}`);
    const openProduct = () => navigate(`/item/${item.id}`);

    return (
        <Card sx={{maxWidth: 345, boxShadow: 3, margin: 1}}>
            {/* Header */}
            <CardHeader

                /* Picture */
                avatar={
                    <Avatar sx={{bgcolor: randomColor()}} aria-label="recipe">
                        {item.artist.name.charAt(0)}
                    </Avatar>
                }

                /* Title */
                title={<Link variant="body1" onClick={openProduct} component="button" underline="none"
                             color="text.primary">
                    {item.title}
                </Link>}

                /* Artist */
                subheader={
                    <Link variant="body2" onClick={openArtist} component="button" underline="none"
                          color="text.secondary">
                        {item.artist.name}
                    </Link>
                }

                style={{textAlign: 'left'}}
            />

            {/* Image */}
            <CardMedia
                component="img"
                height="280"
                image={item.image}
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

export default ItemCard;
