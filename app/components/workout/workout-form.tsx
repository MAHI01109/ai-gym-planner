"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AILoader } from "@/components/ui/ai-loader"
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { WorkoutFormValues, workoutSchema } from "@/lib/validation/workout-schema"



export function WorkoutForm() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const form = useForm<WorkoutFormValues>({
        resolver: zodResolver(workoutSchema),
        defaultValues: {
            age: "",
            gender: "",
            height: "",
            weight: "",
            goal: "",
            experience: "",
            days: "",
            location: "",
        },
    })

    async function onSubmit(values: WorkoutFormValues) {
        try {
            setLoading(true)
            const res = await fetch("/api/generate-workout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            const data = await res.json()
            
            const workout = JSON.parse(data.workout)
            console.log(data.workout)

            localStorage.setItem("workout", JSON.stringify(workout))
            router.push("/result")
            setLoading(false);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            {loading && <AILoader />}
            <Card className="max-w-xl mx-auto">

                <CardHeader>
                    <CardTitle className="text-center text-2xl">
                        Create Your Workout Plan
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Form fields will go here */}
                        {/* Age */}

                        <Controller
                            name="age"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Age</FieldLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                        className="w-full"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="25"
                                    />
                                    <FieldDescription>Your age in years</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />



                        {/* Gender */}


                        <Controller
                            name="gender"
                            control={form.control}
                            render={({ field, fieldState }) => (

                                <Field>
                                    <FieldLabel htmlFor="form-select-gender">Gender</FieldLabel>
                                    <Select
                                        name={field.name}
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger
                                            id="form-select-gender"
                                            aria-invalid={fieldState.invalid}
                                            className="w-full"
                                        >
                                            <SelectValue
                                                placeholder="Select a gender" />
                                        </SelectTrigger>
                                        <SelectContent position="item-aligned">
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FieldDescription>Your gender</FieldDescription>
                                    {fieldState.error && <FieldError >{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}

                        />


                        {/* Height */}

                        <Controller
                            name="height"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Height</FieldLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                        className="w-full"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="175 cm"
                                    />
                                    <FieldDescription>Your height in cm</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />


                        {/* Weight */}

                        <Controller
                            name="weight"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Weight</FieldLabel>
                                    <Input
                                        {...field}
                                        type="number"
                                        className="w-full"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="70 kg"
                                    />
                                    <FieldDescription>Your weight in kg</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />

                        {/* Goal */}

                        <Controller
                            name="goal"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Goal</FieldLabel>
                                    <ToggleGroup
                                        type="single"
                                        className="grid grid-cols-3"
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <ToggleGroupItem value="fat-loss">
                                            Fat Loss
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="muscle-gain">
                                            Muscle Gain
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="strength">
                                            Strength
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                    <FieldDescription>Your primary fitness goal</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />


                        {/* Experience */}


                        <Controller
                            name="experience"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Experience</FieldLabel>
                                    <ToggleGroup
                                        type="single"
                                        className="grid grid-cols-3"
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <ToggleGroupItem value="beginner">
                                            Beginner
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="intermediate">
                                            Intermediate
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="advanced">
                                            Advanced
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                    <FieldDescription>Your workout experience level</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />


                        {/* Days */}


                        <Controller
                            name="days"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Days per Week</FieldLabel>
                                    <ToggleGroup
                                        type="single"
                                        className="grid grid-cols-4"
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <ToggleGroupItem value="3">3</ToggleGroupItem>
                                        <ToggleGroupItem value="4">4</ToggleGroupItem>
                                        <ToggleGroupItem value="5">5</ToggleGroupItem>
                                        <ToggleGroupItem value="6">6</ToggleGroupItem>
                                    </ToggleGroup>
                                    <FieldDescription>How many days per week can you commit to working out?</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />

                        {/* Location */}


                        <Controller
                            name="location"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field>
                                    <FieldLabel>Workout Location</FieldLabel>
                                    <ToggleGroup
                                        type="single"
                                        className="grid grid-cols-2"
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <ToggleGroupItem value="gym">Gym</ToggleGroupItem>
                                        <ToggleGroupItem value="home">Home</ToggleGroupItem>
                                    </ToggleGroup>
                                    <FieldDescription>Where do you prefer to work out?</FieldDescription>
                                    {fieldState.error && <FieldError>{fieldState.error?.message}</FieldError>}
                                </Field>
                            )}
                        />


                        {/* Submit */}

                        <Button type="submit" className="w-full h-12 text-lg" disabled={loading}>
                            {loading ? "Generating..." : "Generate Workout Plan"}
                        </Button>
                    </form>

                </CardContent>
            </Card>
        </>
    )
}