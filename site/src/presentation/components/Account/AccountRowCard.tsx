import {useNavigate} from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const RowCard = ({title, description, link, click = () => null}) => {

    const navigate = useNavigate();

    return (
        <Card sx={{boxShadow: 3, margin: 1}}>
            <CardActionArea onClick={() => {
                click();
                navigate(link);
            }} sx={{padding: "2%"}}>
                <Typography variant="h5" align="left">
                    {title}
                </Typography>
                {/*<Divider/>*/}
                <Typography variant="body1" align="left">
                    {description}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default RowCard;
