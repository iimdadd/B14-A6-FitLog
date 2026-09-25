import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] px-4 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-6xl font-black sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase">
          Workout Not Found
        </h2>

        <p className="mt-3 text-white/50">
          The page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-white"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}