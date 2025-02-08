'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage5() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[4]}
      onPrevious={() => router.push('/quiz/q4')}
      onNext={(answer) => {
        router.push('/quiz/q6');
      }}
    />
  );
} 