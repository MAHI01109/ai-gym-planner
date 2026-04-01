"use client"

import { Button } from "@/components/ui/button"
import { Dumbbell, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            AI Powered Workout Planner
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Build Your Perfect{" "}
          <span className="text-primary">
            Gym Workout Plan
          </span>{" "}
          With AI
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get personalized workout plans based on your goals, 
          experience, and schedule. Powered by AI to help you 
          achieve your fitness goals faster.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/generate">
            <Button size="lg">
              <Dumbbell className="mr-2 h-4 w-4" />
              Generate Workout
            </Button>
          </Link>

          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

      </div>
    </section>
  )
}