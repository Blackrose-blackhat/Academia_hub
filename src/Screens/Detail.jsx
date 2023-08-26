import { doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { auth, db, storage } from '../services/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'; import { Reply } from '@mui/icons-material';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ref } from 'firebase/storage';
import 'tailwindcss/tailwind.css';
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
const Detail = () => {
    const { id } = useParams();
    const [doubts, setDoubts] = useState([]);
    const [reply, setReply] = useState([]);
    const [solution, setSolution] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [active, setActive] = useState(false);

    const user = auth?.currentUser;
    const handleReset = () => {
        setSolution("");
        setSelectedImage(null);
    }
    const handleImageChange = async (e) => {
        const imageFile = e.target.files[0];

        if (imageFile) {
            if (imageFile.size <= 1024 * 1024) {
                setSelectedImage(URL.createObjectURL(imageFile));
                const imageRef = ref(storage, `images/solutions/${imageFile.name}`);
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
                        setActive(true);

                        // Get the download URL of our uploaded content
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log('File available at', downloadURL);
                            setSelectedImage(downloadURL);
                        }
                        )
                    }

                )

            } else {

                toast.error('Image size should be less than 1mb')
                setSelectedImage(null);
            }
        }
    }
    const unsub = async () => {
        const querySnapshot = await getDocs(collection(db, "reply", id, "replies",));
        let lists = [];
        querySnapshot.forEach((doc) => {

            lists.push({ id: doc.id, ...doc.data() });
        })
        setReply(lists)

    }
    useEffect(() => {
        const getDoubtdata = async () => {
            const doubtRef = collection(db, "doubts");
            const doubts = await getDocs(doubtRef);
            setDoubts(doubts.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        };
        const unsub = async () => {
            const querySnapshot = await getDocs(collection(db, "reply", id, "replies",));
            let lists = [];
            querySnapshot.forEach((doc) => {

                lists.push({ id: doc.id, ...doc.data() });
            })
            setReply(lists)

        }

        getDoubtdata();
        unsub();

    }, [id]);

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

        if (solution) {
            await addDoc(collection(db, `reply/${id}/replies`,), {
                text: solution,
                uid: id,
                photoUrl: selectedImage,
                author: user?.displayName,
                timestamp: serverTimestamp(),
                userPhotoUrl: user?.photoURL
            })
            toast.success("Reply added, thnaks for your contribution")
            setSolution("")
            setSelectedImage(null);

        }
        else {
            toast.error("Please fill in required fields!")
        }
        unsub();

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
            <div className='p-4 w-full md:w-96 rounded-lg'>
                <img src={doubts.photoUrl} />
            </div>

            <div className='flex flex-row text-white font-semibold p-5 text-2xl justify-start align-middle gap-4'>
                <h1>Reply</h1>
                <div className='rounded-lg h-1 bg-primary w-full mt-4'></div>
            </div>

            <div className='flex flex-col w-full p-5'>
                <div className='flex flex-row w-full'>
                    <div className=' gap-20 flex flex-col w-full'>
                        {reply.map((item) => (
                            <div className='flex flex-col  rounded-lg  cursor-pointer duration-500 ' key={item.id} >
                                <div className='flex flex-row  align-middle justify-start'>
                                    <div className='rounded-3xl  h-14 w-14 md:h-20 md:w-20'>
                                        <img className='rounded-full' src={item.userPhotoUrl} />
                                    </div>

                                    <p className=' p-5 md:mt-2 text-lg md:text-2xl font-semibold capitalize text-white flex flex-row w-full align-middle '>
                                        {item.author}
                                    </p>

                                </div>
                                <div className='flex flex-row align-middle justify-between w-full'>
                                    <p className='text-white font-semibold mt-10 w-1/2 p-2 text-lg md:text-2xl'>{item.title}</p>
                                </div>
                                <div className='  text-white flex flex-col justify-between align-middle w-full'>
                                    <div className=' w-full justify-start p-2 align-baseline flex flex-row'>
                                        {(item.text)}
                                    </div>
                                    <div className='w-full rounded-full'>
                                        <img className='h-full w-60 rounded-lg' src={item.photoUrl} />
                                    </div>



                                </div>
                                <div className='mt-5 h-1 bg-primary w-full rounded-3xl' />
                            </div>))
                        }
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-start p-5 w-full md:w-4/5 ">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
                    <div className="flex items-center mb-4">
                        <Reply className="text-white mr-2" />
                        <h2 className="text-xl font-semibold text-white">reply</h2>
                    </div>
                    <TextareaAutosize
                        value={solution}
                        onChange={handleChange}
                        className="w-full bg-gray-700 text-white rounded p-2 resize-none"
                        rowsMin={4}
                        placeholder="Enter text here..."
                    />
                    <div className='mt-5 flex flex-col-reverse gap-10 justify-between align-middle'>
                        <div className=' flex flex-row justify-between'>
                            {!solution && (
                                <button disabled={true} className=' disabled:bg-blue-200  mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                                    Submit
                                </button>
                            )


                            }

                            {solution && selectedImage && (
                                <button disabled={!active ? true : false} onClick={handleReplySubmit} className=' disabled:bg-blue-200  mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                                    Submit
                                </button>
                            )


                            }

                            {solution && !selectedImage ? (
                                <button onClick={handleReplySubmit} className=' disabled:bg-blue-200  mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
                                    Submit
                                </button>
                            ) : (
                                <button  >

                                </button>
                            )}


                            {solution || selectedImage ? <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' onClick={handleReset}>reset</button> : <div></div>}

                        </div>
                        <div class="flex items-center justify-center w-full">
                            {!selectedImage ? <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>

                                <input id="dropzone-file" type="file" accept='image/*' class="hidden" onChange={handleImageChange} />

                            </label> : <div> <img className='w-full h-64' src={selectedImage} /></div>}

                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Detail