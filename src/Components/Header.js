import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const user = {
    name: "Majed",
    isLogged: false
  };
  return (
    <>
      <div className="flex justify-between mx-4 md:mx-0 mb-3">
        <Link to="/">
          {/* <h1 className="text-4xl font-black text-first">NTIS</h1> */}
          <img src="./assets/ntis-trimmy.png" width="150" alt="" />
          </Link>

        <div className="buttons flex space-x-6 mt-auto">
          <Link to="/blog">
            <button className="text-md md:text-xl font-bold text-first transition hover:text-second">
              Blog
            </button>
          </Link>


          <Link to="/about">
            <button className="text-md md:text-xl font-bold text-first transition hover:text-second">
              About
            </button>
          </Link>


          {
            user.isLogged === true ? 
              <div className="text-md md:text-xl font-bold text-gray-600 transition hover:text-second">Welcome, {user.name} 👋</div>
            :
          <Link to="/login">
            <button className="text-md md:text-xl font-bold text-white rounded-full px-4 bg-first transition hover:bg-second hover:text-white">
              Login
            </button>
          </Link>
          }
        </div>
      </div>
      <hr className="w-full mb-2" />

      
    </>
  );
};

export default Header;
