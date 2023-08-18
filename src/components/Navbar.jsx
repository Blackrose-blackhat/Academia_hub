import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems1 = [
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <nav className=" h-[10%] w-full flex items-center justify-between flex-row p-6">
      <a className="text-3xl tracking-tight flex items-center flex-shrink-0 text-white mr-6">
        <h1 className=" tracking-tight flex items-center flex-shrink- mr-6mb-4 text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-purple-900 ">
            Academia{" "}
            Hub{" "}
          </span>{" "}

        </h1>
      </a>
      <div className="flex flex-row justify-end align-middle w-full gap-10 md:gap-20">
        {navItems1.map((item, idx) => (
          <p className="text-white text-normal md:text-2xl font-semibold  " key={idx}>
            <Link to={item.link}>{item.label}</Link>
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
