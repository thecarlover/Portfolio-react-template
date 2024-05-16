import React, { useState } from 'react';

const Calcy = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator bg-red-100 p-3 rounded-lg shadow-md">
      <input
        type="text"
        value={input}
        readOnly
        className="bg-white text-gray-800 border border-gray-300 rounded-md p-2 mb-2 w-full"
      />


      <input
        type="text"
        value={result}
        readOnly
        className="bg-white text-gray-800 border border-gray-300 rounded-md p-2 mb-4 w-full"
      />


      <div className="keypad grid grid-cols-4 gap-2">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '=', '/'].map((item) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => handleClick('C')}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md col-span-4"
        >
          C
        </button>
      </div>
    </div>
  );
};

export default Calcy;
