export default function About({ onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
  
        <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
  
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
          >
            ✕
          </button>
  
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 text-center">
            About Me
          </h2>
  
          <p className="text-gray-800 leading-relaxed mb-5">
            I'm <span className="font-semibold">Yadhu Gopakumar</span>, a
            <span className="font-semibold"> Fullstack Developer</span> specializing in
            <span className="font-semibold"> Python Django</span> full-stack applications.
            Beyond work, I enjoy building and hosting open-source projects.
            I'm also a drawing artist and illustrator.
            <br />
            Let's explore the possibilities and create something remarkable together!
          </p>
  
         
  
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">Technical Skills</h3>
  
          <div className="mb-1">
            <p className="font-medium text-gray-800">Frontend Development</p>
            <p className="text-gray-700 text-sm">
              React, HTML/CSS, Bootstrap, JavaScript, Jinja2
            </p>
          </div>
  
          <div className="mb-1">
            <p className="font-medium text-gray-800">Backend Development</p>
            <p className="text-gray-700 text-sm">
              Django, PHP, MySQL, SQLite, MongoDB
            </p>
          </div>
  
          <div className="mb-1">
            <p className="font-medium text-gray-800">Application Development</p>
            <p className="text-gray-700 text-sm">
              Dart, Flutter
            </p>
          </div>
  
          <div className="mb-4">
            <p className="font-medium text-gray-800">Programming Languages</p>
            <p className="text-gray-700 text-sm">
              Python, C, C++, Java
            </p>
          </div>
  
        
  
        </div>
  
      </div>
    );
  }
  