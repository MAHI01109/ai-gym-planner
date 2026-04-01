import { Card, CardContent } from "@/components/ui/card"
import { User, Brain, Dumbbell } from "lucide-react"

const steps = [
  {
    title: "Enter Your Details",
    description:
      "Tell us your fitness goals, experience level, and available days.",
    icon: User,
  },
  {
    title: "AI Creates Plan",
    description:
      "Our AI analyzes your input and generates a personalized workout plan.",
    icon: Brain,
  },
  {
    title: "Start Training",
    description:
      "Follow your plan and track your progress easily.",
    icon: Dumbbell,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-4">
            Get your personalized workout plan in 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Card key={index} className="text-center hover:shadow-lg transition">
                <CardContent className="p-6 space-y-4">
                  
                  <div className="flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground">
                    {step.description}
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