import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button 
      onClick={selectTab}
      className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm ${
        active 
          ? "bg-gradient-to-br from-green-800 via-lime-500 to-yellow-400 text-white shadow-lg shadow-green-500/25" 
          : "bg-gray-800 text-gray-300 hover:bg-gradient-to-tr hover:from-green-800 hover:via-lime-500 hover:to-yellow-400 hover:text-white border border-gray-700 hover:border-yellow-400"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 font-semibold">
        {children}
      </span>
    </motion.button>
  );
};

export default TabButton;
