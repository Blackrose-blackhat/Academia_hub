import { Person, Person3TwoTone } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import defaultUser from "../assets/default.png";
const Cards = ({ user }) => {


    return (
        <div className='flex flex-col p-16 mt-10 '>
            <div className='flex flex-col'>
                <div className='flex flex-row  align-middle justify-start'>
                    <div className='rounded-3xl h-14 w-14 md:h-20 md:w-20'>
                        {user?.photoURL !== null ? <img src={`${user?.photoURL}`} /> : <div className='text-white h-15  w-15  '><img src={defaultUser} /></div>}

                    </div>

                    <p className=' p-5 md:mt-2 text-lg md:text-2xl font-semibold capitalize text-white flex flex-row w-full align-middle '>{user?.displayName}</p>

                </div>
                <div className='flex flex-row align-middle justify-between w-full'>
                    <p className='text-white font-semibold mt-10 w-1/2 p-2 text-lg md:text-2xl'>Question title</p>
                    <div className=' text-sm md:text-base cursor-pointer text-center text-white rounded-xl border-primary border-4 mt-20 w-4/12 md:w-2/12  p-1 h-10'>
                        Read More
                    </div>
                </div>
                <div className='mt-5 h-1 bg-primary w-full rounded-3xl' />
            </div>
        </div>
    )
}

export default Cards