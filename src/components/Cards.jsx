
import { useEffect } from 'react';
import React, { useState } from 'react'

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { excerpt } from '../utils';
import { useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { CircularProgress } from '@mui/material';


const Cards = () => {
    let navigate = useNavigate();
    const [doubts, setDoubts] = useState([]);
    const [isloading, setisLoading] = useState(true);
    const unsub = onSnapshot (
        collection(db, "doubts"),
        (snapshot) => {
            let lists = [];
            snapshot.docs.forEach((doc) => {
                lists.push({ id: doc.id, ...doc.data() });
            });

            setDoubts(lists);
            setisLoading(false);
        },

    );
    useEffect( () => {

            unsub();

    }, [])



    return (
        <div className='md:p-20 md:gap-20 flex flex-col flex-grow'  >
            {isloading ? (
                <div className='flex flex-row justify-center alig'>
                    <CircularProgress />
                </div>
            ) : (
                <div className='p-20 gap-20 flex flex-col flex-grow'>
                    {doubts.map((item) => (
                        <div onClick={() => navigate(`/detail/${item.id}`)} className='flex flex-col  rounded-lg  cursor-pointer duration-500 ' key={item.id} >
                            <div className='flex flex-row  align-middle justify-start'>
                                <div className='rounded-3xl  h-14 w-14 md:h-20 md:w-20'>
                                    <img className='rounded-full' src={item.authorPhotoURL} />
                                </div>

                                <p className=' px-2 text-justify md:p-5 md:mt-2 text-lg md:text-2xl font-semibold capitalize text-white flex flex-row w-full align-middle '>
                                    {item.author}
                                </p>

                            </div>
                            <div className='flex flex-row align-middle justify-between w-full'>
                                <p className='text-white font-semibold mt-10 w-1/2 p-2 text-lg md:text-2xl'>{item.title}</p>
                            </div>
                            <div className='  text-white flex flex-row justify-between align-middle w-full'>
                                <div className=' w-fit justify-start p-2 align-baseline flex flex-wrap'>
                                    {excerpt(item.description, 120)}
                                </div>



                            </div>
                            <div className='mt-5 h-1 bg-primary w-full rounded-3xl' />
                        </div>))
                    }
                </div>

            )}

        </div >


    )
}

export default Cards