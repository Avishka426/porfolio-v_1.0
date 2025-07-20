"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "skills",
    content: (
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">SC</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">D.S. Senanayaka College</h3>
              <p className="text-gray-400">2012 - 2021</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">UM</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">University of Moratuwa</h3>
              <p className="text-gray-400">Faculty of Information Technology</p>
              <p className="text-sm text-green-400">2021 - Present</p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "education",
    content: (
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">FS</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Full-Stack Developer</h3>
              <p className="text-gray-400 mb-3">Self-taught & University Projects</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">React</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Node.js</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">MongoDB</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">MA</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Mobile App Developer</h3>
              <p className="text-gray-400 mb-3">React Native & Flutter Projects</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">React Native</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Flutter</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Kotlin</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AX</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AlgoXplore 1.0</h3>
              <p className="text-gray-400">Algorithmic Problem Solving</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">MX</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">MoraXteame Challenge</h3>
              <p className="text-gray-400">12-Hour Algorithmic Coding</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">CR</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">CodeRush 2023</h3>
              <p className="text-gray-400">Competitive Programming</p>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-16" id="about">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image 
                src="/images/about-image.png" 
                width={500} 
                height={500} 
                alt="About me"
                className="rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-0 text-left flex flex-col h-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a full stack web developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with JavaScript, React, Node.js, Express, MongoDB, MySQL,
              HTML, CSS, and React Native. I am a quick learner and I am always
              looking to expand my knowledge and skill set. As a third-year
              undergraduate at the University of Moratuwa, I am enthusiastic about
              both web development and mobile app development, and I'm excited to
              work with others to create amazing applications.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Experience
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
