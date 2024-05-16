import React from 'react';

const Contact = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white shadow-lg overflow-hidden">
      {/* Floating logos */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        alt="Tailwind CSS Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '10%', left: '10%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '50%', left: '70%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt="Vue Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '80%', left: '10%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        alt="Bootstrap Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '30%', left: '20%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
        alt="Angular Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '80%', left: '80%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        alt="JavaScript Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '70%', left: '30%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        alt="HTML5 Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '20%', left: '80%' }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        alt="CSS3 Logo"
        className="absolute w-20 h-20 opacity-20 animate-floating"
        style={{ top: '90%', left: '90%' }}
      />

      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg z-10 animate-pulse">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
