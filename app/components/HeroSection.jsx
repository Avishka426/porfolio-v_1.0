"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-800 via-lime-500 to-yellow-400">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-green-800 via-lime-500 to-yellow-400">
            Avishka Vishmitha
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-bl from-green-800 via-lime-500 to-yellow-400"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Third-year undergraduate at the Faculty of Information Technology, University of Moratuwa, very enthusiastic about full-stack web development and mobile app development.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-8 inline-block py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-800 via-lime-500 to-yellow-400 hover:bg-gradient-to-tl hover:from-green-700 hover:via-lime-400 hover:to-yellow-300 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-8 inline-block py-4 w-full sm:w-fit rounded-full bg-gradient-to-tr from-green-800 via-lime-500 to-yellow-400 hover:bg-gradient-to-bl hover:from-green-700 hover:via-lime-400 hover:to-yellow-300 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 mt-3"
            >
              Resume
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/me.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
