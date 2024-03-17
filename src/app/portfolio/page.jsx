"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "oneclickmhstore",
    desc: "A fully functional ecommerce Website designed in figma and developed with Wordpress and Woocomerce plugin.The Power is enhaced by elementor plugin,Wp forms and many more ",
    img: "/ecommerce-project.png",
    link: "https://www.oneclickmhstore.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Watch-tower-Ai",
    desc: "Watch tower a web project is an integration of Machine learning tensor flow library which uses COCO SSD model for object detection and labeling developed in full stack web Framework Next.js and TypeScript for designing it uses Tailwind and shadcn UI.",
    img: "/whatch-tower-ai.png",
    link: "https://watch-tower-ai.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Fam-chat",
    desc: "Is a real-time chat application. Utilizing React, Tailwind, and Daisy UI for frontend, with Context API for state management and Zustand for message state. On the backend, Node.js, Express.js, and MongoDB (cloud) were used, following MVC architecture. Real-time communication via socket.io",
    img: "/fam-chat-project.png",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Git-basic-clone",
    desc: "Git-Basic-clone, build in Chakra UI and Next.js. It fetches user data, repositories, followers, and watchers, offering insights into frontend API utilization. Users receive toast notifications for updates, while concepts like hooks, useState, useEffect, fetch functions, and props are explored for a comprehensive understanding of modern web development.",
    img: "/gitproject.png",
    link: "https://git-basic-clone-next-js.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen  w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex   items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex  flex-col gap-1 text-white">
                  <h1 className="text-xl  bg-pink-400 font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
