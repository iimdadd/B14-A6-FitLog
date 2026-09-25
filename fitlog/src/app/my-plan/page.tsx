"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlan() {
  const {
    plan,
    saved,
    completed,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  function handleRemoveFromPlan(id: number) {
    removeFromPlan(id);
    toast.success("Workout removed from your plan.");
  }

  function handleRemoveFromSaved(id: number) {
    removeFromSaved(id);
    toast.success("Workout removed from saved.");
  }

  function handleDone(id: number) {
    markAsDone(id);
    toast.success("Workout marked as done!");
  }

  return (
    <main className="min-h-screen bg-[#0b0d0f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            FITLOG
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 max-w-2xl text-white/60">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/50">Exercises</p>
            <p className="mt-2 text-3xl font-black">{plan.length}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/50">Minutes</p>
            <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/50">Calories</p>
            <p className="mt-2 text-3xl font-black">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-3 border-b border-white/10">
          <button
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-4 py-3 text-sm font-bold uppercase ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-white/50"
            }`}
          >
            Today's Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-4 py-3 text-sm font-bold uppercase ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-white/50"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Empty State */}
        {currentWorkouts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-white/20 p-10 text-center">
            <h2 className="text-2xl font-black uppercase">
              Nothing Here Yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-white/50">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-white"
            >
              Go to Workouts
            </Link>
          </div>
        ) : (
          /* Workout Cards */
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {currentWorkouts.map((workout) => (
              <article
                key={workout.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="grid sm:grid-cols-[180px_1fr]">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={180}
                    height={180}
                    className="h-48 w-full object-cover sm:h-full"
                  />

                  <div className="p-5">
                    <h2 className="text-xl font-bold uppercase">
                      {workout.name}
                    </h2>

                    <p className="mt-2 text-sm text-white/50">
                      {workout.equipment}
                    </p>

                    {/* Workout Stats */}
                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/60">
                      <span>◷ {workout.duration} min</span>
                      <span>🔥 {workout.caloriesBurned} kcal</span>
                      <span>★ {workout.rating}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" ? (
                        <>
                          <button
                            onClick={() => handleDone(workout.id)}
                            disabled={completed.includes(workout.id)}
                            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-bold uppercase text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {completed.includes(workout.id)
                              ? "✓ Done"
                              : "✓ Mark as Done"}
                          </button>

                          <button
                            onClick={() =>
                              handleRemoveFromPlan(workout.id)
                            }
                            className="rounded-full border border-red-400/40 px-4 py-2 text-xs font-bold uppercase text-red-300 transition hover:bg-red-400 hover:text-black"
                          >
                            × Remove
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() =>
                            handleRemoveFromSaved(workout.id)
                          }
                          className="rounded-full border border-red-400/40 px-4 py-2 text-xs font-bold uppercase text-red-300 transition hover:bg-red-400 hover:text-black"
                        >
                          × Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}