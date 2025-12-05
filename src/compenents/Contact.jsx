export default function Contact({ onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
        
        {/* Modal Box */}
        <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          
          {/* CLOSE BUTTON (X) */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
  
          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 text-center">
            Contact Me
          </h2>
  
          {/* Contact Form */}
          <form className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                required
                className="input input-bordered w-full"
                placeholder="Your name"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                className="input input-bordered w-full"
                placeholder="you@example.com"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                required
                className="textarea textarea-bordered w-full h-28"
                placeholder="Write your message..."
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-neutral w-full"
            >
              Send Message
            </button>
          </form>
  
        </div>
  
      </div>
    );
  }
  