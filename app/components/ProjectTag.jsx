import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-green-800 via-lime-500 to-yellow-400 border-yellow-400 font-semibold shadow-lg shadow-green-500/25"
    : "text-[#ADB7BE] border-gray-700 hover:border-yellow-400 hover:text-white bg-gray-800 hover:bg-gradient-to-tr hover:from-green-800 hover:via-lime-500 hover:to-yellow-400";
  return (
    <button
      className={`${buttonStyles} rounded-lg border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
