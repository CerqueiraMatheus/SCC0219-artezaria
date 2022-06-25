import {useState} from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorSnackbar = ({message}) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={() => handleClose} severity='error' sx={{width: '100%'}}>
                {message || 'Error!'}
            </Alert>
        </Snackbar>
    );
};
export default ErrorSnackbar;
