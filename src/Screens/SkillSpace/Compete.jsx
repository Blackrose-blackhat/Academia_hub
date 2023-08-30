import React from "react";
import gfgcontest from "../../assets/gfgcontest.jpg"
import leetcodecontest from "../../assets/leetcodecontest.jpg"
import codeforcescomp from "../../assets/codeforcescomp.jpg"
import codechefcomp from "../../assets/codechefcomp.jpg"
import hackathon1 from "../../assets/hackathon1.jpg"
import hackathon2 from "../../assets/hackathon2.jpg"

const Compete = () => {
  return (
    <div>
      <div class="px-10 py-20 bg-transparent grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={gfgcontest}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              GeeksforGeeks Contest
            </h3>
            <p class="mt-4 text-lg font-thin">
              Join weekly contest for excitng opprtunities{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={leetcodecontest}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Leetcode biweekly and weekly contest
            </h3>
            <p class="mt-4 text-lg font-thin">
              Join biweekly and weekly contests to sharpen your coding Skills{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={codeforcescomp}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">
              Codeforces Competetion
            </h3>
            <p class="mt-4 text-lg font-thin">
              Start yor Competitive Coding journey here{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={codechefcomp}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600"> Codechef</h3>
            <p class="mt-4 text-lg font-thin">
              {" "}
              Sharpen your Competitive Coding Skills here{" "}
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={hackathon1}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Unstop </h3>
            <p class="mt-4 text-lg font-thin">
              Did someone say Hackathon? Explore new Hackathons and participate
              in the one that amazes you!
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img
              src={hackathon2}
              alt=""
            />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Devfolio</h3>
            <p class="mt-4 text-lg font-thin">
              If there is a hackathon you can't miss Devfolio. Check them out
              for exciting updates on competitions and hackathons
            </p>
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compete;
