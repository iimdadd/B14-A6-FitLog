import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={32}
            height={32}
          />

          <span className="text-xl font-bold tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-medium text-white transition hover:text-[#ccff00]"
          >
            My Plan
          </Link>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold text-black"
          >
            Plan 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-bold text-white"
          >
            Saved 0
          </Link>
        </div>
      </nav>
    </header>
  );
}