import React from "react";
import Abhirup from "../assets/Abhirup.jpg";
import Subash from "../assets/Subash.jpg";
import Musharaf from "../assets/Musharaf.jpg";
const About = () => {
    return (
        <div className="relative">
            <div class="flex flex-col md:flex-row p-10">
                <div class="basis-1/3 md:basis-1/3 flex flex-col p-5 ">
                    <img className="rounded-full p-12" src={Musharaf}></img>
                    <p className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Musharaf Parwez</p>
                </div>
                <div class="basis-1/3 md:basis-1/3 flex flex-col p-5">
                    <img className="rounded-full p-12" src={Abhirup}></img>
                    <p className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Abhiroop Kumar Singh</p>
                </div>
                <div class="basis-1/3 md:basis-1/3 flex flex-col p-5 ">
                    <img className="rounded-full p-12" src={Subash}></img>
                    <p className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Subash Chandra Pradhan</p>
                </div>
            </div>
            <div className="text-center justify-center my-14 ">
                <p className="text-gray-300 text-4xl font-bold">About Us</p>
                <p className="text-gray-100 text-sm">Lorem ipsum</p>
            </div>
        </div>
    );
}
export default About;