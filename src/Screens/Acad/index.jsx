import React, { useState } from 'react'
import { eigthsem, fifthSem, firstSem, fourthSem, seventhSem, sixthSem, thirdSem } from './data'
import { ArrowBackIos } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
export function FirstSem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {firstSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Secondsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {firstSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Thirdsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {thirdSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");


                        }} key={id} className=" w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Fourthsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {fourthSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Fifthsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {fifthSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Sixthsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {sixthSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Seventhsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {seventhSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}
export function Eigthsem() {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {eigthsem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}



