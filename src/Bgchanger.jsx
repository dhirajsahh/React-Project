import { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center bg-white mx-auto gap-3 fixed bottom-4 px-4 py-2 rounded-xl">
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-red-500 font-semibold text-white "
          onClick={() => {
            setColor("Red");
          }}
        >
          Red
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-green-500 font-semibold text-white"
          onClick={() => {
            setColor("Green");
          }}
        >
          Green
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-blue-700 font-semibold text-white"
          onClick={() => {
            setColor("Blue");
          }}
        >
          Blue
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-cyan-200 font-semibold text-white"
          onClick={() => {
            setColor("#00FFFF");
          }}
        >
          Cyan
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-yellow-300 font-semibold text-white"
          onClick={() => {
            setColor("Yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-orange-500 font-semibold text-white"
          onClick={() => {
            setColor("Orange");
          }}
        >
          Orange
        </button>
        <button
          className="flex justify-center bg-red px-4 py-2 rounded-xl bg-black font-semibold text-white"
          onClick={() => {
            setColor("Black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default Bgchanger;
