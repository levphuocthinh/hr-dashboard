"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function DashboardChart() {
  const data = [
    {
      name: "Engineering",
      total: 45,
    },
    {
      name: "Marketing",
      total: 23,
    },
    {
      name: "Sales",
      total: 38,
    },
    {
      name: "HR",
      total: 12,
    },
    {
      name: "Finance",
      total: 18,
    },
    {
      name: "IT",
      total: 27,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

