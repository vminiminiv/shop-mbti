'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../../components/QuizQuestion';
import { questions } from '../../data/questions';

export default function QuizPage7() {
  const router = useRouter();

  return (
    <QuizQuestion
      question={questions[6]}
      onPrevious={() => router.push('/quiz/q6')}
      onNext={(answer) => {
        router.push('/quiz/q8');
      }}
    />
  );
} 