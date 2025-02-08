'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';
import { Answers } from '../../types/quiz';

// localStorage에서 이전 답변들을 가져오는 함수
const getStoredAnswers = (): Answers => {
  if (typeof window === 'undefined') return {};
  const stored = localStorage.getItem('quizAnswers');
  return stored ? JSON.parse(stored) : {};
};

export default function QuizPage12() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[11]}
      onPrevious={() => router.push('/quiz/q11')}
      onNext={(answer) => {
        const answers = getStoredAnswers();
        answers[12] = answer;
        
        // URL 파라미터로 답변을 전달
        const answersParam = encodeURIComponent(JSON.stringify(answers));
        router.push(`/quiz/result?answers=${answersParam}`);
        
        // localStorage 초기화
        localStorage.removeItem('quizAnswers');
      }}
    />
  );
} 