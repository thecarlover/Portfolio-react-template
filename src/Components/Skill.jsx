import React from 'react';
import { assets } from '../assets/as';

const Skill = () => {
  return (
    <div className="p-44 shadow-md relative overflow-hidden" style={{ backgroundImage: `url(${assets.con})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {/* React.js */}
        <div className="px-6 py-6 flex items-center justify-center mx-auto bg-white rounded-full">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React.js Logo" className="h-10 w-10" />
        </div>

        {/* JavaScript (ES6+) */}
        <div className="px-6 py-6 flex items-center justify-center mx-auto rounded-full bg-white">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" className="h-12 w-12" />
        </div>

        {/* Astro Js */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2023/11/Astro-WP-11140223.png?fit=600%2C315&ssl=1" alt="Astro Js Logo" className="h-12 w-12" />
        </div>

        {/* Next Js */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next Js Logo" className="h-12 w-12" />
        </div>

        {/* Git */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git Logo" className="h-12 w-12" />
        </div>

        {/* Github */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github Logo" className="h-12 w-12" style={{ filter: 'invert(1)' }} />
        </div>

        {/* Hugo */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzKqADAEW-bLPZ2RuTdV_jFOMkIshG4-Z1n8T-354bQ&s" alt="Hugo Logo" className="h-12 w-12" />
        </div>

        {/* PHP */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP Logo" className="h-12 w-12" />
        </div>

        {/* Node */}
        <div className="p-6 flex items-center justify-center mx-auto">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
}

export default Skill;
