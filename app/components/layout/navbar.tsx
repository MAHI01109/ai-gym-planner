"use client"

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Dumbbell className="h-6 w-6" />
                    <span className="font-bold text-lg">
                        AI Gym Planner
                    </span>
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost">
                        Login
                    </Button>

                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}