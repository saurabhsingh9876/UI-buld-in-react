import React from "react";

function Hcard() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full md:w-[80%] xl:w-[60%] h-auto bg-slate-50 mx-auto mt-5 p-4 rounded-lg shadow-md">
      <div className="flex justify-center items-center w-full md:w-1/3 rounded-md p-4">
        <img
          src="https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149213537.jpg"
          alt="Computer Logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="w-full md:w-1/3 text-sm text-gray-700 p-4">
        <p className="mb-4">
          <span className="text-gray-800 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>{" "}
          Recusandae qui quidem voluptatem nemo dolores inventore, laborum quas
          quam aperiam nulla aliquid minus.
        </p>
        <p className="mb-4">
          <span className="text-gray-800 font-medium">
            Lorem ipsum dolor sit amet consectetur..
          </span>{" "}
          laborum quas aliquid minus.
        </p>
        <p className="text-blue-400">view more...</p>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-between items-center p-4">
        <div className="w-28 h-20 bg-blue-100 text-blue-600 text-2xl rounded-md flex flex-col justify-center items-center ">
          <span className="text-3xl font-bold">9.3</span>
          <p className="text-sm">Exceptional</p>
          <p className="text-yellow-500">★★★★★</p>
        </div>
        <button className="w-full md:w-40 lg:w-30 h-10 px-4 mt-4 text-white bg-blue-500 rounded-md text-sm">
          View
        </button>
      </div>
    </div>
  );
}

export default Hcard;
