
import { useState } from "react";
import imgDefault from "./assets/ff.png";
import imgTL from "./assets/lu.png";
import imgTR from "./assets/ru.png";
import imgBL from "./assets/ld.png";
import imgBR from "./assets/rd.png";
import Contact from "./compenents/Contact";
import About from "./compenents/About";
import Projects from "./compenents/Projects";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function App() {
  const [active, setActive] = useState("default");
  const [modalName, setModalName] = useState(null);

  const images = {
    default: imgDefault,
    tl: imgTL,
    tr: imgTR,
    bl: imgBL,
    br: imgBR,
  };

  return (
    <div className="relative h-screen w-screen bg-[#fafaf8] overflow-hidden">

      {/* GRID */}
      <div className="grid grid-cols-2 grid-rows-2 h-full w-full absolute inset-0 z-10">

        {/* TOP LEFT */}
        <div onMouseEnter={() => setActive("tl")}>
          <button
            className="
              btn btn-neutral btn-outline
              absolute left-6 sm:left-20 top-6 sm:top-15
              px-4 sm:px-8 py-3 sm:py-5
              w-32 sm:w-40
              text-sm sm:text-base
            "
            onClick={() => setModalName("projects")}
          >
            Projects
          </button>
        </div>

        {/* TOP RIGHT */}
        <div onMouseEnter={() => setActive("tr")}>
          <button
            className="
              btn btn-neutral btn-outline
              absolute right-6 sm:right-20 top-6 sm:top-15
              px-4 sm:px-8 py-3 sm:py-5
              w-32 sm:w-40
              text-sm sm:text-base
            "
            onClick={() => setModalName("about")}
          >
            About
          </button>
        </div>

        {/* BOTTOM LEFT */}
        <div onMouseEnter={() => setActive("bl")}>
          <button
            className="
              btn btn-neutral btn-outline
              absolute left-6 sm:left-20 bottom-6 sm:bottom-15
              px-4 sm:px-8 py-3 sm:py-5
              w-32 sm:w-40
              text-sm sm:text-base
            "
            onClick={() => setModalName("contact")}
          >
            Contact
          </button>
        </div>

        {/* BOTTOM RIGHT */}
        <div onMouseEnter={() => setActive("br")}>
          <button
            className="
              btn btn-neutral btn-outline
              absolute right-6 sm:right-20 bottom-6 sm:bottom-15
              px-4 sm:px-8 py-3 sm:py-5
              w-32 sm:w-40
              text-sm sm:text-base
            "
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=16yM_YvSTrpPaobrr6k9h-U7ci58ZPwnr",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            My Resume
          </button>
        </div>
      </div>

      {/* CENTER IMAGE + TEXT */}

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
        <div
          className="
    absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-80 h-80
    sm:w-130 sm:h-130
    z-30
    pointer-events-auto
  "
          onMouseEnter={() => setActive("default")}
        ></div>

        <img
          src={images[active]}
          className="
    w-56 h-56
    sm:w-96 sm:h-[22rem]
    object-contain
    transition-all duration-300
  "
          alt=""
        />


        <p className="font-bold text-slate-800 mt-4">
          <span className="relative">
            <span
              className="
                absolute
                h-8 sm:h-12
                w-24 sm:w-36
                bg-indigo-400/80
                rounded-full
                blur-2xl
                animate-pulse
                left-1/2 -translate-x-1/2
                top-1/2 -translate-y-1/2
              "
            ></span>
            <span className="relative text-3xl sm:text-7xl">
              Yadhu Gopakumar
            </span>
          </span>

        </p>

        <p className="text-base sm:text-2xl opacity-70 font-bold mt-2">
          Software Developer
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 z-50">

          <a
            href="https://www.facebook.com/yadhu.gopakumar.9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
      flex items-center justify-center
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full
      bg-[#1877F2] text-white
      transition-all duration-300
      hover:-translate-y-1 hover:scale-110
      hover:shadow-xl
      cursor-pointer
    "
            >
              <FaFacebookF className="text-lg sm:text-xl" />
            </div>
          </a>

          <a
            href="https://wa.me/918590659295"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
      flex items-center justify-center
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full
      bg-[#25D366] text-white
      transition-all duration-300
      hover:-translate-y-1 hover:scale-110
      hover:shadow-xl
      cursor-pointer
    "
            >
              <FaWhatsapp className="text-lg sm:text-xl" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/yadhu-gopakumar-40a97520a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
      flex items-center justify-center
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full
      bg-[#0A66C2] text-white
      transition-all duration-300
      hover:-translate-y-1 hover:scale-110
      hover:shadow-xl
      cursor-pointer
    "
            >
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </div>
          </a>

          <a
            href="https://www.instagram.com/yadh_u____/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className="
      flex items-center justify-center
      w-12 h-12 sm:w-14 sm:h-14
      rounded-full
      bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500
      text-white
      transition-all duration-300
      hover:-translate-y-1 hover:scale-110
      hover:shadow-xl
      cursor-pointer
    "
            >
              <FaInstagram className="text-lg sm:text-xl" />
            </div>
          </a>


        </div>

      </div>

      {modalName === "projects" && <Projects onClose={() => setModalName(null)} />}
      {modalName === "about" && <About onClose={() => setModalName(null)} />}
      {modalName === "contact" && <Contact onClose={() => setModalName(null)} />}
    </div >
  );
}
