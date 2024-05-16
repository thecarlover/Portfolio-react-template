import React from 'react';

const Skill = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fab fa-react text-blue-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">React.js</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fab fa-js text-yellow-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">JavaScript (ES6+)</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Astro Js</span>
        </div>
        {/* Add more skills here */}
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Next Js</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Git</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Github</span>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Hugo</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">PHP</span>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
          <i className="fas fa-database text-purple-500 text-5xl mr-4"></i>
          <span className="text-xl font-semibold">Node</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
