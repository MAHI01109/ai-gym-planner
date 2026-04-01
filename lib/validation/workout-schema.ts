import { z } from "zod"

export const workoutSchema = z.object({
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  goal: z.string().min(1, "Goal is required"),
  experience: z.string().min(1, "Experience is required"),
  days: z.string().min(1, "Days required"),
  location: z.string().min(1, "Location required"),
})

export type WorkoutFormValues = z.infer<typeof workoutSchema>