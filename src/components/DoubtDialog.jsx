import { TextField } from '@mui/material';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { storage } from '../services/firebase';


const DoubtDialog = ({ isOpen, onClose }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [file, setFile] = useState(null);





    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];


        if (imageFile) {
            if (imageFile.size <= 1024 * 1024) { // Check if the file size is less than 1MB
                setSelectedImage(URL.createObjectURL(imageFile));


            } else {
                setSelectedImage(null);
                toast.error('Image size should be less than 1MB.');
            }
        }
    };
    useEffect(() => {

    })


    if (!isOpen) {
        return null;
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-20 w-full">
            <div className="bg-white p-4 rounded shadow-lg w-full">
                {/* Dialog content goes here */}
                <div className='flex flex-col justify-center align-middle w-full'>
                    <div className='text-black font-semibold '>
                        <h1>Upload Doubt</h1>
                    </div>
                    <div className='flex flex-col py-8 gap-7'>
                        <TextField
                            label="Title"
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="description"
                            type='text'
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}

                        />


                        <div class="flex items-center justify-center w-full">
                            {!selectedImage ? <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>

                                <input id="dropzone-file" type="file" class="hidden" onChange={handleImageChange} />

                            </label> : <div> <img className='w-full h-64' src={selectedImage} /></div>}

                        </div>



                    </div>
                </div>

                <div className='flex flex-row gap-10 align-middle justify-between'>
                    <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                        Close
                    </button>

                    {selectedImage && <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded' onClick={() => setSelectedImage(null)}>reset</button>}
                </div>



            </div>
        </div>
    )
}

export default DoubtDialog