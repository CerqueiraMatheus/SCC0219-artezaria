import {useNavigate} from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import {Button} from '@mui/material';
import Link from "@mui/material/Link";


const randomColor = () => {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);

    return color;
}

const ItemCard = ({id, title, description, price, image, quantity, artist}) => {

    const navigate = useNavigate();
    const openArtist = () => navigate(`/artist/${id}`);
    const openProduct = () => navigate(`/item/${id}`);

    return (
        <Card sx={{maxWidth: 345, boxShadow: 3, margin: 1}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: randomColor()}} aria-label="recipe">
                        {artist.charAt(0)}
                    </Avatar>
                }
                title={<Link variant="body1" onClick={openProduct} component="button" underline="none"
                             color="text.primary">
                    {title}
                </Link>}
                subheader={
                    <Link variant="body2" onClick={openArtist} component="button" underline="none"
                          color="text.secondary">
                        {artist}
                    </Link>
                }

                style={
                    {
                        textAlign: 'left'
                    }
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
                    Ver mais
                </Button>
            </CardActions>
        </Card>
    )
        ;
}

export default ItemCard;
