import React from 'react';
import imgQuestion from "../asset/images/Element map.png"

const TopicSelection = ({ topics, onSelectTopic }) => {
  return (
    <div className='font-fredoka' >
     
      <div className="grid grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => onSelectTopic(topic)}
            className="font-bold py-4 m-4 transform hover:scale-105 transition-transform"
          >
            <img src={imgQuestion} alt={imgQuestion} className="" />
            <h2 className='text-white text-2xl text-black'>{index+1}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
