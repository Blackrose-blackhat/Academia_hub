import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowBackIos } from '@mui/icons-material';
import {links} from '../../utils';
import subjects from "../../assets/subjects.png"
const FirstSem = () => {
    const links =[
        {
            id:1,
            link:'Mathematics',
            imglink:subjects
        },
        {
            id:2,
            link:'Mathematics',
            imglink:subjects
        },
        {
            id:3,
            link:'Mathematics',
            imglink:subjects
        },
        {
            id:4,
            link:'Mathematics',
            imglink:subjects
        },
        {
            id:5,
            link:'Mathematics',
            imglink:subjects
        }
    ]
    
    let navigate = useNavigate();
   
    return (
        <div>
            <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                <ArrowBackIos />
            </div>
            <div className='flex flex-col relative flex-wrap md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

            {links.map(({id, link,imglink }) =>(
            <div  key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-teal-400 rounded-[28px] justify-between items-center inline-flex cursor-pointer">
                <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink}alt='images'/>
                <div className="text-center text-white text-xl md:text-4xl font-bold mr-4">{link}</div>
            </div>
        ))}   
            </div>
        </div>

    )
}


export default FirstSem