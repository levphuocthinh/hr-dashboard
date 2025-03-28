"use client"

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"

export function SalaryTrendsChart() {
  // Sample data for salary trends with predictions
  const salaryData = [
    // Historical data
    { month: "Jan", actual: 4200, predicted: null },
    { month: "Feb", actual: 4250, predicted: null },
    { month: "Mar", actual: 4300, predicted: null },
    { month: "Apr", actual: 4320, predicted: null },
    { month: "May", actual: 4350, predicted: null },
    { month: "Jun", actual: 4400, predicted: null },
    // Current month
    { month: "Jul", actual: 4450, predicted: 4450 },
    // Predictions
    { month: "Aug", actual: null, predicted: 4500 },
    { month: "Sep", actual: null, predicted: 4550 },
    { month: "Oct", actual: null, predicted: 4600 },
    { month: "Nov", actual: null, predicted: 4650 },
    { month: "Dec", actual: null, predicted: 4700 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={salaryData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value: number) => [`$${value}`, ""]} />
        <Legend />
        <Line
          type="monotone"
          dataKey="actual"
          name="Actual Average Salary"
          stroke="#0ea5e9"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="predicted"
          name="Predicted Average Salary"
          stroke="#a855f7"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

