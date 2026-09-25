"use client";

import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout, plan, saved } = useFitLog();

  const alreadyInPlan = plan.some((item) => item.id === workout.id);
  const alreadySaved = saved.some((item) => item.id === workout.id);

  function handleAddToPlan() {
    if (alreadyInPlan) {
      toast("This workout is already in your plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Your plan can only have 5 workouts.");
      return;
    }

    addToPlan(workout);
    toast.success("Workout added to today's plan!");
  }

  function handleSave() {
    if (alreadySaved) {
      toast("This workout is already saved.");
      return;
    }

    saveWorkout(workout);
    toast.success("Workout saved for later!");
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={handleAddToPlan}
        disabled={alreadyInPlan || plan.length >= 5}
        className="rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold uppercase text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadyInPlan ? "Added to Plan" : "Add to Today's Plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={alreadySaved}
        className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadySaved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
}
