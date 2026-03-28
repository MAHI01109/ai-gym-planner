"use client"

export default function Footer() {
    return (
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Gym Planner. All rights reserved.
        </footer>
    )
}