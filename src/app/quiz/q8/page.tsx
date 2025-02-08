'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage8() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[7]}
      onPrevious={() => router.push('/quiz/q7')}
      onNext={(answer) => {
        router.push('/quiz/q9');
      }}
    />
  );
} 