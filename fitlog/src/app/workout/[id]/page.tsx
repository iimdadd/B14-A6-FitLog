
import Image from "next/image";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0b0d0f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            {workout.difficulty}
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-6 leading-7 text-white/60">
            {workout.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Equipment</p>
              <p className="mt-1 font-semibold">{workout.equipment}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Sets</p>
              <p className="mt-1 font-semibold">{workout.sets}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Reps</p>
              <p className="mt-1 font-semibold">{workout.reps}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Duration</p>
              <p className="mt-1 font-semibold">
                {workout.duration} min
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Calories</p>
              <p className="mt-1 font-semibold">
                {workout.caloriesBurned}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/50">Rating</p>
              <p className="mt-1 font-semibold">{workout.rating}</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold uppercase">
              Instructions
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-5 text-white/70">
              {workout.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}