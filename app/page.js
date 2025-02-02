"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const helpRef = useRef(null);
  const carouselItems = [
    "/html.png",
    "/css.webp",
    "/nextjs.png",
    "/python.png",
    "/node.png",
    "/react.png",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const headings = [
    "GYM Workout Apllication",
    "Inventory Management",
    "Password Manager Application",
    "URL Shortener",
    "To Do List",
  ];
  const imagess = [
    "/gym.webp",
    "/Inventory.png",
    "/Password_Manager.webp",
    "/URLshortener.jpeg",
    "/todo.jpg",
  ];
  const color = [
    "bg-green-400",
    "bg-pink-400",
    "bg-yellow-400",
    "bg-red-400",
    "bg-blue-400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showbox, setShowbox] = useState(false);

  
  useEffect(() => {
    let interval;
  
    if (isHovering) {
      setShowbox(true);
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
      }, 400);
    } else {
      setShowbox(false);
      clearInterval(interval);
    }
  
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isHovering, headings.length]); 

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white">
      <nav className="w-full bg-gradient-to-r from-slate-800 to-slate-950 flex flex-col sm:flex-row justify-between px-10 items-center py-2">
        <div>
          <h1 className="text-3xl font-bold text-blue-500">Rishabh</h1>
        </div>
        <ul className="flex gap-6">
          <Link href="">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
          </Link>
          <Link href="#project">
            <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          </Link>
          <Link href="#education">
            <li className="hover:text-blue-400 cursor-pointer">Education</li>
          </Link>
          <Link href="#about">
            <li className="hover:text-blue-400 cursor-pointer">About</li>
          </Link>
        </ul>
      </nav>
      <div className="min-h-[93vh]">
        <section className="home text-white bg-gradient-to-r from-slate-800 to-slate-950">
          <div className="home-img">
            <div className="border border-yellow rounded-full p-3 bg-yellow-300">
              <Image
                className=""
                src="/picofme.png"
                alt="Rishabh"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="home-content">
            <h1>
              Hi, It&apos;s <span>Rishabh</span>
            </h1>
            <h3 className="typing-text">
              I&apos;m a{" "}
              <span
                className="cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              ></span>
            </h3>
            <p className="text-lg">
              Final-year B.C.A student specializing in MERN stack, Next.js, and
              Python, driven by a passion for crafting innovative web
              applications and AI-powered solutions. With a focus on creating
              seamless user experiences and integrating cutting-edge
              technologies, I aim to deliver impactful and scalable projects
              that solve real-world challenges.
            </p>
            <div className="social-icons">
              <Link
                className="border border-solid border-green-500"
                href="https://www.linkedin.com/in/rishabh-tiwari-291933231"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin text-gray-300 text-3xl"></i>
              </Link>
              <Link
                className="border border-solid border-green-500"
                href="https://github.com/rishabhtiwari-06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github text-gray-200 text-3xl"></i>
              </Link>

              {/* Email */}
              <Link
                className="border border-solid border-green-500"
                href="mailto:rishabhshyam0602@gmail.com"
              >
                <i className="fa-solid fa-envelope text-gray-300 text-3xl"></i>
              </Link>
            </div>
            <Link
              href="#project"
              // onClick={() => setShowsection1(true)}
              className="bg-slate-900 btn hover:bg-slate-800 m-2"
            >
              Start My Journey
            </Link>
            {showbox && (
              <div className="absolute right-[130px] bottom-[150px]">
                <Link
                  href="#"
                  className={`block h-[350px] w-[300px] overflow-hidden max-w-sm p-4 ${color[currentIndex]} border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:${color[currentIndex]} dark:border-gray-700 dark:hover:bg-gray-700 transform skew-x-12`}
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {headings[currentIndex]}
                  </h5>
                  <Image
                    className="h-[250px] w-[250px] rounded-lg object-contain"
                    src={imagess[currentIndex]}
                    alt="Image"
                    width={250}
                    height={250}
                  />
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>

      <section
        id="project"
        ref={helpRef}
        className="min-h-screen w-full flex flex-col "
      >
        <div className=" w-full bg-gray-800 flex justify-center items-center mb-4">
          <h1 className="text-4xl font-bold py-2 ">
            PRO<span className="text-blue-500">JECTS</span>
          </h1>
        </div>

        <div className="banner">
          <div className="slider" style={{ "--quantity": 7 }}>
            <div className="item cursor-pointer" style={{ "--position": 1 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/login-form"
              >
                <h3 className="text-xl">Login Form</h3>
                <Image
                  src="/login.jpg"
                  alt="Login Form"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 2 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/Inventory_Management_System"
              >
                <h3>Inventory Management</h3>
                <Image
                  src="/Inventory.png"
                  alt="Inventory Management"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 3 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/Gym-Workout-Generator-Website"
              >
                <h3>GYM Workout</h3>
                <Image
                  src="/gym.webp"
                  alt="GYM Workout"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 4 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/Password-Manager-Application"
              >
                <h3>Password Manager Application</h3>
                <Image
                  src="/Password_Manager.webp"
                  alt="Password Manager"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 5 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/Simple-url-shortner"
              >
                <h3>URL shortener</h3>
                <Image
                  src="/URLshortener.jpeg"
                  alt="URL Shortener"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 6 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/Gym-Workout-Generator-Website"
              >
                <h3>Login Form</h3>
                <Image
                  src="/login.jpg"
                  alt="Login Form"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
            <div className="item cursor-pointer" style={{ "--position": 7 }}>
              <Link
                target="_blank"
                href="https://github.com/rishabhtiwari-06/To-Do-List"
              >
                <h3>ToDo List</h3>
                <Image
                  src="/todo.jpg"
                  alt="ToDo List"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="min-h-screen flex flex-col gap-6">
        <div className=" w-full bg-gray-800 flex justify-center items-center mb-8 p-1">
          <h1 className=" text-4xl font-bold m-1">
            EDUCA<span className="text-blue-500">TION</span>
          </h1>
        </div>
        <div className="view w-full flex gap-12 flex-col justify-center items-center mt-1">
          <div className="block border rounded-2xl border-blue-600 bg-slate-950 min-h-[200px] w-2/3 flex flex-col sm:grid sm:grid-cols-3 items-center">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-3xl ">
                <span className="text-blue-500">SCH</span>OOL
              </h1>
            </div>
            <div>
              <Image
                className="h-[170px] w-[170] object-cover rounded-full"
                src="/Schl.webp"
                alt="School Image"
                width={170}
                height={170}
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                <span className="text-blue-500">Name:</span> RPM Inter College
              </h2>
              <p className="text-xl sm:text-2xl font-semibold">
                <span className="text-blue-500">Percentage:</span> 79%
              </p>
              <p className="text-xl sm:text-2xl font-semibold">
                <span className="text-blue-500">Year:</span> 2021-2022
              </p>
            </div>
          </div>
          <div className=" rounded-2xl border border-blue-600 bg-slate-950 min-h-[200px] w-2/3 flex flex-col sm:grid sm:grid-cols-3 items-center">
            <div className="flex justify-center">
              <h1 className="font-bold text-3xl ">
                <span className="text-blue-500">COL</span>LEGE
              </h1>
            </div>
            <div>
              <Image
                className="h-[170px] w-[250px] object-contain rounded-lg"
                src="/JAGRAN.png"
                alt="Jagran College Logo"
                width={250}
                height={170}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                <span className="text-blue-500">Name:</span> Jagran College
              </h2>
              <p className="text-2xl font-semibold">
                <span className="text-blue-500">CGPA:</span> 8
              </p>
              <p className="text-2xl font-semibold">
                <span className="text-blue-500">Year:</span> 2022-2025
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Hey there! I&apos;m <span className="text-blue-500">Rishabh Tiwari</span>
            , a passionate developer skilled in MERN stack, Python, and more. I
            love building intuitive and animated web experiences!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/picofme.png"
                alt="Rishabh Tiwari"
                width={288}
                height={288}
                className="rounded-full border-4 border-blue-500"
              />
            </motion.div>
            <h2 className="text-2xl font-semibold mt-4">Who Am I?</h2>
            <p className="text-center text-gray-300 mt-2">
              I&apos;m a final-year B.C.A student with a strong passion for
              technology. I specialize in creating dynamic websites that are
              both visually appealing and functional. I&apos;m driven by the desire
              to build meaningful solutions that solve real-world problems,
              blending creativity with technical expertise to deliver impactful
              results. Whether it's front-end design or back-end development, I
              love tackling challenges and bringing ideas to life through
              technology 🚀
            </p>
          </div>

          <div id="default-carousel" className="relative w-full">
            {/* Carousel wrapper */}
            <div className="flex justify-center py-8 mb-2">
              <h1 className="text-3xl text-blue-500 font-bold">Skills</h1>
            </div>
            <div className="relative h-32 overflow-hidden rounded-lg md:h-32 flex justify-center items-center">
              {carouselItems.map((src, index) => (
                <div
                  key={index}
                  className={`absolute w-1/4 h-full transition-opacity duration-[1000ms] ease-in-out ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    width={128}
                    height={128}
                    className="block w-full h-full object-contain rounded-xl"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-32 left-1/2 space-x-3 rtl:space-x-reverse">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-2 h-2 rounded-full ${
                    index === activeIndex ? "bg-white" : "bg-gray-800"
                  }`}
                  onClick={() => handleIndicatorClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
