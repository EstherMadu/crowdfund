import React from "react";
import mLogo from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";
import Subhero from "./Subhero";

const Hero = () => {
  return (
    <main className="px-6 md:px-0">
      <section className="bg-white max-w-[700px]  mx-auto rounded-lg shadow-lg md:h-[240px] mt-[-320px] ">
        <div className="flex justify-center items-center text-center">
          <div>
            <img src={mLogo} alt="m-logo" className="mx-auto mt-[-30px]" />

            <h2 className="font-bold text-2xl py-4">
              Mastercraft Bamboo Monitor Riser
            </h2>
            <p className="leading-2">
              A beautiful and hand crafted monitor to reduce neck and eye strain
            </p>
          </div>
        </div>
        <div className="justify-center pb-12 px-8 mt-8 mb-8 flex items-center md:justify-between">
          <button className="bg-green-900 w-full md:w-auto text-sm text-white py-4 px-4 rounded-full">
            Back this project
          </button>
          <button className="md:bg-slate-200 pl-4 md:pl-0 flex items-center rounded-full">
            <div className="">
              <img src={bookmark} alt="bookmark" />
            </div>
            <div className="px-4 text-sm hidden md:block">Bookmark</div>
          </button>
        </div>
      </section>
      <section className=" px-8 mx-auto bg-white max-w-[700px] mt-10  shadow-lg flex flex-col md:flex-row items-center   py-10 text-center md:text-left rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold">$89,134</h2>
            <p>of $100,000 backed</p>
          </div>
          <div class="border-b md:border-l border-gray-400 h-12 md:w-0 md:ml-10"></div>
        </div>
        <div className="flex flex-col md:flex-row md:ml-14 items-center">
          <div>
            <h2 className="text-3xl font-bold">$5,000</h2>
            <p>total backers </p>
          </div>
          <div class="border-b md:border-l border-gray-400 h-12 md:ml-12"></div>
        </div>
        <div className="ml-14">
          <h2 className="text-3xl font-bold"> 56</h2>
          <p>days left</p>
        </div>
      </section>
      <Subhero />{" "}
    </main>
  );
};

export default Hero;
