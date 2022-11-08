import React from "react";

const HomeSkeleton = () => {
  return (
    <div class="mt-8 w-full flex items-center flex-col  bg-white">
      <div class="flex flex-col bg-white shadow-md  rounded-md w-full">
        <div className="flex items-center mb-4 px-3 pt-3 md:px-0 flex-col md:flex-row">
          <div
            data-placeholder
            class="mb-1 h-9 w-full rounded-md bg-gray-200"
          ></div>
          <div
            data-placeholder
            class="mb-2 h-9 w-full rounded-md bg-gray-200"
          ></div>
        </div>

        <div className="grid grid-cols-3 mb-5 justify-items-center">
          <div data-placeholder class="h-4 w-24 bg-gray-200"></div>
          <div data-placeholder class="h-4 w-24 bg-gray-200"></div>
          <div data-placeholder class="h-4 w-24 bg-gray-200"></div>
        </div>

        <div
          className="h-9 mx-8 mb-3 md:ml-2 flex rounded-lg bg-gray-200"
          data-placeholder
        ></div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
