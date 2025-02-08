'use client';

import { useRouter } from "next/navigation";

export default function ActionButtons() {
  const router = useRouter();

  return (
    <div className="flex justify-center w-full">
      <button
        className="rounded-full px-12 sm:px-14 border-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-white transition-all flex items-center justify-center hover:opacity-90 hover:scale-105 text-lg sm:text-xl h-14 sm:h-16 font-bold shadow-lg"
        onClick={() => router.push('/quiz')}
      >
        TEST START ▶︎
      </button>
    </div>
  );
} 