
export default function Projects({ onClose }) {
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
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-indigo-700 text-center">
            Recent Projects
          </h2>
  
          {/* Project 1 */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Canteen Booking System
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              • Full-stack mobile app for college canteen management<br />
              • Built using Flutter + Flask backend<br />
              • Integrated MySQL, REST API, Razorpay payment gateway
            </p>
            <a
              href="https://github.com/Yadhu-gopakumar/smartq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-xs sm:text-sm font-semibold mt-1 inline-block hover:underline"
            >
              🔗 GitHub Repository
            </a>
          </div>
  
          {/* Project 2 */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Cab Booking System
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              • Django web application for cab booking<br />
              • Used AJAX for smooth interactions<br />
              • Technologies: Django, HTML/CSS, JavaScript, Razorpay
            </p>
            <a
              href="https://github.com/Yadhu-gopakumar/cabboooking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-xs sm:text-sm font-semibold mt-1 inline-block hover:underline"
            >
              🔗 GitHub Repository
            </a>
          </div>
  
          {/* Project 3 */}
          <div className="mb-1">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Phishing Detector Chrome Extension
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              • Detects and blocks phishing sites using machine learning<br />
              • Technologies: Scikit-learn, Flask, HTML/CSS/JS
            </p>
            <a
              href="https://github.com/Yadhu-gopakumar/phishing_detector"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-xs sm:text-sm font-semibold mt-1 inline-block hover:underline"
            >
              🔗 GitHub Repository
            </a>
          </div>
  
        </div>
      </div>
    );
  }
  