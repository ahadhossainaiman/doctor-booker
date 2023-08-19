import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="">
      <h2 className="page-heading about-heading my-10">Hospital List</h2>
      <div className="flex lg:flex-row gap-6 justify-center align-center sm:flex-col md:flex-col min-[320px]:flex-col ">
        <div className=" bg-cyan-500 px-40 py-20 ">
          <h1 className="text-4xl text-white mb-10">Public Hospital</h1>
          <NavLink
            className="bg-red-500 px-[20%] py-[5%] mx-10 mt-10 text-white rounded-md"
            to={"/publichospital"}
          >
            Details
          </NavLink>
        </div>
        <div className="bg-cyan-500 px-40 py-20">
          <h1 className="text-4xl text-white mb-10">Private Hospital</h1>
          <NavLink
            className="bg-green-500 px-[20%] py-[5%] mx-10 mt-10 text-white rounded-md"
            to={"/privatehospital"}
          >
            Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;
