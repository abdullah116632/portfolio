"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "NUM-1",
    category: "full-stack",
    title: "project 1",
    description:
      "This real-time chat application, developed by myself, offers a seamless communication experience with a range of modern features. Users can sign up, log in, and log out securely, with the added convenience of a 'Forgot Password' option that uses email verification through an OTP (One-Time Password) system for account recovery. The chat functionality is powered by Socket.io, enabling instant message delivery between users. Besides text, users can share photos and videos, enhancing the richness of their conversations. Each user can also update their profile, ensuring their information and avatar are always up-to-date.",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "redux" }, { name: "node.js" }, { name: "express.js" }, { name: "mongoDB" },],
    image: "/assets/work/work1.png",
    live: "https://textripple.netlify.app",
    github: "https://github.com/abdullah116632/MERN-chatApp",
  },
  {
    num: "NUM-02",
    category: "frontend",
    title: "project 2",
    description:
      "This is a clone of amazon created by pure html and css",
    stack: [{ name: "HTML" }, { name: "CSS" },],
    image: "/assets/work/work2.png",
    live: "",
    github: "https://github.com/abdullah116632/Clone-Of-Amazon",
  },
  {
    num: "NUM-03",
    category: "frontend",
    title: "project 3",
    description:
      "This project created by html css and vanilla javascript",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "javascript" },
    ],
    image: "/assets/work/work3.png",
    live: "",
    github: "https://github.com/abdullah116632/Todo-list",
  },
  {
    num: "NUM-04",
    category: "full-stack",
    title: "project 3",
    description:
      "This is a full-stack authentication practice project, It have all authentication related feature(Sign up, Login, logout, forget password, reset password, update password)",
    stack: [
      { name: "React.js" },
      { name: "tailwind" },
      { name: "javascript" },
      { name: "express" },
      { name: "mongoDb" },
    ],
    image: "/assets/work/work4.png",
    live: "",
    github: "https://github.com/abdullah116632/MERN-auth-app",
  },
  {
    num: "NUM-05",
    category: "frontend",
    title: "project 3",
    description:
      "This is a simple calculator app created using react",
    stack: [
      { name: "React.js" },
      { name: "CSS" },
      { name: "javascript" },
    ],
    image: "/assets/work/work5.png",
    live: "",
    github: "https://github.com/abdullah116632/calculator",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setproject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl-w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl loading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold loading-none text-white group-hover:text-accent translate-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
            {
              projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">

                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-cover" alt="" />
                  </div>

                  </div>
                </SwiperSlide>
              })
            }
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
