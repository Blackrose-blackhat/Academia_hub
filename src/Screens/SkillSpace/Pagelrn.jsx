import React from "react";
import Webdev from "../../assets/Webdev.jpg";
import Android from "../../assets/Android.jpg";
import cybersecurity from "../../assets/cybersecurity.jpg";
import DataStructures from "../../assets/DataStructures.jpg";
import uiux from "../../assets/uiux.jpg";
import learngit from "../../assets/learngit.jpg";
const Pagelrn = () => {
  return (
    <div>
      <div class="px-10 py-20 bg-transparent grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img className="object-cover" src={DataStructures} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Data Structures & ALgorithms
            </h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of Web Development{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img className="object-cover" src={Android} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Android</h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of Android Development{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img className="object-coverw w-11/12 " src={learngit} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Version Control</h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of Git and GitHub{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={cybersecurity} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Cybersecurity</h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of Hacking and Cybersecurity{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={Webdev} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
            Web Development
            </h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of Web Development{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={uiux} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              UI/UX
            </h3>
            <p class="mt-4 text-lg font-thin">
              Deep dive into the journey of UI and UX{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagelrn;
