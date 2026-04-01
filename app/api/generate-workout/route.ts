import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

if (!openai) {
  throw new Error("OpenAI API key not found");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { age, gender, height, weight, goal, experience, days, location } =
      body;

    const prompt = `
You are a certified professional fitness trainer and strength coach.

Create a personalized gym workout plan based on user details.

User Details:
Age: ${age}
Gender: ${gender}
Height: ${height}
Weight: ${weight}
Goal: ${goal}
Experience: ${experience}
Days per week: ${days}
Location: ${location}

Requirements:

Create a weekly workout plan
Include exercises for each day
Include sets, reps, and rest time
Make plan safe and realistic
Make it goal oriented
Beginner-friendly if user is beginner
Intermediate/Advanced if applicable

Also Include:

Goal Summary
Weekly Overview
AI Insights
Nutrition Recommendation
Expected Results Timeline
Progression Plan

IMPORTANT:
Return response ONLY in JSON format.

Output Format:

{
"summary": {
"goal": "",
"experience": "",
"days": "",
"estimated_duration": ""
},
"ai_insights": [
"",
"",
""
],
"weekly_overview": [
{
"day": "",
"focus": ""
}
],
"nutrition": {
"calories": "",
"protein": "",
"water": "",
"notes": ""
},
"expected_results": [
"",
"",
""
],
"progression_plan": [
"",
"",
""
],
"plan": [
{
"day": "",
"title": "",
"exercises": [
{
"name": "",
"sets": "",
"reps": "",
"rest": ""
}
]
}
]
}
`;

    const response = await openai.chat.completions.create({
      model: "nvidia/nemotron-3-super-120b-a12b",
      messages: [{ role: "user", content: prompt }],
    });

    const workout = response.choices[0].message.content;

    return NextResponse.json({ workout });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate workout" },
      { status: 500 },
    );
  }
}
