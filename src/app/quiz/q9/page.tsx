'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage9() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[8]}
      onPrevious={() => router.push('/quiz/q8')}
      onNext={(answer) => {
        router.push('/quiz/q10');
      }}
    />
  );
} 