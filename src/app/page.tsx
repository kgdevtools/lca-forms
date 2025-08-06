
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Chess Academy Forms</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        Welcome to the Chess Academy's forms portal. Register players, submit event info, and manage all your academy forms in one place.
      </p>
      <Link href="/forms" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">Go to Registration Forms</Link>
    </div>
  );
}
