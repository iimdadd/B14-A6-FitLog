import Link from "next/link";
import Hero from "@/components/Hero";
import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="bg-[#0b0d0f] text-white">
      <Hero />

      <section id="library" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold uppercase">
            The Library
          </h2>

          <p className="mt-2 text-white/60">
            Twelve lifts covering every major muscle group.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <Link
                key={workout.id}
                href={`/workout/${workout.id}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#ccff00]/50"
              >
                <img
                  src={workout.image}
                  alt={workout.name}
                  width={740}
                  height={500}
                  className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                      <span
                        key={group}
                        className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-white/60"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-bold">
                    {workout.name}
                  </h3>

                  <p className="mt-2 text-sm text-white/50">
                    {workout.equipment}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/60">
                    <span>◷ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span>★ {workout.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}