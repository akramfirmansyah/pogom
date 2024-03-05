import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">Pokemon Go Manager</h1>
      <Link href="/dashboard" className="text-2xl font-semibold underline">
        Dashboard
      </Link>
    </main>
  );
}
