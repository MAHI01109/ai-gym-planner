"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import {
  Target,
  Calendar,
  Clock,
  Sparkles,
  Dumbbell,
  Apple,
  TrendingUp,
  BicepsFlexed
} from "lucide-react"

interface Props {
  data: any
}

export function WorkoutResult({ data }: Props) {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">
          Your AI Workout Plan
        </h1>

        <div className="flex justify-center gap-2">
          <Badge>{data.summary.goal}</Badge>
          <Badge>{data.summary.experience}</Badge>
          <Badge>{data.summary.days} Days</Badge>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Target />
            <div>
              <p className="text-sm text-muted-foreground">
                Goal
              </p>
              <p className="font-semibold">
                {data.summary.goal}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
           <BicepsFlexed />
            <div>
              <p className="text-sm text-muted-foreground">
                Level
              </p>
              <p className="font-semibold">
                {data.summary.experience}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Calendar />
            <div>
              <p className="text-sm text-muted-foreground">
                Days
              </p>
              <p className="font-semibold">
                {data.summary.days}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Clock />
            <div>
              <p className="text-sm text-muted-foreground">
                Duration
              </p>
              <p className="font-semibold">
                {data.summary.estimated_duration}
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Sparkles />
            AI Insights
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {data.ai_insights.map((item: string, index: number) => (
            <p key={index}>• {item}</p>
          ))}
        </CardContent>
      </Card>

      {/* Weekly Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Overview</CardTitle>
        </CardHeader>

        <CardContent className="grid md:grid-cols-4 gap-3">
          {data.weekly_overview.map((day: any, index: number) => (
            <div
              key={index}
              className="border rounded-lg p-3 text-center"
            >
              <p className="font-semibold">{day.day}</p>
              <p className="text-sm text-muted-foreground">
                {day.focus}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Workout Plan */}
      <div className="space-y-6">
        {data.plan.map((day: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                <Dumbbell />
                {day.day} — {day.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                {day.exercises.map(
                  (exercise: any, i: number) => (
                    <div
                      key={i}
                      className="flex justify-between border-b pb-2"
                    >
                      <span>
                        {exercise.name}
                      </span>

                      <span className="text-muted-foreground">
                        {exercise.sets} × {exercise.reps} •{" "}
                        {exercise.rest}
                      </span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Nutrition */}
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <Apple />
            Nutrition
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p>Calories: {data.nutrition.calories}</p>
          <p>Protein: {data.nutrition.protein}</p>
          <p>Water: {data.nutrition.water}</p>
          <Separator />
          <p className="text-muted-foreground">
            {data.nutrition.notes}
          </p>
        </CardContent>
      </Card>

      {/* Expected Results */}
      <Card>
        <CardHeader>
          <CardTitle>Expected Results</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {data.expected_results.map(
            (item: string, index: number) => (
              <p key={index}>• {item}</p>
            )
          )}
        </CardContent>
      </Card>

      {/* Progression Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center">
            <TrendingUp />
            Progression Plan
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          {data.progression_plan.map(
            (item: string, index: number) => (
              <p key={index}>• {item}</p>
            )
          )}
        </CardContent>
      </Card>

    </div>
  )
}