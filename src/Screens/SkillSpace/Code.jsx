import React from 'react';




const Code = () => {
  return (
    <div>
      <div class="px-10 py-20 bg-transparent grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={geekslogo} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">GeeksforGeeks</h3>
            <p class="mt-4 text-lg font-thin">Suited for begineers to practice and brush up their skills in Data Structures & Algorithms</p>
            <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
              
            <button class="font-semibold text-white">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">HackerRank</h3>
            <p class="mt-4 text-lg font-thin">Suited for begineers to practice and brush up their skills in Data Structures & Algorithms</p>
            <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
              
              <button class="font-semibold text-white">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={hackerearth} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
          <h3 class="text-md font-semibold text-gray-600">HackerEarth</h3>
          <p class="mt-4 text-lg font-thin">Suited for begineers and advanced begineers to practice and brush up their skills in Data Structures & Algorithms</p>
          <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
            
            <button class="font-semibold text-white">Explore</button>
          </span>
        </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={leetcode} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">LeetCode</h3>
            <p class="mt-4 text-lg font-thin">Suited for those who are proficient Data Structures & Algorithms</p>
            <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
              
              <button class="font-semibold text-white">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Codechef</h3>
            <p class="mt-4 text-lg font-thin">Suited for experts to practice and brush up their skills in Data Structures & Algorithms</p>
            <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
              
              <button class="font-semibold text-white">Explore</button>
            </span>
          </div>
        </div>
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
          <div>
            <img src={} alt="" />
          </div>
          <div class="py-4 px-4 bg-white">
            <h3 class="text-md font-semibold text-gray-600">Codeforces</h3>
            <p class="mt-4 text-lg font-thin">Suited for experts to practice and brush up their skills in Data Structures & Algorithms</p>
            <span class="flex items-center justify-center mt-4 w-full bg-green-400 hover:bg-green-900 py-1 rounded">
              
              <button class="font-semibold text-white">Explore</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Code