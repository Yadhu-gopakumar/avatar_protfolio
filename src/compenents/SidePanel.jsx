import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function SlidePanel({ open, side = "left", panel }) {
  const position = side === "left" ? "left-0" : "right-0";
  const move = side === "left"
    ? open ? "translate-x-0" : "-translate-x-full"
    : open ? "translate-x-0" : "translate-x-full";

  return (
    <div
      className={`fixed top-0 h-full w-64 bg-white shadow-xl p-5 
        transition-transform duration-300 z-50 ${position} ${move}`}
    >
      {panel === "about" && <About />}
      {panel === "projects" && <Projects />}
      {panel === "contact" && <Contact />}
      {panel === "resume" && <Contact />}
    </div>
  );
}
