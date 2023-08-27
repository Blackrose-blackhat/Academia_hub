import React, { useState } from 'react'
import Cards from '../components/Cards';

import FloatingActionButton from '../components/FloatingActionButton';



const Home = ({ user }) => {

    const isAllowed = user.email.endsWith('@cgu-odisha.ac.in');
    return (
        <div>
            {isAllowed ? (<div className=' flex flex-col justify-center align-middle'>
                {/* <iframe src="https://drive.google.com/file/d/1PzH__T7cPTomg7DG9d-TWZ12EpdTDDbD/preview" height={"500px"} width={"500px"} /> */}
                <Cards user={user} />
                <FloatingActionButton />
            </div>) : (<div className='flex flex-row justify-center align-middle'>
                <h1 className='text-white text-4xl text-center mt-20'>You do not have access to this web page! please login with your cgu id</h1>
            </div>)}

        </div>

    )
}

export default Home;