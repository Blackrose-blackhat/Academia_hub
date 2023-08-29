import React, { useState } from 'react'
import { firstSem, firstSemComponent } from './data'
import { secondSem } from './data'
import { ArrowBackIos } from '@mui/icons-material'

export function FirstSem() {
    const [subject, setSubject] = useState(null);
    return (
        <div>

            <div>
                <div onClick={() => navigate("/")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                    {firstSem.map(({ id, title, }) => (
                        <div onClick={(e) => {
                            // navigate(link);
                            setSubject(title)


                        }} key={id} className=" flex-col p-5 bg-gradient-to-b from-fuchsia-700 items-center inline-flex justify-between cursor-pointer">
                            {/* <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' /> */}
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>
                {/* Hidden component */}
                <div>
                    {subject == "Mathematics" && firstSemComponent.map(index => (
                        <div>
                            <h1>{index.title}</h1>
                        </div>
                    ))}
                    {subject}
                </div>
            </div>
        </div>
    )
}

export function SeconSem() {
    return (
        <div>
            {secondSem.map(item => (
                <div key={item.id}>
                    <iframe src={item.url} />
                </div>
            ))}
        </div>
    )
}

