import React from 'react'
import { auth } from '../services/firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
const Home = () => {

    const handlesignOut = async () => {
        signOut(auth).then(() => {
            localStorage.clear();
            toast.success("User Logged out!")
        }).catch((error) => {
            toast.error(error);
            console.log(error);
        })
    }


    return (
        <button onClick={handlesignOut}>signout</button>
    )
}

export default Home;