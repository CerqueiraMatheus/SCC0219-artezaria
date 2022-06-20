import {useNavigate} from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const RowCard = ({title, description, link, click = () => {}}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        click();
        navigate(link);
    }

    return (
        <Card sx={{boxShadow: 3, margin: 1}}>
            <CardActionArea onClick={handleClick} sx={{padding: "2%"}}>
                {/* Title */}
                <Typography variant="h5" align="left">
                    {title}
                </Typography>

                {/* Description */}
                <Typography variant="body1" align="left">
                    {description}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default RowCard;
