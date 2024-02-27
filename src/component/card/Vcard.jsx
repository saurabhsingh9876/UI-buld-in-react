import React from "react";

function Vcard() {
  return (
    <div className="max-w-l sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-2 pt-2">
      <div className="bg-white  shadow-md p-5 rounded-lg ">
        <div className="flex justify-center">
          <img
            src="https://logos.flamingtext.com/Name-Logos/Webpage-design-sketch-name.png"
            alt="Computer Logo"
            className="w-52 h-20 p-2 shadow-sm rounded-lg"
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="w-1/3 bg-blue-50 rounded-md  text-blue-400 text-xs  text-center p-1 mr-2">
            (20% off)
          </div>
          <div className="w-1/2 bg-blue-50 rounded-md text-blue-400 text-xs text-center p-1 ml-2 mr-7  ">
            Limited Time
          </div>
        </div>
        <p className="text-xl text-center text-gray-700 mt-2">Web Builder1</p>
        <p className="text-xs text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur bhsgf.
        </p>
        <div className="flex justify-between mt-2 items-center">
          <p className="text-xl font-bold">$38.67</p>
          <p className="text-sm text-gray-400 font-mono line-through">$49.76</p>
          <p className="text-sm text-blue-400 font-mono">(20% off)</p>
        </div>
        <button className="w-full mt-7 bg-blue-500 text-white rounded-md py-2 text-sm">
          View Deal
        </button>
      </div>
    </div>
  );
}

export default Vcard;
