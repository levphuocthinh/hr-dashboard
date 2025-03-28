"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface SalaryDistributionChartProps {
  type?: "total" | "average"
}

export function SalaryDistributionChart({ type = "total" }: SalaryDistributionChartProps) {
  // Sample data for total salary distribution
  const totalSalaryData = [
    { name: "Engineering", total: 225000, average: 5000 },
    { name: "Marketing", total: 103500, average: 4500 },
    { name: "Sales", total: 144400, average: 3800 },
    { name: "HR", total: 50400, average: 4200 },
    { name: "Finance", total: 86400, average: 4800 },
    { name: "IT", total: 124200, average: 4600 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={totalSalaryData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value: number) => [`$${value}`, type === "total" ? "Total Salary" : "Average Salary"]} />
        <Legend />
        <Bar
          dataKey={type === "total" ? "total" : "average"}
          name={type === "total" ? "Total Salary" : "Average Salary"}
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

