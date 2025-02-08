'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage6() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[5]}
      onPrevious={() => router.push('/quiz/q5')}
      onNext={(answer) => {
        router.push('/quiz/q7');
      }}
    />
  );
} 