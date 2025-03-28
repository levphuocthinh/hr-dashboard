"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ViewAttendanceDialogProps {
  attendance: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ViewAttendanceDialog({ attendance, open, onOpenChange }: ViewAttendanceDialogProps) {
  // Sample detailed attendance data for the month
  const detailedAttendance = [
    { date: "2023-07-01", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-02", status: "Weekend", hours: 0, notes: "" },
    { date: "2023-07-03", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-04", status: "Present", hours: 9, notes: "1hr overtime" },
    { date: "2023-07-05", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-06", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-07", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-08", status: "Weekend", hours: 0, notes: "" },
    { date: "2023-07-09", status: "Weekend", hours: 0, notes: "" },
    { date: "2023-07-10", status: "Present", hours: 10, notes: "2hrs overtime" },
    { date: "2023-07-11", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-12", status: "Present", hours: 8, notes: "" },
    { date: "2023-07-13", status: "Absent", hours: 0, notes: "Sick leave" },
    { date: "2023-07-14", status: "Present", hours: 8, notes: "" },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Attendance Details</DialogTitle>
          <DialogDescription>
            Detailed attendance record for {attendance.name} (ID: {attendance.id})
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {detailedAttendance.map((record) => (
                <TableRow key={record.date}>
                  <TableCell>{formatDate(record.date)}</TableCell>
                  <TableCell>{record.status}</TableCell>
                  <TableCell>{record.hours}</TableCell>
                  <TableCell>{record.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

