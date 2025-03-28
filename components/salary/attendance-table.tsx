"use client"

import { useState } from "react"
import { Calendar, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ViewAttendanceDialog } from "@/components/salary/view-attendance-dialog"

export function AttendanceTable() {
  const [viewingAttendance, setViewingAttendance] = useState<any | null>(null)

  // Sample attendance data
  const attendanceData = [
    {
      id: "EMP001",
      name: "Alex Johnson",
      department: "Engineering",
      workingDays: 22,
      absentDays: 0,
      daysOff: 8,
      overtime: 5,
      status: "Present",
    },
    {
      id: "EMP002",
      name: "Sarah Williams",
      department: "Marketing",
      workingDays: 20,
      absentDays: 2,
      daysOff: 8,
      overtime: 0,
      status: "Present",
    },
    {
      id: "EMP003",
      name: "Michael Brown",
      department: "Sales",
      workingDays: 21,
      absentDays: 1,
      daysOff: 8,
      overtime: 3,
      status: "Present",
    },
    {
      id: "EMP004",
      name: "Emily Davis",
      department: "HR",
      workingDays: 18,
      absentDays: 4,
      daysOff: 8,
      overtime: 0,
      status: "Absent",
    },
    {
      id: "EMP005",
      name: "David Wilson",
      department: "Finance",
      workingDays: 22,
      absentDays: 0,
      daysOff: 8,
      overtime: 2,
      status: "Present",
    },
    {
      id: "EMP006",
      name: "Jennifer Taylor",
      department: "IT",
      workingDays: 19,
      absentDays: 3,
      daysOff: 8,
      overtime: 0,
      status: "Present",
    },
    {
      id: "EMP007",
      name: "Robert Martinez",
      department: "Engineering",
      workingDays: 20,
      absentDays: 2,
      daysOff: 8,
      overtime: 1,
      status: "Present",
    },
    {
      id: "EMP008",
      name: "Lisa Anderson",
      department: "Marketing",
      workingDays: 22,
      absentDays: 0,
      daysOff: 8,
      overtime: 4,
      status: "Present",
    },
  ]

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Working Days</TableHead>
              <TableHead>Absent Days</TableHead>
              <TableHead>Days Off</TableHead>
              <TableHead>Overtime (hrs)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceData.map((attendance) => (
              <TableRow key={attendance.id}>
                <TableCell className="font-medium">{attendance.id}</TableCell>
                <TableCell>{attendance.name}</TableCell>
                <TableCell>{attendance.department}</TableCell>
                <TableCell>{attendance.workingDays}</TableCell>
                <TableCell>{attendance.absentDays}</TableCell>
                <TableCell>{attendance.daysOff}</TableCell>
                <TableCell>{attendance.overtime}</TableCell>
                <TableCell>
                  <Badge variant={attendance.status === "Present" ? "default" : "destructive"}>
                    {attendance.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => setViewingAttendance(attendance)}>
                        <Calendar className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {viewingAttendance && (
        <ViewAttendanceDialog
          attendance={viewingAttendance}
          open={!!viewingAttendance}
          onOpenChange={() => setViewingAttendance(null)}
        />
      )}
    </>
  )
}

