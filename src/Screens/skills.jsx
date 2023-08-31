import React from 'react'
import Code from '../assets/Code.png'
import Compete from '../assets/Compete.png'
import Learn from '../assets/Learn.png'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'


const skills = () => {
    let navigate = useNavigate();

    const links = [
        {
            id: 1,
            imglink: Learn,
            link: `/skills/Learn`
        },
        {
            id: 2,
            imglink: Code,
            link: `/skills/Code`
        },
        {
            id: 3,
            imglink: Compete,
            link: `/skills/Compete`
        }
    ]
    return (
        <div>
            <div onClick={() => navigate("/")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                <ArrowBackIos />
            </div>
            <div className='flex align-middle justify-center  flex-wrap w-full p-20 gap-10'>
                {links.map(({ id, imglink, link }) => (
                    <div onClick={() => navigate(link)} key={id} className=''>
                        <img className=' cursor-pointer transition duration-300 ease-in-out hover:scale-110' src={imglink} alt='images' />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default skills