import React, { useState } from 'react'
import Cards from '../components/Cards';

import FloatingActionButton from '../components/FloatingActionButton';

const Home = ({ user }) => {


    return (
        <div className=' flex flex-col justify-center align-middle'>
            {/* <iframe src="https://drive.google.com/file/d/1PzH__T7cPTomg7DG9d-TWZ12EpdTDDbD/preview" height={"500px"} width={"500px"} /> */}
            <Cards user={user} />
            <FloatingActionButton />


        </div>
    )
}

export default Home;