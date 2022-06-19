import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f7ecde',
            dark: '#f7ecde',
        },
        secondary: {
            main: '#5ebab9',
        },
        background: {
            default: '#fbf8f1',
        },
        text: {
            primary: '#21201e',
        },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: 'Akshar',
        fontWeightRegular: 400,
    },
});
const ThemeContext = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default ThemeContext;
