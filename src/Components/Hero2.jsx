import React from 'react';
import { assets } from '../assets/as';

const Hero2 = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.bg})` }}
      ></div>

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10 justify-center py-20">
        <div className="lg:w-1/2 lg:pl-12 text-center relative">
          <h1 className="text-4xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-lg mb-8 text-white">An enthusiastic third-year undergraduate, currently pursuing a Bachelor’s in Computer Science and Engineering at Graphic Era Hill University, Dehradun Campus, I am deeply passionate about creating captivating digital experiences. Specializing in web development, I thrive on transforming concepts into reality, crafting elegant user interfaces and robust backend systems. Proficient in a diverse array of technologies, including the MERN stack (MongoDB, Express, React, Node), as well as frameworks and libraries such as Clerk, Hugo, Three.js, Bootstrap, WebRTC, and Stream, I am dedicated to continual learning through workshops and hands-on projects. Committed to excellence, I actively engage in recreating various websites, honing my skills in both front-end and back-end development. With each endeavor, my goal is to surpass boundaries, deliver impactful solutions, and make meaningful contributions to the ever-evolving field of development.</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Contact me</button>
          {/* Planet Image */}
          <img src={assets.planet} alt="Planet" className="absolute top-0 right-0 w-36 h-36 animate-pulse" style={{ transform: 'translate(200%, -20%)' }} />
        </div>
      </div>
    </div>
  );
}

export default Hero2;
