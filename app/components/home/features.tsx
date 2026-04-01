import { Card, CardContent } from "@/components/ui/card"
import { Brain, Dumbbell, Calendar, LineChart, Sparkles, Timer } from "lucide-react"

const features = [
  {
    title: "AI Generated Workouts",
    description:
      "Get personalized workout plans based on your fitness goals and experience.",
    icon: Brain,
  },
  {
    title: "Custom Training Plans",
    description:
      "Choose your workout days, level, and equipment preferences.",
    icon: Dumbbell,
  },
  {
    title: "Weekly Schedule",
    description:
      "Get structured weekly workout plans for better consistency.",
    icon: Calendar,
  },
  {
    title: "Track Progress",
    description:
      "Monitor your fitness journey and improve performance.",
    icon: LineChart,
  },
  {
    title: "AI Smart Recommendations",
    description:
      "Get intelligent suggestions for better results.",
    icon: Sparkles,
  },
  {
    title: "Quick Setup",
    description:
      "Generate your workout plan in seconds.",
    icon: Timer,
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Powerful Features
          </h2>
          <p className="text-muted-foreground mt-4">
            Everything you need to build your perfect workout routine
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card key={index} className="hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  
                  <Icon className="h-8 w-8 text-primary" />

                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>

                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}