export default function Projects({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">

            <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-5 text-indigo-700 text-center">
                    Recent Projects
                </h2>

                {/* Project 1 */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Canteen Booking System
                    </h3>
                    <p className="text-sm text-gray-700">
                        • Full-stack mobile app for college canteen management
                        • Built using Flutter + Flask backend
                        • Integrated MySQL, REST API, Razorpay payment gateway
                    </p>
                    <a
                        href="https://github.com/Yadhu-gopakumar/smartq" target="_blank"
                        className="text-indigo-600 text-sm font-semibold mt-1 inline-block hover:underline"
                    >
                        🔗 GitHub Repository
                    </a>
                </div>

                {/* Project 2 */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Cab Booking System
                    </h3>
                    <p className="text-sm text-gray-700">
                        • Django web application for cab booking
                        • Used AJAX for smooth interactions
                        • Technologies: Django, HTML/CSS, JavaScript, Razorpay
                    </p>
                    <a
                        href="https://github.com/Yadhu-gopakumar/cabboooking" target="_blank"
                        className="text-indigo-600 text-sm font-semibold mt-1 inline-block hover:underline"
                    >
                        🔗 GitHub Repository
                    </a>
                </div>

                {/* Project 3 */}
                <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Phishing Detector Chrome Extension
                    </h3>
                    <p className="text-sm text-gray-700">
                        • Detects and blocks phishing sites using machine learning
                        • Technologies: Scikit-learn ML model, Flask backend, HTML/CSS/JS
                    </p>
                    <a
                        href="https://github.com/Yadhu-gopakumar/phishing_detector" target="_blank"
                        className="text-indigo-600 text-sm font-semibold mt-1 inline-block hover:underline"
                    >
                        🔗 GitHub Repository
                    </a>
                </div>
            </div>
        </div>
    );
}
