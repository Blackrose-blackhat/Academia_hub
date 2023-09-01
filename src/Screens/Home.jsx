import React, { useState } from 'react'
import Cards from '../components/Cards';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import FloatingActionButton from '../components/FloatingActionButton';
import { ArrowBackIos } from '@mui/icons-material';
import { toast } from 'react-toastify';


const Home = ({ user }) => {

    const isAllowed = user.email.endsWith('@cgu-odisha.ac.in');
    return (
        <div>
            {isAllowed ? (<div className=' flex flex-col justify-center align-middle'>
                <Cards user={user} />
                <FloatingActionButton />
            </div>) : (
                <div className='flex flex-row justify-center align-middle h-screen w-full'>
                    <div className=' p-5 gap-10 flex flex-col justify-center align-middle'>
                        <h1 className=' text-center uppercase text-xl md:text-4xl text-white font-bold'>We are sorry , You are not authorized</h1>
                        <h3 className='text-slate-400 text-center'>This section i strictly for <span className='text-red-500'>CV Raman</span> students and can't be viewed without CGU mail id</h3>
                        <div className='flex flex-row justify-center align-middle p-5 '>
                            <button onClick={async () => {
                                await signOut(auth).then(() => {
                                    localStorage.clear();
                                    toast.success("User Logged out!")

                                }).catch((error) => {
                                    toast.error(error);
                                    console.log(error);
                                })
                            }} className='p-3 rounded-xl hover:bg-purple-600 bg-primary text-white w-1/2 flex flex-row justify-center align-middle '>
                                <div>

                                    <ArrowBackIos />
                                </div>
                                Go to Login
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>

    )
}

export default Home;