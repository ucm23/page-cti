import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#007bff'),
    '&:hover': {
        backgroundColor: '#007bff50',
    },
    //D8560A
    //f1600c
}));