import React from 'react'
import Cards from '../components/Cards';
import { Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import FloatingActionButton from '../components/FloatingActionButton';

const Home = ({ user }) => {


    return (
        <div className=' flex flex-col justify-center align-middle'>
            <Cards user={user} />

            <FloatingActionButton />


        </div>
    )
}

export default Home;