import React from 'react';
import { styled } from '@mui/system';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = styled((theme) => ({
    footer: {
        padding: theme.spacing(3, 0),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const Footer = () => {
    let navigate = useNavigate();
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className='bg-primary flex flex-row p-10 gap-10'>
                <Container maxWidth="sm">
                    <Typography variant="body2" align="center">
                        <p className='text-white text-xl '>
                            © {new Date().getFullYear()} Academia Hub. All rights reserved.
                        </p>
                    </Typography>
                </Container>
                <Container maxWidth="sm">
                    <div className='  text-white flex flex-row gap-10'>
                        <Typography variant='body1' align='center'>
                            <p className='cursor-pointer' onClick={() => navigate("/about")}>
                                About
                            </p>

                        </Typography>
                        <Typography variant='body1' align='center'>
                            <p className='cursor-pointer' onClick={() => navigate("/contact")}>
                                Contact Us
                            </p>
                        </Typography>
                        <Typography variant='body1' align='center'>
                            Disclaimer
                        </Typography>
                    </div>
                </Container>
            </div>

        </footer>
    );
};

export default Footer;
