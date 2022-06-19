import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                artezaria
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            className="site-footer"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: "5%"
            }}
        >
            <Box
                bgcolor="primary.main"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        onde a vida encontra a arte.
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    );
}