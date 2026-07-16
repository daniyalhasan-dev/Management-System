import React from "react";

const Header = () => {
  return (
    <div className="bg-[#111111] px-6 py-6 px-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        {/* Left */}
        <div>
          <p className="text-base sm:text-lg text-gray-300">
            Hello,
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">
            Daniyal 👋
          </h1>
        </div>

        {/* Right */}
        <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium transition">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;