import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
        <div className="lg:flex pr-6 items-center lg:text-left w-full justify-between mt-20 md:mt-30 text-center">
        <div className="">
          <h1 className="text-first text-4xl font-bold">
            We are better together
          </h1>
          <p className="text-second text-lg mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pretium, velit eget luctus pharetra, lorem magna eleifend.
          </p>
            <Link to="/login">
          <button className="text-xl py-1 font-semibold text-white rounded-full px-4 mt-5 bg-first transition hover:bg-second hover:text-white">
            Get Started
          </button>
          </Link>
        </div>

        <div className="mt-8 lg:mt-0 ">
          <img
            className="w-full h-72 mr-72  ease-linear transform hover:scale-105 transition duration-500"
            src="assets/s2.svg"
            alt=""
          />
        </div>
      </div>
        </>
    );
}

export default Home;
