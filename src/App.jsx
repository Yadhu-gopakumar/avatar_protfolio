
import { useState } from "react";
import imgDefault from "./assets/ff.png";
import imgTL from "./assets/lu.png";
import imgTR from "./assets/ru.png";
import imgBL from "./assets/ld.png";
import imgBR from "./assets/rd.png";
import Contact from "./compenents/Contact";
import About from "./compenents/About";
import Projects from "./compenents/Projects";

export default function App() {
  const [active, setActive] = useState("default");
  const [modalName, setModalName] = useState(null);

  function openModal(name) {
    setModalName(name);
  }

  function closeModal() {
    setModalName(null);
  }

  const images = {
    default: imgDefault,
    tl: imgTL,
    tr: imgTR,
    bl: imgBL,
    br: imgBR,
  };

  return (
    <div className="relative h-screen w-screen" style={{ backgroundColor: "#fafaf8" }}>
      {/* TOP LEFT */}
      <div className="grid grid-cols-2 grid-rows-2 h-full w-full absolute inset-0 z-10" >
        <div
          onMouseEnter={() => setActive("tl")}
        >
          <button className="btn btn-neutral btn-outline absolute left-20 top-15 px-10 py-5 w-40" onClick={() => openModal("projects")}
          >Projects</button>
        </div>
        {/* TOP LEFT */}

        {/* TOP RIGHT */}
        <div
          onMouseEnter={() => setActive("tr")}
        >
          <button className="btn btn-neutral btn-outline absolute right-20 top-15 px-10 py-5 w-40" onClick={() => openModal("about")}
          >About</button>
        </div>
        {/* TOP RIGHT */}

        {/* BOTTOM LEFT */}
        <div
          onMouseEnter={() => setActive("bl")}>
          <button className="btn btn-neutral btn-outline absolute left-20 bottom-15 px-10 py-5 w-40" onClick={() => openModal("contact")}
          >Contact</button>

        </div>
        {/* BOTTOM LEFT */}

        {/* BOTTOM RIGHT */}
        <div onMouseEnter={() => setActive("br")}>
  <button
    className="btn btn-neutral btn-outline absolute right-20 bottom-15 px-10 py-5 w-40"
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

        {/* BOTTOM RIGHT */}

      </div>


      <div
        className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-130 h-130 
          z-20
        "
        onMouseEnter={() => setActive("default")}
      >
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

        <img
          src={images[active]}
          className="w-80 h-90 object-cover transition-all duration-300"
        />


        <p class="text-7xl font-bold text-slate-800">
          <span class="relative">
            <span class="absolute h-12 rounded-full bg-indigo-400/80 left-2/4 -translate-x-2/4 top-2/4 -translate-y-2/4 w-36 blur-2xl animate-pulse" aria-hidden="true"></span>
            <span>Yadhu Gopakumar</span>
          </span>
        </p>
        <p className="text-2xl opacity-70  font-bold text-black mt-3">
          Software Developer

        </p>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-green-600">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-red-600">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-blue-600">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>





      </div>
      {modalName === "projects" && <Projects onClose={closeModal} />}
      {modalName === "about" && <About onClose={closeModal} />}
      {modalName === "contact" && <Contact onClose={closeModal} />}



    </div>
  );
}