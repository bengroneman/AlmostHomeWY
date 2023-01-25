import React from "react";
import PrimaryBtn from "./global/PrimaryBtn";

const Hero = function(props) {
  return (
    <div className="relative bg-gray-800 bg-blend-screen">
      <div className="absolute inset-0 from-purple-600 to-blue-600 bg-blend-screen">
        {props.image && (
            <img
              className="h-full w-full object-cover"
              src={props.image}
              alt="People working on laptops"
            />
          )}
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
          <h2 className="text-center text-2xl font-semibold tracking-light text-indigo-200 mt-2">
            {props.subTitle}
          </h2>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Hero;
