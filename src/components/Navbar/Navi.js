import React from "react";
import  Logo1 from "./Logotravel.jpg";
import "./Navbar.css";
// import { Link } from 'react-router-dom';
export const Navi = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

        <img className="w-40 h-14"src={Logo1} alt="" />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">


          <a className="mr-5 hover:text-white-900">Home</a>
          <a className="mr-5 hover:text-white-900">About</a>
          <a className="mr-5 hover:text-white-900">Hotels</a>
          <a className="mr-5 hover:text-white-900">Flights</a>
          <a className="mr-5 hover:text-white-900">Trains</a>
        </nav>

        <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          {/* <Link to='/modal'>Login/SignUp</Link> */}
       Login/SignUp
          
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
