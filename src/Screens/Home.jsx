import React from 'react'
import Cards from '../components/Cards';



const Home = ({ user }) => {


    return (
        <div className='flex flex-col'>
            <Cards user={user} />
        </div>
    )
}

export default Home;