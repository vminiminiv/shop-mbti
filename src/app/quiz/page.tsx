'use client';

import { useRouter } from 'next/navigation';
import QuizQuestion from '../components/QuizQuestion';  // 상대 경로로 변경
import { questions } from '../data/questions';  // 상대 경로로 변경

export default function QuizPage() {
  const router = useRouter();

  // questions 배열에서 id가 1인 질문 찾기
  const firstQuestion = questions.find(q => q.id === 1);

  if (!firstQuestion) {
    return <div>질문을 찾을 수 없습니다.</div>;
  }

  return (
    <QuizQuestion
      question={firstQuestion}
      onPrevious={() => router.push('/')}
      onNext={(_answer: 'A' | 'B') => {
        router.push('/quiz/q2');
      }}
    />
  );
}