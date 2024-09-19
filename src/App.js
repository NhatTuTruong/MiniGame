import React, { useState } from 'react';
import TopicSelection from './components/TopicSelection';
import Quiz from './components/Quiz';
import { questionsData } from './data/questionsData';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = Object.keys(questionsData);

  return (
    <div className="font-fredoka min-h-screen bg-[url('https://example.com/sky-background.jpg')] bg-cover flex justify-center items-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl text-center max-w-3xl w-full">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Trò chơi câu hỏi vui</h1>
        {selectedTopic ? (
          <Quiz selectedTopic={selectedTopic} />
        ) : (
          <TopicSelection topics={topics} onSelectTopic={setSelectedTopic} />
        )}
      </div>
    </div>
  );
}

export default App;
