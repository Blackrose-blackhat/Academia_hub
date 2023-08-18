import React from "react";
import Abhirup from "../assets/Abhirup.jpg";
import Subash from "../assets/Subash.jpg";
import Musharaf from "../assets/Musharaf.jpg";
const About = () => {
    return(
        <div>
            <div className="p-20 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="overflow-hidden shadow-lg">
            <img src={Musharaf} class=" rounded-full w-full"></img>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Musharaf</div>
            </div>
            <img src={Subash} class="rounded-full w-full"></img>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Abhirup</div>
            </div>
            <img src={Abhirup} class="rounded-full w-full"></img>
            <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-white">Subash</div>
            </div>
            </div>
            <div className="text-center">
            <p className="text-gray-300 text-5xl font-bold align-center">About Us</p>
            <p className="text-gray-400 max-w-3xl p-10 line-height: 1.625">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </div>
            </div>
        </div>
    );
}
export default About;