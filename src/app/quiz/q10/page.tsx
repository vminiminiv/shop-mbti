'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage10() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[9]}
      onPrevious={() => router.push('/quiz/q9')}
      onNext={(answer) => {
        router.push('/quiz/q11');
      }}
    />
  );
} 