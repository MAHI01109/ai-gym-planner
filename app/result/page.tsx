"use client"

import { useEffect, useState, useRef } from "react"
import jsPDF from "jspdf"
import html2canvas from "html2canvas-pro"
import Container from "../components/layout/container"
import { WorkoutResult } from "../components/workout/workout-result"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResultPage() {
  const [data, setData] = useState<any>(null)

  const pdfRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    const element = pdfRef.current
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // 👈 FIX
    })

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")

    const imgWidth = 210
    const pageHeight = 295
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    let heightLeft = imgHeight
    let position = 0

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)

    heightLeft -= pageHeight

    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    pdf.save("AI-Workout-Plan.pdf")
  }

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

      <div className="flex justify-end">
        <Button variant="secondary" onClick={downloadPDF}>
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <div ref={pdfRef} className="space-y-6">
        <WorkoutResult data={data} />
      </div>
    </Container>
  )
}