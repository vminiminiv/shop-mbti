'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage3() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[2]}
      onPrevious={() => router.push('/quiz/q2')}
      onNext={(answer) => {
        router.push('/quiz/q4');
      }}
    />
  );
} 