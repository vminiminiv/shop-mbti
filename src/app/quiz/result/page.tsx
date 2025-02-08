'use client';

import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { calculateMBTI } from '../../utils/calculateMBTI';
import { mbtiDescriptions } from '../../data/mbtiDescriptions';
import { Answers } from '../../types/quiz';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get('answers');
  const answers: Answers = answersParam ? JSON.parse(answersParam) : {};

  const mbti = calculateMBTI(answers);
  const description = mbtiDescriptions[mbti];

  const router = useRouter();
  const handleStoreClick = () => {
    window.open('https://store.cafe24.com', '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {description.title}
        </h2>
        <div className="text-xl font-bold text-gray-800 mb-6">
          {description.catchphrase}
        </div>
        <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
          {mbti} {description.emoji}
        </div>
        {description.imageUrl && (
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Image
              src={description.imageUrl}
              alt={`${mbti} 캐릭터`}
              fill
              className="object-contain"
            />
          </div>
        )}

        {description.recommendedProducts && (
          <>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
              내 쇼핑몰은 이 앱과 찰떡 궁합!!
            </h3>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {description.recommendedProducts.map((product: { url: string; name: string }, index: number) => (
                <a
                  key={index}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2 text-white rounded-full hover:opacity-90 transition-opacity ${
                    index === 0 
                      ? 'bg-gradient-to-r from-green-400 to-green-600'
                      : index === 1
                      ? 'bg-gradient-to-r from-orange-400 to-orange-600'
                      : 'bg-gradient-to-r from-purple-400 to-purple-600'
                  }`}
                >
                  {product.name}
                </a>
              ))}
            </div>
          </>
        )}

        <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left whitespace-pre-line">
          {description.description}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
          >
            처음으로 돌아가기
          </button>
          <button
            onClick={handleStoreClick}
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            카페24 앱스토어 바로가기
          </button>
        </div>
      </div>
    </div>
  );
} 