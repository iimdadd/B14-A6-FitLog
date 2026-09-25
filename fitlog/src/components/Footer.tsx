import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a0c] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
          />

          <span className="font-bold tracking-tight">
            FITLOG
          </span>
        </div>

        <p className="text-center text-sm text-white/50 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}