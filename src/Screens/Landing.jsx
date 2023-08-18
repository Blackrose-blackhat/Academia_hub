import React from "react";
import { TypeAnimation } from "react-type-animation";
import AuthDialog from "../components/AuthDialog";
import { useState } from "react";
const Landing = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className=" text-center h-[90%] w-full flex flex-row justify-center align-middle ">
      <div className=" flex flex-col justify-center align-middle">
        <div className=" text-5xl md:text-7xl from-white to-gray-800 bg-gradient-to-b bg-clip-text text-transparent  p-5">
          <span class="text-transparent bg-clip-text  ">
            Academia {" "}
          </span>
          HUB
        </div>
        <div className="w-[600px] position: fixed; display: inline-block text-center text-neutral-400 text-sm md:text-xl font-normal mt-20">
          <TypeAnimation
            preRenderFirstString={true}
            style={{ height: '50px', width: '5px' }}
            sequence={["One stop solution for all your academics.", 500, "One stop solution for all previous year questions.", 500, "One stop solution for Skill development", 500]}

            repeat={Infinity}
          />

        </div>
        <div className=" text-center text-[22px] font-normal from-red-600 to-black-300 bg-gradient-to-r bg-clip-text text-transparent">
          exclusively for CV Raman Students
        </div>

        <div className=" w-full flex flex-row justify-center align-middle">
          <div onClick={() => {
            handleDialogOpen();

          }} className=" cursor-pointer  bg-primary mt-20 rounded-3xl p-5 w-2/4 md:w-2/3 hover:bg-purple-600">
            <p className="text-center text-lg text-white font-semibold  ">
              Get Started
            </p>
          </div>
        </div>
        <AuthDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          isLogin={isLogin}
        />
      </div>
    </div>
  );
};
export default Landing;

