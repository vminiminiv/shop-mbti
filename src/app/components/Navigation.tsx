

export default function Navigation() {
  return (
    <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
      <li className="mb-2">
        어려워{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          src/app/page.tsx
        </code>
        .
      </li>
      <li>흐미뭐쥬</li>
    </ol>
  );
} 