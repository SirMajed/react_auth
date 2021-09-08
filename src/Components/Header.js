import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-4 md:mx-0 mb-5">
        <Link to="/"><h1 className="text-4xl font-black text-first">NTIS</h1></Link>
        <div className="buttons flex space-x-6 mt-auto">
          <Link to="/about">
            <button className="text-xl font-black text-first transition hover:text-second">
              About
            </button>
          </Link>

          <Link to="/login">
            <button className="text-xl font-black text-white rounded-full px-4 bg-first transition hover:bg-second hover:text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      
    </>
  );
};

export default Header;
