import React from 'react'
import {useNavigate} from "react-router-dom";


const Footer = () => {
    let navigate = useNavigate();
    const links = [
        { label1: "About", link: "/about" },
        { label2: "Contact", link: "/contact" }
    ];
    return (
        <div class="w-full min-h-min flex items-center justify-center bg-black">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div class="w-full text-7xl font-bold">
                <h1 class="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div class="flex flex-col">
            {links.map(({ label1,label2, link }) => (
                <div onClick={(e) => navigate(link)} class="flex mt-10 mb-4 flex-row justify-center gap-52">
                    <p class=" hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">{label1} {label2}</p>
                </div>))}
                <hr class="border-gray-600"/>
                <p class="w-full text-center my-12 text-gray-600">Copyright © 2023 ACADEMIA HUB</p>
            </div>
        </div>
    </div>
    )
}

export default Footer