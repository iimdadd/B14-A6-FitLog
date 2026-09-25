# FitLog — Workout Library

FitLog is a responsive workout library and daily workout planner built with Next.js and TypeScript.

It helps users browse workouts, view workout details, save exercises for later, and build a daily workout plan with a maximum of five lifts.

## Live Project

Live Demo: Add your Vercel deployment link here

GitHub: https://github.com/iimdadd/B14-A6-FitLog

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Hot Toast
- Next.js Image Optimization
- FitLog REST API

## Key Features

1. **Workout Library**
   - Browse all available workouts from the FitLog API.
   - Responsive workout card grid for mobile, tablet, and desktop.

2. **Workout Details**
   - View workout descriptions, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.

3. **Today's Workout Plan**
   - Add workouts to today's plan.
   - Plan is limited to five workouts.
   - View total exercises, minutes, and calories.

4. **Saved Workouts**
   - Save workouts for later.
   - Remove saved workouts whenever needed.

5. **Workout Completion**
   - Mark planned workouts as done.
   - Completed workouts show a check status.
   - Toast notifications provide feedback for user actions.

6. **Workout Sorting**
   - Sort workouts by duration, calories, or rating.

7. **Responsive Navigation**
   - Mobile, tablet, and desktop-friendly navigation.
   - Active navigation state for Workout and My Plan.

8. **Loading & Error Pages**
   - Loading animations while workout data is being fetched.
   - Custom 404 page for unknown routes.

## Responsive Design

FitLog is designed to work across:

- Mobile
- Tablet
- Desktop

## API

FitLog uses the following REST API to load workout data:

`https://api.abcz.workers.dev/api/fitlog`

Individual workout details are available through:

`https://api.abcz.workers.dev/api/fitlog/:id`

## Main Project Structure

```text
fitlog/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── my-plan/
│   │   ├── workout/
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── context/
│   ├── lib/
│   └── types/
└── README.md