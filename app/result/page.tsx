"use client"

import { useEffect, useState } from "react"
import  Container  from "../components/layout/container"
import { WorkoutResult } from "../components/workout/workout-result"

export default function ResultPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const stored = localStorage.getItem("workout")
    
    if (stored) {
      setData(JSON.parse(stored))
    }
  }, [])

  if (!data) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    )
  }

  return (
    <Container>
      <WorkoutResult data={data} />
    </Container>
  )
}