import React, { useState } from 'react';
import Question from './Question';
import { questionsData } from '../data/questionsData';

const Quiz = ({ selectedTopic }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const topicQuestions = questionsData[selectedTopic];
  const currentQuestion = topicQuestions[currentQuestionIndex];

  const handleAnswerSelect = (selectedAnswer) => {
    // Kiểm tra đáp án
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Nếu còn câu hỏi tiếp theo, chuyển sang câu hỏi tiếp theo
    if (currentQuestionIndex + 1 < topicQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Hiển thị kết quả sau khi trả lời hết câu hỏi
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kết quả của bạn</h2>
          <p className="text-xl">Bạn trả lời đúng {score} trên {topicQuestions.length} câu!</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
            onClick={() => window.location.reload()}
          >
            Chơi lại
          </button>
        </div>
      ) : (
        <Question questionData={currentQuestion} onAnswerSelect={handleAnswerSelect} />
      )}
    </div>
  );
};

export default Quiz;
