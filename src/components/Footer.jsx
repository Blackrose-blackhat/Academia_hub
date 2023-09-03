import React from 'react';
import { styled } from '@mui/system';
import { Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = styled((theme) => ({
    footer: {
        padding: theme.spacing(1, 0),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
}));

const Footer = () => {
    let navigate = useNavigate();
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className='bg-primary flex flex-col p-2 md:flex-row gap-7  w-full'>
                <div className='flex flex-row w-full'>

                    <p className='text-white text-normal text-center flex flex-row '>
                        © {new Date().getFullYear()} Academia Hub. All rights reserved.
                    </p>

                </div>
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