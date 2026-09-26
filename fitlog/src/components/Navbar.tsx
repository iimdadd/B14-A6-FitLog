"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isWorkoutPage =
    pathname === "/" || pathname.startsWith("/workout/");

  const isPlanPage = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
          />

          <span className="text-xl font-bold tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-bold transition ${
              isWorkoutPage
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold transition ${
              isPlanPage
                ? "text-[#ccff00]"
                : "text-white hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-3 py-2 text-xs font-bold text-black sm:px-4"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-3 py-2 text-xs font-bold text-white sm:px-4"
          >
            Saved {saved.length}
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="border-t border-white/10 px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8">
          <Link
            href="/"
            className={`text-sm font-bold uppercase transition ${
              isWorkoutPage
                ? "text-[#ccff00]"
                : "text-white/60 hover:text-[#ccff00]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase transition ${
              isPlanPage
                ? "text-[#ccff00]"
                : "text-white/60 hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>
    </header>
  );
}