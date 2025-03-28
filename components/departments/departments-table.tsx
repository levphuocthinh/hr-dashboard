"use client"

import { useState } from "react"
import { Edit, MoreHorizontal, Trash2, Users } from "lucide-react"

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
import { EditDepartmentDialog } from "@/components/departments/edit-department-dialog"
import { DeleteDepartmentDialog } from "@/components/departments/delete-department-dialog"

interface DepartmentsTableProps {
  searchQuery: string
}

export function DepartmentsTable({ searchQuery }: DepartmentsTableProps) {
  const [editingDepartment, setEditingDepartment] = useState<any | null>(null)
  const [deletingDepartment, setDeletingDepartment] = useState<any | null>(null)

  // Sample department data
  const departments = [
    {
      id: "DEP001",
      name: "Engineering",
      description: "Software development and engineering",
      manager: "Alex Johnson",
      employeeCount: 45,
      status: "Active",
    },
    {
      id: "DEP002",
      name: "Marketing",
      description: "Marketing and brand management",
      manager: "Sarah Williams",
      employeeCount: 23,
      status: "Active",
    },
    {
      id: "DEP003",
      name: "Sales",
      description: "Sales and customer acquisition",
      manager: "Michael Brown",
      employeeCount: 38,
      status: "Active",
    },
    {
      id: "DEP004",
      name: "HR",
      description: "Human resources and recruitment",
      manager: "Emily Davis",
      employeeCount: 12,
      status: "Active",
    },
    {
      id: "DEP005",
      name: "Finance",
      description: "Financial management and accounting",
      manager: "David Wilson",
      employeeCount: 18,
      status: "Active",
    },
    {
      id: "DEP006",
      name: "IT",
      description: "Information technology and support",
      manager: "Jennifer Taylor",
      employeeCount: 27,
      status: "Active",
    },
    {
      id: "DEP007",
      name: "Customer Support",
      description: "Customer service and support",
      manager: "Robert Martinez",
      employeeCount: 32,
      status: "Active",
    },
    {
      id: "DEP008",
      name: "Research",
      description: "Research and development",
      manager: "Lisa Anderson",
      employeeCount: 15,
      status: "Inactive",
    },
  ]

  // Filter departments based on search query
  const filteredDepartments = departments.filter((department) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      department.id.toLowerCase().includes(query) ||
      department.name.toLowerCase().includes(query) ||
      department.manager.toLowerCase().includes(query)
    )
  })

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Manager</TableHead>
              <TableHead>Employees</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDepartments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No departments found.
                </TableCell>
              </TableRow>
            ) : (
              filteredDepartments.map((department) => (
                <TableRow key={department.id}>
                  <TableCell className="font-medium">{department.id}</TableCell>
                  <TableCell>{department.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{department.description}</TableCell>
                  <TableCell>{department.manager}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{department.employeeCount}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={department.status === "Active" ? "default" : "secondary"}>
                      {department.status}
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
                        <DropdownMenuItem onClick={() => setEditingDepartment(department)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setDeletingDepartment(department)}
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

      {editingDepartment && (
        <EditDepartmentDialog
          department={editingDepartment}
          open={!!editingDepartment}
          onOpenChange={() => setEditingDepartment(null)}
        />
      )}

      {deletingDepartment && (
        <DeleteDepartmentDialog
          department={deletingDepartment}
          open={!!deletingDepartment}
          onOpenChange={() => setDeletingDepartment(null)}
        />
      )}
    </>
  )
}

