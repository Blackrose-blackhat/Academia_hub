import React from 'react'
import firstSem from '../assets/firstSem.png'
import secondSem from '../assets/secondSem.png'
import thirdSem from '../assets/thirdSem.png'
import fourthSem from '../assets/fourthSem.png'
import fifthSem from '../assets/fifthSem.png'
import sixthSem from '../assets/sixthSem.png'
import sevenSem from '../assets/sevenSem.png'
import eigthSem from '../assets/eighthSem.png'
import { useNavigate } from 'react-router-dom'
import { ArrowBackIos } from '@mui/icons-material'
const Acad = () => {
    let navigate = useNavigate();

    const links = [
        {
            id: 1,
            title: '1st Sem',
            imglink: firstSem,
            link: `/acad/1stSem`

        },
        {
            id: 2,
            title: '2nd Sem',
            imglink: secondSem,
            link: `/acad/2ndSem`

        },
        {
            id: 3,
            title: '3rd Sem',
            imglink: thirdSem,
            link: `/acad/3rdSem`

        },
        {
            id: 4,
            title: '4th Sem',
            imglink: fourthSem,
            link: `/acad/4thSem`

        },
        {
            id: 5,
            title: '5th Sem',
            imglink: fifthSem,
            link: `/acad/5thSem`

        },
        {
            id: 6,
            title: '6th Sem',
            imglink: sixthSem,
            link: `/acad/6thSem`

        },
        {
            id: 7,
            title: '7th Sem',
            imglink: sevenSem,
            link: `/acad/7thSem`

        },
        {
            id: 8,
            title: '8th Sem',
            imglink: eigthSem,
            link: `/acad/8thSem`
        }
    ]
    return (
        <div>
            <div onClick={() => navigate("/")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                <ArrowBackIos />
            </div>
            <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                {links.map(({ id, title, imglink, link }) => (
                    <div onClick={(e) => navigate(link)} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-between cursor-pointer">
                        <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                        <div className="text-center text-white text-xl md:text-4xl  font-bold mr-4">{title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Acad