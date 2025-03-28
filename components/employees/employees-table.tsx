"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditEmployeeDialog } from "@/components/employees/edit-employee-dialog"
import { DeleteEmployeeDialog } from "@/components/employees/delete-employee-dialog"

interface EmployeesTableProps {
  searchQuery: string
}

export function EmployeesTable({ searchQuery }: EmployeesTableProps) {
  const [editingEmployee, setEditingEmployee] = useState<any | null>(null)
  const [deletingEmployee, setDeletingEmployee] = useState<any | null>(null)

  // Sample employee data
  const employees = [
    {
      id: "EMP001",
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      department: "Engineering",
      position: "Senior Developer",
      joinDate: "2023-01-15",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      department: "Marketing",
      position: "Marketing Manager",
      joinDate: "2022-11-02",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      department: "Sales",
      position: "Sales Representative",
      joinDate: "2023-02-10",
      status: "Active",
    },
    {
      id: "EMP004",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      department: "HR",
      position: "HR Specialist",
      joinDate: "2023-03-15",
      status: "Probation",
    },
    {
      id: "EMP005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      department: "Finance",
      position: "Financial Analyst",
      joinDate: "2022-09-20",
      status: "Active",
    },
    {
      id: "EMP006",
      name: "Jennifer Taylor",
      email: "jennifer.taylor@example.com",
      department: "IT",
      position: "System Administrator",
      joinDate: "2022-08-05",
      status: "Active",
    },
    {
      id: "EMP007",
      name: "Robert Martinez",
      email: "robert.martinez@example.com",
      department: "Engineering",
      position: "Junior Developer",
      joinDate: "2023-04-12",
      status: "Probation",
    },
    {
      id: "EMP008",
      name: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      department: "Marketing",
      position: "Content Specialist",
      joinDate: "2023-01-30",
      status: "Active",
    },
    {
      id: "EMP009",
      name: "James Thomas",
      email: "james.thomas@example.com",
      department: "Sales",
      position: "Sales Manager",
      joinDate: "2022-07-18",
      status: "Active",
    },
    {
      id: "EMP010",
      name: "Patricia Garcia",
      email: "patricia.garcia@example.com",
      department: "HR",
      position: "Recruitment Specialist",
      joinDate: "2022-12-01",
      status: "Leave",
    },
  ]

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      employee.id.toLowerCase().includes(query) ||
      employee.name.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query) ||
      employee.position.toLowerCase().includes(query)
    )
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No employees found.
                </TableCell>
              </TableRow>
            ) : (
              filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{formatDate(employee.joinDate)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        employee.status === "Active"
                          ? "default"
                          : employee.status === "Probation"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {employee.status}
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
                        <DropdownMenuItem onClick={() => setEditingEmployee(employee)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setDeletingEmployee(employee)}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {editingEmployee && (
        <EditEmployeeDialog
          employee={editingEmployee}
          open={!!editingEmployee}
          onOpenChange={() => setEditingEmployee(null)}
        />
      )}

      {deletingEmployee && (
        <DeleteEmployeeDialog
          employee={deletingEmployee}
          open={!!deletingEmployee}
          onOpenChange={() => setDeletingEmployee(null)}
        />
      )}
    </>
  )
}

