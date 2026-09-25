"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Workout } from "@/types/workout";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  return (
    <section id="library" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold uppercase">
              The Library
            </h2>

            <p className="mt-2 text-white/60">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="text-sm font-semibold text-white/60"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-full border border-white/20 bg-[#15181b] px-4 py-2 text-sm font-semibold text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <Link
              key={workout.id}
              href={`/workout/${workout.id}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[#ccff00]/50"
            >
              <Image
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
  );
}