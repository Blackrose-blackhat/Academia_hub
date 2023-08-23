import React from 'react'
import firstSem from '../assets/firstSem.png'
import secondSem from '../assets/secondSem.png'
import thirdSem from '../assets/thirdSem.png'
import fourthSem from '../assets/fourthSem.png'
import fifthSem from '../assets/fifthSem.png'
import sixthSem from '../assets/sixthSem.png'
import sevenSem from '../assets/sevenSem.png'
import eigthSem from '../assets/eighthSem.png'


const Acad = () => {

    const links =[
        {
            id:1,
            link:'1st Sem',
            imglink:firstSem
        },
        {
            id:2,
            link:'2nd Sem',
            imglink:secondSem
        },
        {
            id:3,
            link:'3rd Sem',
            imglink:thirdSem
        },
        {
            id:4,
            link:'4th Sem',
            imglink:fourthSem
        },
        {
            id:5,
            link:'5th Sem',
            imglink:fifthSem
        },
        {
            id:6,
            link:'6th Sem',
            imglink:sixthSem
        },
        {
            id:7,
            link:'7th Sem',
            imglink:sevenSem
        },
        {
            id:8,
            link:'8th Sem',
            imglink:eigthSem
        }
    ]
    return (
        <div className='flex flex-col flex-wrap md:flex-row p-22 ml-20 mt-12 gap-8 justify-center'>

        {links.map(({id, link,imglink }) =>(
            <div key={id} className="w-[410px] h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] justify-end items-center inline-flex cursor-pointer">
                <img className='mr-18 h-48 w-48' src={imglink}alt='images'/>
                <div className="text-center text-white text-[43px] font-bold mr-4">{link}</div>
            </div>
        ))}   
        </div>
    )
}

export default Acad