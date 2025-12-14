export default function Contact({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 px-3 sm:px-0">

      {/* Modal Box */}
      <div
        className="
          relative bg-white
          p-5 sm:p-8
          rounded-2xl shadow-2xl
          w-full max-w-sm sm:max-w-md
          max-h-[90vh] overflow-y-auto
        "
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg sm:text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
          Contact Me
        </h2>

        {/* Contact Form */}
        <form className="space-y-3 sm:space-y-4">

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              required
              className="input input-bordered w-full text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              required
              className="input input-bordered w-full text-sm sm:text-base"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1 text-sm sm:text-base">
              Message
            </label>
            <textarea
              required
              className="textarea textarea-bordered w-full h-24 sm:h-28 text-sm sm:text-base"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-neutral w-full text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
