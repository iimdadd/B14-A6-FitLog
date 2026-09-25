export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d0f] text-white">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#ccff00]" />

        <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/60">
          Loading workout...
        </p>
      </div>
    </main>
  );
}