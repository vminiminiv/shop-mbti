'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage11() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[10]}
      onPrevious={() => router.push('/quiz/q10')}
      onNext={(answer) => {
        router.push('/quiz/q12');
      }}
    />
  );
} 