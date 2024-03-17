import React from "react";

const Input = ({ heading }) => {
  return (
    <div className="mb-3">
      <p className="font-normal text-base mb-2">{heading}</p>
      <input
        className="border rounded-md border-color-[#C1C1C1] w-full p-2"
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
