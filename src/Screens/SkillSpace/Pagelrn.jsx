import React from "react";

import { learn } from "./data";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Pagelrn = () => {
  let navigate = useNavigate();
  return (
    <div className="px-20 py-10  " >
      <div className="text-primary cursor-pointer hover:text-blue-500" onClick={() => navigate("/skill")} >
        <ArrowBackIos />
      </div>
      <div class="flex flex-wrap gap-20 p-20 align-middle justify-center ">
        {learn.map((idx) => (
          <div class="  gap-flex flex-wrap max-w-xs rounded-md  shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <div className="w-full ">
              <img className="object-fit " src={idx.imgsrc} alt="" />
            </div>
            <div class="py-4 px-4  bg-white">
              <h3 class="text-md font-semibold text-gray-600">
                {idx.title}
              </h3>
              <p class="mt-4 text-lg font-thin object-fill">
                {idx.desc}{" "}
              </p>
              <span class="flex items-center justify-center mt-4 w-full bg-purple-400 hover:bg-purple-800 hover:text-white py-1 rounded">
                <button class="font-semibold text-gray-800 hover:text-white">Explore</button>
              </span>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Pagelrn;
