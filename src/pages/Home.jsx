import React from "react";
import logo from "../Assets/Amsalu.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white" name="home">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mb-8 md:mb-0 md:w-1/2 mt-16 md:mt-0"> {/* Added mt-16 class */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">I am FullStack Developer</h2>
            <p className="text-gray-500 py-4 max-w-md text-base sm:text-lg md:text-xl lg:text-2xl">
              As a full-stack developer, you have expertise in both front-end and back-end development, enabling you to work on all aspects of a web application from the user interface to the server-side logic.
            </p>
          </div>
          <div>
            <button className="group text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight className="ml-l" size={25} />
              </span>
            </button>
          </div>
        </div>

        <div className="w-1/2">
          <img src={logo} className="rounded-2xl mx-auto w-full" alt="Amsalu" />
        </div>
      </div>
    </div>
  );
};

export default Home;