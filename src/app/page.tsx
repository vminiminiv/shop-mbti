import Image from "next/image";
import ActionButtons from "./components/ActionButtons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center translate-y-[-10%] gap-16 p-24">
      <h1 className="text-5xl font-bold text-center">
        알아두면 쓸데있는{' '}
        <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 text-transparent bg-clip-text">
          쇼핑몰 MBTI
        </span>
        {' '}🤩
      </h1>
      <p className="text-gray-600 text-lg mb-2">
        내가 원하는 쇼핑몰을 상상하면서 대답해 주세요 💞
      </p>
      <ActionButtons />
    </main>
  );
}
