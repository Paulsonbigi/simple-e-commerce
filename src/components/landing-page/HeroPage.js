import React from "react";

const HeroPage = () => {
  return (
    <div
      className="pt-20 pb-10 bg-gradient-to-r from-primary to-primary md:to-white-500"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl md:w-1/2 font-bold mb-2 text-accent md:text-white">
          Your Number 1 Store For the Best Customer Experience
        </h3>
        <p className="text-1xl mb-8 md:w-1/2 text-gray-200">
          Getting the exact experience would never be a far-fatched possibilty
          with us.
        </p>
        <button className="bg-white text-primary font-bold rounded-md py-3 px-10 shadow-lg uppercase tracking-wider">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
