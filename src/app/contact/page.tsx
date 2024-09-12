import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-lg p-8 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
