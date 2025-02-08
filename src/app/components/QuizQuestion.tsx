'use client';

import { useState } from 'react';
import { Question } from '../data/questions';

type QuizQuestionProps = {
  question: Question;
  onPrevious: () => void;
  onNext: (answer: 'A' | 'B') => void;
};

export default function QuizQuestion({ question, onPrevious, onNext }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);

  const handleAnswerSelect = (answer: 'A' | 'B') => {
    setSelectedAnswer(answer);
    
    // localStorage에 답변 저장
    const stored = localStorage.getItem('quizAnswers');
    const answers = stored ? JSON.parse(stored) : {};
    answers[question.id] = answer;
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  };

  return (
    <div className="min-h-screen p-8">
      <div className="mb-16">
        <h2 className="text-xl font-bold">
          알아두면 쓸데있는 쇼핑몰 MBTI 🤩
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold">Q{question.id}.</h2>
              <p className="text-xl font-bold">{question.text}</p>
            </div>
            <div className="space-y-4">
              <button 
                className={`w-full p-4 text-left border rounded-lg transition-colors ${
                  selectedAnswer === 'A' 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'hover:bg-blue-50'
                }`}
                onClick={() => handleAnswerSelect('A')}
              >
                <span className="font-semibold text-blue-600">가.</span> {question.options.A}
              </button>
              <button 
                className={`w-full p-4 text-left border rounded-lg transition-colors ${
                  selectedAnswer === 'B' 
                    ? 'bg-blue-100 border-blue-500' 
                    : 'hover:bg-blue-50'
                }`}
                onClick={() => handleAnswerSelect('B')}
              >
                <span className="font-semibold text-blue-600">나.</span> {question.options.B}
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <button 
              className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
              onClick={onPrevious}
            >
              이전
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedAnswer 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-gray-200 cursor-not-allowed'
              }`}
              disabled={!selectedAnswer}
              onClick={() => selectedAnswer && onNext(selectedAnswer)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 