// import Container from "../components/layout/container";
import { WorkoutForm } from "../components/workout/workout-form"

export default function GeneratePage() {
    return (
            <div className="max-w-2xl mx-auto">
                <div className="py-10 px-4">
                    <WorkoutForm />
                </div>
            </div>
    )
}