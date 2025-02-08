'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { mbtiDescriptions } from '../data/mbtiDescriptions';

function ResultContent() {
  const searchParams = useSearchParams();
  const mbtiType = searchParams.get('type') || 'ENFP';
  const mbtiResult = mbtiDescriptions[mbtiType];

  if (!mbtiResult) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
        {mbtiResult.title} {mbtiResult.emoji}
      </h1>
      <h2 className="text-xl text-gray-600 mb-8">{mbtiResult.subtitle}</h2>
      <p className="text-2xl font-bold mb-8 text-center">
        {mbtiResult.catchphrase}
      </p>

      {mbtiResult && mbtiResult.recommendedProducts && (
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {mbtiResult.recommendedProducts.map((product: { url: string; name: string }, index: number) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              {product.name}
            </a>
          ))}
        </div>
      )}

      <div className="whitespace-pre-line text-gray-600">
        {mbtiResult.description}
      </div>
    </div>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}