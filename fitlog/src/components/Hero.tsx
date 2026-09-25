import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#0b0d0f] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-white"
          >
            Browse Workouts →
          </Link>
        </div>

        {/* Banner */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/banner.png"
            alt="FitLog workout banner"
            width={1200}
            height={800}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}