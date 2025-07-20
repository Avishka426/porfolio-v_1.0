"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("FrontEnd");

  const skillCategories = [
    {
      name: "FrontEnd",
      color: "bg-green-600",
      textColor: "text-white"
    },
    {
      name: "BackEnd",
      color: "bg-transparent border border-white",
      textColor: "text-white"
    },
    {
      name: "Database",
      color: "bg-transparent border border-white",
      textColor: "text-white"
    },
    {
      name: "Mobile App Development",
      color: "bg-transparent border border-white",
      textColor: "text-white"
    }
  ];

  const skills = {
    FrontEnd: [
      {
        name: "HTML",
        level: "Advanced",
        icon: "🌐"
      },
      {
        name: "CSS",
        level: "Intermediate",
        icon: "🎨"
      },
      {
        name: "React",
        level: "Intermediate",
        icon: "⚛️"
      },
      {
        name: "Bootstrap",
        level: "Intermediate",
        icon: "🅱️"
      },
      {
        name: "Angular",
        level: "Beginner",
        icon: "🅰️"
      }
    ],
    BackEnd: [
      {
        name: "Node.js",
        level: "Intermediate",
        icon: "🟢"
      },
      {
        name: "Express.js",
        level: "Intermediate",
        icon: "🚀"
      },
      {
        name: "Python",
        level: "Advanced",
        icon: "🐍"
      },
      {
        name: "Java",
        level: "Intermediate",
        icon: "☕"
      },
      {
        name: "PHP",
        level: "Beginner",
        icon: "🐘"
      }
    ],
    Database: [
      {
        name: "MySQL",
        level: "Intermediate",
        icon: "🗄️"
      },
      {
        name: "MongoDB",
        level: "Intermediate",
        icon: "🍃"
      },
      {
        name: "PostgreSQL",
        level: "Beginner",
        icon: "🐘"
      },
      {
        name: "Firebase",
        level: "Intermediate",
        icon: "🔥"
      }
    ],
    "Mobile App Development": [
      {
        name: "React Native",
        level: "Intermediate",
        icon: "📱"
      },
      {
        name: "Flutter",
        level: "Beginner",
        icon: "💙"
      },
      {
        name: "Android Studio",
        level: "Beginner",
        icon: "🤖"
      },
      {
        name: "Kotlin",
        level: "Beginner",
        icon: "🎯"
      }
    ]
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section id="skills" className="text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Skills</h2>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-green-500 to-green-400 text-white font-bold"
                    : "bg-transparent border border-white text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:text-white hover:border-transparent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
          >
            {skills[activeCategory]?.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 border border-[#333]"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400 text-sm">{skill.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
