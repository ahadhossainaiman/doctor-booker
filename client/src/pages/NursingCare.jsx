import React from "react";
import { NavLink } from "react-router-dom";

const NursingCare = () => {
  return (
    <div className="">
      <h2 className="page-heading about-heading my-10">Nursing Home Care BD</h2>
      <div className="grid lg:grid-cols-2 gap-6 justify-center align-center sm:grid-cols-1 md:grid-cols-1 min-[320px]:flex-col mx-5">
        <div className=" bg-cyan-500 px-[5%] py-20 rounded-md">
          <img
            className="w-[90%] lg:px-[10%] mx-auto"
            src="https://www.nursinghomecarebd.com/wp-content/uploads/phiyo-therapy-support-at-home.jpg"
            alt=""
          />
          <h1 className="text-4xl uppercase my-5 text-white mb-10 text-center">
            Physio Therapy at Home
          </h1>
          <p className="text-justify">
            Under this service, we are promised to maintain, restore, and
            promote not only physical function but also health and fitness. As
            per expert therapist suggestion, our therapist works almost 24/7 and
            prevents symptoms, develops disorders and functional limitations and
            disabilities that may be caused by disease, disorder. You needed
            physio therapist Contact us.
          </p>
        </div>
        <div className=" bg-cyan-500 px-[5%] py-20 rounded-md">
          <img
            className="w-[90%] lg:px-[10%] mx-auto"
            src="https://www.nursinghomecarebd.com/wp-content/uploads/One-Call-Service-in-Dhaka-BD.jpg"
            alt=""
          />
          <h1 className="text-4xl uppercase my-5 text-white mb-10 text-center">
            One Call Service
          </h1>
          <p className="text-justify">
            We provide medical equipment’s and oxygen cylinder rent sell also
            refill for all client needs. The equipment’s offered by us are very
            reliable and best price in Bangladesh and well researched. We always
            carry out a background check on every piece of equipment before use.
            Furthermore, equipment rental rates can be negotiated based on
            client budget constraints. We provide more experienced staff members
            based on the equipment home delivery in Dhaka.
          </p>
        </div>
        <div className=" bg-cyan-500 px-[10%] py-20 rounded-md">
          <img
            className="w-full lg:px-[10%] mx-auto"
            src="https://www.nursinghomecarebd.com/wp-content/uploads/Nurse-Service-at-Home-Care.jpg"
            alt=""
          />
          <h1 className="text-4xl uppercase my-5 text-white mb-10 text-center">
            Nurse Service at Home
          </h1>
          <p className="text-justify">
            Nurse Service at Home - Our home service is ideal for patients who
            need long-term health care for complex medical problems and daily
            needs. This program aims to help elderly home patients regain their
            independence through a systematic and loving care plan specifically
            designed for each senior care.
          </p>
        </div>
        <div className=" bg-cyan-500 px-[10%] py-20 rounded-md">
          <img
            className="w-full lg:px-[10%] mx-auto"
            src="https://www.nursinghomecarebd.com/wp-content/uploads/Baby-Care-at-Home.jpg"
            alt=""
          />
          <h1 className="text-4xl uppercase my-5 text-white mb-10 text-center">
            Baby Care at Home
          </h1>
          <p className="text-justify">
            A new baby is undoubtedly a very pleasant time for everyone at home.
            But it's also true that a new mother experiences many physiological
            & emotional changes, after the birth of a child. It is the time when
            a mother recovers from the birth of a child and requires expert
            attention and care for the baby and mother.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NursingCare;
