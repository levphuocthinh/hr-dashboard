"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

interface EmployeeDistributionChartProps {
  type?: "department" | "status"
}

export function EmployeeDistributionChart({ type = "department" }: EmployeeDistributionChartProps) {
  // Sample data for department distribution
  const departmentData = [
    { name: "Engineering", value: 45, color: "#0ea5e9" },
    { name: "Marketing", value: 23, color: "#f97316" },
    { name: "Sales", value: 38, color: "#22c55e" },
    { name: "HR", value: 12, color: "#a855f7" },
    { name: "Finance", value: 18, color: "#ec4899" },
    { name: "IT", value: 27, color: "#14b8a6" },
  ]

  // Sample data for status distribution
  const statusData = [
    { name: "Active", value: 125, color: "#22c55e" },
    { name: "Probation", value: 15, color: "#f97316" },
    { name: "Leave", value: 8, color: "#a855f7" },
    { name: "Terminated", value: 5, color: "#ef4444" },
  ]

  const data = type === "department" ? departmentData : statusData

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => [`${value} employees`, "Count"]} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

