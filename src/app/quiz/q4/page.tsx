'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage4() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[3]}
      onPrevious={() => router.push('/quiz/q3')}
      onNext={(answer) => {
        router.push('/quiz/q5');
      }}
    />
  );
} 