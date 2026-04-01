import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Fitness Enthusiast",
    feedback:
      "This AI workout planner helped me stay consistent. The plans are easy to follow and very effective.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Aman Verma",
    role: "Beginner",
    feedback:
      "I didn't know how to start gym training. This tool generated a perfect beginner plan.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Priya Singh",
    role: "Working Professional",
    feedback:
      "I love how fast it generates personalized workout plans. Super helpful!",
    image: "https://i.pravatar.cc/100?img=3",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Users Say
          </h2>
          <p className="text-muted-foreground mt-4">
            Trusted by fitness enthusiasts worldwide
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardContent className="p-6 space-y-4">
                
                {/* User */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground">
                  "{testimonial.feedback}"
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}