import React from 'react'
import Code from '../assets/Code.png'
import Compete from '../assets/Compete.png'
import Learn from '../assets/Learn.png'



const skills = () => {

    const links =[
        {
            id:1,
            imglink:Learn
        },
        {
            id:2,
            imglink:Code
        },
        {
            id:3,
            imglink:Compete
        }
    ]
    return (
        <div className='flex flex-col flex-wrap md:flex-row p-10 mt-20 gap-12'>

        {links.map(({id,imglink }) =>(
            <div key={id} className=''>
                <img className=' cursor-pointer transition duration-300 ease-in-out hover:scale-110' src={imglink}alt='images'/>
            </div>
        ))}   
        </div>
    )
}

export default skills