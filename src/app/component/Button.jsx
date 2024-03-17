import React from "react";

const Button = ({ data }) => {
  return (
    <div>
      <button className="border rounded-md bg-black text-white font-medium text-base text-center w-full p-3 my-3">
        {data}
      </button>
      <div className="border w-full border-color-[#C1C1C1] my-3"></div>
    </div>
  );
};

export default Button;
