"use client";
import React, { useEffect, useState } from "react";
import { generateCategoryMultiple } from "../utils/generateCategory";
import "tailwindcss/tailwind.css";

const ProtectedPage = () => {
  const [totalCategory, setTotalCategory] = useState(100);
  const [itemPerPage, setItemsPerPage] = useState(7);
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [pages, setPages] = useState(Math.ceil(totalCategory / itemPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const categoryData = generateCategoryMultiple(totalCategory);
    setData(categoryData);
    slicedData(categoryData);
    setIsLoading(false);
  }, [currentPage]);

  useEffect(() => {
    // Initialize checkedItems state when initialData changes
    const newCheckedItems = {};
    initialData.forEach((item, index) => {
      newCheckedItems[index] = false;
    });
    setCheckedItems(newCheckedItems);
  }, [initialData]);

  const slicedData = (category) => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    const sliced = category.slice(start, end);
    setInitialData(sliced);
  };

  const handleCheckboxChange = (index) => {
    setCheckedItems((prevCheckedItems) => {
      return {
        ...prevCheckedItems,
        [index]: !prevCheckedItems[index],
      };
    });
  };

  const next = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center md:mt-11 my-11 mx-5">
      <div className="box border-2 border-solid border-[#C1C1C1] md:w-1/3 mx-auto rounded-3xl p-7">
        <h1 className="text-center font-semibold text-3xl">
          Please mark your interests!
        </h1>
        <p className="font-normal text-base text-center my-4">
          We will keep you notified.
        </p>
        <p className="text-xl font-medium mb-3">My saved interests!</p>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          // Render checkbox items when data is loaded
          initialData.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 bg-slate-500 border border-gray-300 rounded-md checked:bg-black focus:outline-none focus:border-blue-500"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <p className="text-base font-normal">{item.category}</p>
            </div>
          ))
        )}
        <button
          className="border rounded-md bg-black text-white font-medium text-base text-center px-3 py-1 my-3"
          onClick={prev}
        >
          {"Previous"}
        </button>
        <button className="mx-5">{currentPage}</button>
        <button
          className="border rounded-md bg-black text-white font-medium text-base text-center px-3 py-1 my-3"
          onClick={next}
        >
          {"Next"}
        </button>
      </div>
    </div>
  );
};

export default ProtectedPage;
