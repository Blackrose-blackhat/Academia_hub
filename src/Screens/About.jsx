import React from "react";
import Abhirup from "../assets/Abhirup.jpg";
import Subash from "../assets/Subash.jpg";
import Musharaf from "../assets/Musharaf.jpg";
const About = () => {
    return (
        <div className="relative">
            <div className="flex flex-col md:flex-row p-10">
                <div className=" md:basis-1/3 flex flex-col p-5 ">
                    <img className="rounded-full p-12 " src={Musharaf}></img>
                    <a href="https://www.linkedin.com/in/mushraf-parwej/" target="_blank" className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Musharaf Parwez</a>
                </div>
                <div class="basis-1/3 md:basis-1/3 rounded-full flex flex-col p-5">
                    <img className="rounded-full p-12" src={Abhirup}></img>
                    <a href="https://www.linkedin.com/in/abhiroop-kumar-b08726219/" target="_blank" className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Abhiroop Kumar Singh</a>
                </div>
                <div class="basis-1/3 md:basis-1/3 flex flex-col p-5 ">
                    <img className="rounded-full p-12" src={Subash}></img>
                    <a href="https://www.linkedin.com/in/subash-chandra-pradhan-a7945b224/" target="_blank" className="text-center text-white text-sm md:text-xl font-bold m-[-18px]">Subash Chandra Pradhan</a>
                </div>
            </div>
            <div className="text-center justify-center my-14 ">
                <p className="text-gray-300 text-4xl font-bold">About Us</p>
                <p className="text-gray-100 text-sm md:text-2xl p-10">The team that made it all possible 💜</p>
            </div>
        </div>
    );
}
export default About;