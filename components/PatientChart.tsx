"use client" // 1. This is required because forms need user interaction

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// 1. Fake Data for the chart
const chartData = [
  { month: "January", patients: 186 },
  { month: "February", patients: 305 },
  { month: "March", patients: 237 },
  { month: "April", patients: 73 },
  { month: "May", patients: 209 },
  { month: "June", patients: 214 },
  { month: "July", patients: 280 },
]

// 2. Configuration
const chartConfig = {
  patients: {
    label: "Patients",
    // This uses your global variable for that Medical Blue!
    color: "var(--color-medical-blue-1)", 
  },
} satisfies ChartConfig

export function PatientChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Patient Overview</CardTitle>
        <CardDescription>Visits for the last 7 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-50 w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            {/* The Bar color uses your brand color */}
            <Bar dataKey="patients" fill="var(--color-medical-blue-1)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}