import React, { useState } from 'react'
import { eigthsem, fifthSem, firstSem, fourthSem, seventhSem, sixthSem, thirdSem } from './data'
import { ArrowBackIos, ArrowBackIosNew } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { C, CCV, DCCN, DM, DS, EG, IEENotes, IME, LBES, MathematicsII, OS, Physics, Python, SCLD, TOC, mathNotes1, variables } from '../../utils';
export function FirstSem() {
    const [issubjects, setSubjects] = useState(null);
    let navigate = useNavigate();
    return (
        <div>
            {issubjects == null ? (
                <div>
                    <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                        <ArrowBackIos />
                    </div>
                    <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                        {firstSem.map(({ id, title, imglink }) => (
                            <div onClick={(e) => {
                                // navigate("/acad");
                                setSubjects(title);
                                console.log(issubjects);



                            }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                                <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                                <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                            </div>

                        ))}

                    </div>

                </div>
            ) : (
                <div>
                    {issubjects == "Mathematics I" && (
                        <div className='flex flex-col p-5'>
                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.mathSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 py-5'>
                                        {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 py-5'>

                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nSODbbloKy0?si=HmJZ5wJxX5S7RP0b&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5xif7SUyiz4?si=O2C_ol647cAiam9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>

                            </div>



                        </div>
                    )}
                    {issubjects == "IEE" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IEEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {IEENotes.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDARFvArIpc?si=V9OMhObBevB83PyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/M6c6Xw5mt90?si=ClTd0bTjeNlQeuDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}

                    {issubjects == "Physics" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IEEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {Physics.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDARFvArIpc?si=V9OMhObBevB83PyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/M6c6Xw5mt90?si=ClTd0bTjeNlQeuDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "IME" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IMEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {IME.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}

                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "Python" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {Python.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YfO28Ihehbk?si=pNV9YoY-qbxtxh-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nLRL_NcnK-4?si=GPtycmFTQiZ8wUUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}

                    {issubjects == "Engineering Graphics" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {C.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EjavYOFoJJ0?si=3IkaTDTS7A06m8uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ywg7cW0Txs4?si=7gmIUfuS0QyGLZoF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "EG" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {EG.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uojN7SOHPBw?si=3j-dHVLrSB194GD7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "MathematicsII" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {MathematicsII.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 mt-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="460" height="315" src="https://www.youtube.com/embed/p5rBJj5CKCg?si=lO0hxTYxGuCeXfmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="315" src="https://www.youtube.com/embed/ZQI6IBlfLfY?si=aIX6wNfvPgAyu4gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}


                </div>

            )}




        </div>
    )
}
export function Secondsem() {
    const [issubjects, setSubjects] = useState(null);
    let navigate = useNavigate();
    return (
        <div>
            {issubjects == null ? (
                <div>
                    <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                        <ArrowBackIos />
                    </div>
                    <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                        {firstSem.map(({ id, title, imglink }) => (
                            <div onClick={(e) => {
                                // navigate("/acad");
                                setSubjects(title);
                                console.log(issubjects);



                            }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                                <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                                <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                            </div>

                        ))}

                    </div>

                </div>
            ) : (
                <div>
                    {issubjects == "Mathematics I" && (
                        <div className='flex flex-col p-5'>
                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.mathSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 py-5'>
                                        {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 py-5'>

                                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nSODbbloKy0?si=HmJZ5wJxX5S7RP0b&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5xif7SUyiz4?si=O2C_ol647cAiam9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>

                            </div>



                        </div>
                    )}
                    {issubjects == "IEE" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IEEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {IEENotes.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDARFvArIpc?si=V9OMhObBevB83PyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/M6c6Xw5mt90?si=ClTd0bTjeNlQeuDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}

                    {issubjects == "Physics" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IEEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {Physics.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xDARFvArIpc?si=V9OMhObBevB83PyR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/M6c6Xw5mt90?si=ClTd0bTjeNlQeuDS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "IME" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.IMEsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {IME.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}

                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "Python" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {Python.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YfO28Ihehbk?si=pNV9YoY-qbxtxh-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/nLRL_NcnK-4?si=GPtycmFTQiZ8wUUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}

                    {issubjects == "Engineering Graphics" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {C.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EjavYOFoJJ0?si=3IkaTDTS7A06m8uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ywg7cW0Txs4?si=7gmIUfuS0QyGLZoF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "EG" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {EG.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uojN7SOHPBw?si=3j-dHVLrSB194GD7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}
                    {issubjects == "MathematicsII" && (
                        <div className='flex flex-col p-5'>


                            <div onClick={() => setSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                <ArrowBackIos />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {MathematicsII.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 mt-10'>
                                        {/* {mathNotes1.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))} */}
                                        <iframe width="460" height="315" src="https://www.youtube.com/embed/p5rBJj5CKCg?si=lO0hxTYxGuCeXfmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="315" src="https://www.youtube.com/embed/ZQI6IBlfLfY?si=aIX6wNfvPgAyu4gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )}


                </div>

            )}




        </div>
    )
}
export function Thirdsem() {
    const [issubjects, setIsSubjects] = useState(null);
    let navigate = useNavigate();
    return (
        <div>
            {issubjects == null ? (
                <div>
                    <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                        <ArrowBackIos />
                    </div>
                    <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                        {thirdSem.map(({ id, title, imglink }) => (
                            <div onClick={(e) => {
                                // navigate("/acad");
                                setIsSubjects(title)


                            }} key={id} className=" w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                                <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                                <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                            </div>

                        ))}

                    </div>

                </div>
            ) : (
                <div>
                    <div onClick={() => setIsSubjects(null)} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                        <ArrowBackIos />
                    </div>
                    {issubjects == "DCCN" && (
                        <div className='flex flex-col gap-10'>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Syllabus</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <iframe src={variables.PythonSyllabus} allow="autoplay" />
                            </div>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Notes</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10'>
                                    {DCCN.map((idx) => (
                                        <div key={idx.id}>
                                            <iframe src={idx.link} allow="autoplay" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Videos</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10 mt-10'>
                                    {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                    <iframe width="460" height="315" src="https://www.youtube.com/embed/p5rBJj5CKCg?si=lO0hxTYxGuCeXfmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe width="460" height="315" src="https://www.youtube.com/embed/ZQI6IBlfLfY?si=aIX6wNfvPgAyu4gu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                    {issubjects == "DS" && (
                        <div className='flex flex-col gap-10'>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Syllabus</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <iframe src={variables.PythonSyllabus} allow="autoplay" />
                            </div>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Notes</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10'>
                                    {DS.map((idx) => (
                                        <div key={idx.id}>
                                            <iframe src={idx.link} allow="autoplay" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Videos</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10 mt-10'>
                                    {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LpHnHRI6gLc?si=4kihBshpFSgXDzrx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X8h4dq9Hzq8?si=49CRiZ0JmmdT3rNG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                    {issubjects == "Discrete Mathematics" && (
                        <div className='flex flex-col gap-10'>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Syllabus</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <iframe src={variables.PythonSyllabus} allow="autoplay" />
                            </div>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Notes</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10'>
                                    {DM.map((idx) => (
                                        <div key={idx.id}>
                                            <iframe src={idx.link} allow="autoplay" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Videos</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10 mt-10'>
                                    {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wGLTV8MgLlA?si=_TzLQ2ZqK0tFntSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_aGVJI9ABwU?si=ZnlCmkPqJ-c5iNhf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YBb2oYIzXK0?si=Ftpg8eSqg8ns8ZRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                    {issubjects == "SCLD" && (
                        <div className='flex flex-col gap-10'>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Syllabus</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <iframe src={variables.PythonSyllabus} allow="autoplay" />
                            </div>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Notes</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10'>
                                    {SCLD.map((idx) => (
                                        <div key={idx.id}>
                                            <iframe src={idx.link} allow="autoplay" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Videos</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10 mt-10'>
                                    {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zVjxEIy33Fs?si=7WM7ijMEknV849NW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/AaN72s5WfOM?si=Z1WtpM9uCivPR2mT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                    {issubjects == "LB & ES" && (
                        <div className='flex flex-col gap-10'>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Syllabus</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <iframe src={variables.PythonSyllabus} allow="autoplay" />
                            </div>
                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Notes</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10'>
                                    {LBES.map((idx) => (
                                        <div key={idx.id}>
                                            <iframe src={idx.link} allow="autoplay" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='text-white px-20 py-2 font-mono text-2xl'>
                                <h1>Videos</h1>
                                <div className='bg-primary h-1 mt-2' />
                                <div className='flex flex-wrap gap-10 mt-10'>
                                    {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}

                                </div>
                            </div>
                        </div>
                    )}

                </div>

            )}

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

                    {fourthSem.map(({ id, title, imglink }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
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
    const [subjects, setSubjects] = useState(null);
    return (
        <div>
            <div>
                <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                    <ArrowBackIos />
                </div>
                {subjects == null ? (
                    <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                        {fifthSem.map(({ id, title, imglink }) => (
                            <div onClick={() => {
                                setSubjects(title)



                            }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                                <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                                <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                            </div>

                        ))}

                    </div>
                ) : (
                    <div>
                        {subjects == "OS" && (
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.PythonSyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {OS.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 mt-10'>
                                        {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/bkSWJJZNgf8?si=Vqbxpq-CNI2-NEd3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/vBURTt97EkA?si=N5o-C7P6_i0O9zR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/_TpOHMCODXo?si=Hwm-Hm8j2A9H2Q1z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                        {subjects == "CCV" && (
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.CCVsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {CCV.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 mt-10'>
                                        {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/UAeAnAbIYZs?si=mcGG4WeDRXr46aVG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/r7HTgHbZ4ko?si=tomY9wnY6fVyye9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        )}
                        {subjects == "TOC" && (
                            <div className='flex flex-col gap-10'>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Syllabus</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <iframe src={variables.CCVsyllabus} allow="autoplay" />
                                </div>
                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Notes</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10'>
                                        {TOC.map((idx) => (
                                            <div key={idx.id}>
                                                <iframe src={idx.link} allow="autoplay" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='text-white px-20 py-2 font-mono text-2xl'>
                                    <h1>Videos</h1>
                                    <div className='bg-primary h-1 mt-2' />
                                    <div className='flex flex-wrap gap-10 mt-10'>
                                        {/* {mathNotes1.map((idx) => (
                                     <div key={idx.id}>
                                         <iframe src={idx.link} allow="autoplay" />
                                     </div>
                                 ))} */}
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/XslI8h7cGDs?si=edubDfE33oImWmi6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        <iframe width="460" height="215" src="https://www.youtube.com/embed/58N2N7zJGrQ?si=lGNOTL8qKzvY3ubk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}


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

                    {sixthSem.map(({ id, title, imglink }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");


                            let navigate = useNavigate();
                            return (
                                <div>
                                    <div>
                                        <div onClick={() => navigate("/acad")} className=' hover:text-blue-600 duration-100 cursor-pointer mb-10 px-10 text-primary '>
                                            <ArrowBackIos />
                                        </div>
                                        <div className='flex flex-wrap flex-col relative md:flex-row p-22 ml-20 mt-12 gap-20 md:gap-15 justify-center'>

                                            {firstSem.map(({ id, title, imglink }) => (
                                                <div onClick={(e) => {
                                                    // navigate("/acad");



                                                }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                                                    <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                                                    <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                                                </div>

                                            ))}

                                        </div>

                                    </div>
                                </div>
                            )
                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
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

                    {seventhSem.map(({ id, title, imglink }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
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

                    {eigthsem.map(({ id, title, imglink }) => (
                        <div onClick={(e) => {
                            // navigate("/acad");



                        }} key={id} className="w-[310px] md:w-[410px] h-[100px] md:h-[200px] bg-gradient-to-b from-fuchsia-700 rounded-[28px] items-center inline-flex justify-center cursor-pointer">
                            <img className='mr-15 h-20 md:h-32 w-25 justify-start' src={imglink} alt='images' />
                            <div className="text-center text-white text-xl md:text-3xl  font-normal mr-4">{title}</div>
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}



