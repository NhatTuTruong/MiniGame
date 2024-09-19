import React from 'react';

const Question = ({ questionData, onAnswerSelect }) => {
  const labels = [
		{ text: 'A', color: 'text-green-400', positon:'top-[0%]'},
		{ text: 'B', color: 'text-yellow-400',positon:'top-[0%]'},
		{ text: 'C', color: 'text-red-400',positon:'top-[100%]'},
		{ text: 'D', color: 'text-blue-400',positon:'top-[100%]'},
	]
	
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{questionData.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(option)}  
            className="relative  bg-transparent bg-opacity-60 border-2 border-blue-200 rounded-xl px-6 py-10 shadow-lg text-left text-xl font-bold hover:bg-opacity-80 transition-transform transform hover:scale-105"
          >
            <span className={`${labels[index].color} text-[40px] absolute ${labels[index].positon} left-[50%] transform translate-x-[-50%] translate-y-[-50%]  text-white p-2 rounded-full text-2xl`}>
              {labels[index].text}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
