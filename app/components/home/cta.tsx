import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center space-y-6">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build Your Workout Plan?
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto opacity-90">
            Generate your personalized AI workout plan in seconds and 
            start achieving your fitness goals today.
          </p>

          {/* Button */}
          <div>
            <Link href="/generate">
              <Button size="lg" variant="secondary">
                <Dumbbell className="mr-2 h-4 w-4" />
                Generate Workout Plan
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}