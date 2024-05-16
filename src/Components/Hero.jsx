import React from 'react';
import { assets } from '../assets/as';


const Hero = () => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundImage: `url(${assets.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-15 text-white py-32 text-center relative">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Hi I am Ojasvi Mittal from <span className='animate-pulse'>🇮🇳</span></h1>
          <p className="text-lg mb-8">I am FullStack Developer</p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded-full hover:bg-blue-100 hover:text-blue-900 transition duration-300">Learn More</button>
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={assets.astro} alt="Astronaut" className="w-60 h-60 animate-bounce ml-20" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
