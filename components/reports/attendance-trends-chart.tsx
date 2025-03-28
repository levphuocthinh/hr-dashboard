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

export function AttendanceTrendsChart() {
  // Sample data for attendance trends
  const attendanceData = [
    { month: "Jan", attendance: 95, absent: 5 },
    { month: "Feb", attendance: 94, absent: 6 },
    { month: "Mar", attendance: 96, absent: 4 },
    { month: "Apr", attendance: 93, absent: 7 },
    { month: "May", attendance: 95, absent: 5 },
    { month: "Jun", attendance: 97, absent: 3 },
    { month: "Jul", attendance: 96, absent: 4 },
    { month: "Aug", attendance: 94, absent: 6 },
    { month: "Sep", attendance: 95, absent: 5 },
    { month: "Oct", attendance: 96, absent: 4 },
    { month: "Nov", attendance: 97, absent: 3 },
    { month: "Dec", attendance: 93, absent: 7 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={attendanceData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value: number) => [`${value}%`, ""]} />
        <Legend />
        <Line
          type="monotone"
          dataKey="attendance"
          name="Attendance Rate"
          stroke="#0ea5e9"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="absent"
          name="Absence Rate"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

