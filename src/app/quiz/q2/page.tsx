'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage2() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[1]}
      onPrevious={() => router.push('/quiz')}
      onNext={(answer) => {
        router.push('/quiz/q3');
      }}
    />
  );
} 