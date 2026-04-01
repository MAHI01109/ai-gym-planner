"use client"

import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const messages = [
  "Analyzing your fitness goals...",
  "Calculating workout intensity...",
  "Designing your weekly plan...",
  "Optimizing exercises...",
  "Finalizing your workout..."
]

export function AILoader() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-card border rounded-xl p-8 shadow-lg text-center space-y-4">
        
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>

        <h3 className="text-lg font-semibold">
          AI is generating your workout
        </h3>

        <p className="text-muted-foreground animate-pulse">
          {messages[index]}
        </p>

      </div>

    </div>
  )
}