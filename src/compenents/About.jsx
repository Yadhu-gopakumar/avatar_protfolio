export default function About({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 px-3 sm:px-0">

      <div
        className="
          relative bg-white
          p-5 sm:p-8
          rounded-2xl shadow-2xl
          w-full max-w-sm sm:max-w-md
          max-h-[90vh] overflow-y-auto
        "
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg sm:text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-indigo-700 text-center">
          About Me
        </h2>

        {/* About Text */}
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
          I'm <span className="font-semibold">Yadhu Gopakumar</span>, a
          <span className="font-semibold"> Fullstack Developer</span> specializing in
          <span className="font-semibold"> Python Django</span> full-stack applications.
          Beyond work, I enjoy building and hosting open-source projects.
          I'm also a drawing artist and illustrator.
          <br />
          Let's explore the possibilities and create something remarkable together!
        </p>

        {/* Skills */}
        <h3 className="text-base sm:text-lg font-semibold text-indigo-600 mb-2">
          Technical Skills
        </h3>

        <div className="mb-1">
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            Frontend Development
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            React, HTML/CSS, Bootstrap, JavaScript, Jinja2
          </p>
        </div>

        <div className="mb-1">
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            Backend Development
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Django, PHP, MySQL, SQLite, MongoDB
          </p>
        </div>

        <div className="mb-1">
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            Application Development
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Dart, Flutter
          </p>
        </div>

        <div className="mb-2 sm:mb-4">
          <p className="font-medium text-gray-800 text-sm sm:text-base">
            Programming Languages
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            Python, C, C++, Java
          </p>
        </div>

      </div>
    </div>
  );
}
