import { doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db, storage } from '../services/firebase';
import { addDoc, collection, serverTimestamp, setDoc } from 'firebase/firestore'; import { Reply } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import 'tailwindcss/tailwind.css';
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
const Detail = () => {
    const { id } = useParams();
    const [doubts, setDoubts] = useState([]);
    const [solution, setSolution] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = async (e) => {
        const imageFile = e.target.files[0];

        if (imageFile) {
            if (imageFile.size <= 1024 * 1024) {
                setSelectedImage(URL.createObjectURL(imageFile));
                const imageRef = ref(storage, `solutions/${imageFile.name}`);
                const uploadTask = uploadBytesResumable(imageRef, imageFile);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');

                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        toast.success("Upload successful");
                        // Get the download URL of our uploaded content
                        getDownloadURL(uploadTask.snapshot.red).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            setSelectedImage(downloadURL);
                        }
                        )
                    }

                )

            } else {
                setSelectedImage(null);
                toast.error('Image size should be less than 1mb')
            }
        }
    }
    useEffect(() => {
        const getDoubtdata = async () => {
            const doubtRef = collection(db, "doubts");
            const doubts = await getDocs(doubtRef);
            setDoubts(doubts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        };
        getDoubtdata();
    }, []);

    useEffect(() => {
        id && getdoubtDetail();
    }, [id]);

    const getdoubtDetail = async () => {
        const doubtRef = doc(db, "doubts", id);
        const doubtDetails = await getDoc(doubtRef);
        setDoubts(doubtDetails.data());
    }
    const handleChange = (e) => {
        setSolution(e.target.value)

    }
    const handleReplySubmit = async () => {
        await addDoc(collection(db, "reply", doubts.id), {
            text: solution,

        })
    }





    return (
        <div className='flex flex-col justify-center align-middle p-20'>
            <div className=' flex flex-row align-baseline justify-start'>
                <div className='rounded-full h-24 w-20  '>
                    <img className='rounded-full' src={doubts.authorPhotoURL} />
                </div>
                <h1 className=' capitalize text-xl p-5 w-full text-white'>
                    {doubts.author}
                </h1>
            </div>
            <div className='text-white p-2 '>
                <h1 className='capitalize font-bold text-2xl'>{doubts.title}</h1>
                <h3 className='p-3 text-slate-300 text-justify '>{doubts.description}</h3>
            </div>
            <div className='p-4 w-full rounded-lg'>
                <img src={doubts.photoUrl} />
            </div>



            <div className="flex items-center justify-start p-5 w-full md:w-4/5 ">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
                    <div className="flex items-center mb-4">
                        <Reply className="text-white mr-2" />
                        <h2 className="text-xl font-semibold text-white">reply</h2>
                    </div>
                    <TextareaAutosize
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white rounded p-2 resize-none"
                        rowsMin={4}
                        placeholder="Enter text here..."
                    />
                    <div className='mt-5 flex flex-row gap-10 justify-between align-middle'>
                        <Button onClick={handleReplySubmit} color='primary' variant='contained'>Submit</Button>
                        <input className='mt-1' type='file' name='myImage' onChange={handleImageChange} />
                    </div>



                </div>
            </div>



        </div>

    )
}

export default Detail