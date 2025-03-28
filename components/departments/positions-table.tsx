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
import { EditPositionDialog } from "@/components/departments/edit-position-dialog"
import { DeletePositionDialog } from "@/components/departments/delete-position-dialog"

interface PositionsTableProps {
  searchQuery: string
}

export function PositionsTable({ searchQuery }: PositionsTableProps) {
  const [editingPosition, setEditingPosition] = useState<any | null>(null)
  const [deletingPosition, setDeletingPosition] = useState<any | null>(null)

  // Sample position data
  const positions = [
    {
      id: "POS001",
      title: "Senior Developer",
      department: "Engineering",
      description: "Lead software development projects",
      minSalary: 5000,
      maxSalary: 8000,
      status: "Active",
    },
    {
      id: "POS002",
      title: "Junior Developer",
      department: "Engineering",
      description: "Assist in software development tasks",
      minSalary: 3000,
      maxSalary: 4500,
      status: "Active",
    },
    {
      id: "POS003",
      title: "Marketing Manager",
      department: "Marketing",
      description: "Oversee marketing campaigns and strategies",
      minSalary: 4500,
      maxSalary: 7000,
      status: "Active",
    },
    {
      id: "POS004",
      title: "Content Specialist",
      department: "Marketing",
      description: "Create and manage content for marketing",
      minSalary: 3200,
      maxSalary: 4800,
      status: "Active",
    },
    {
      id: "POS005",
      title: "Sales Representative",
      department: "Sales",
      description: "Generate leads and close sales",
      minSalary: 3500,
      maxSalary: 6000,
      status: "Active",
    },
    {
      id: "POS006",
      title: "HR Specialist",
      department: "HR",
      description: "Handle HR processes and employee relations",
      minSalary: 3800,
      maxSalary: 5500,
      status: "Active",
    },
    {
      id: "POS007",
      title: "Financial Analyst",
      department: "Finance",
      description: "Analyze financial data and prepare reports",
      minSalary: 4200,
      maxSalary: 6500,
      status: "Active",
    },
    {
      id: "POS008",
      title: "System Administrator",
      department: "IT",
      description: "Maintain and configure IT systems",
      minSalary: 4000,
      maxSalary: 6000,
      status: "Inactive",
    },
  ]

  // Filter positions based on search query
  const filteredPositions = positions.filter((position) => {
    if (!searchQuery) return true

    const query = searchQuery.toLowerCase()
    return (
      position.id.toLowerCase().includes(query) ||
      position.title.toLowerCase().includes(query) ||
      position.department.toLowerCase().includes(query)
    )
  })

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Salary Range</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPositions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No positions found.
                </TableCell>
              </TableRow>
            ) : (
              filteredPositions.map((position) => (
                <TableRow key={position.id}>
                  <TableCell className="font-medium">{position.id}</TableCell>
                  <TableCell>{position.title}</TableCell>
                  <TableCell>{position.department}</TableCell>
                  <TableCell className="hidden md:table-cell">{position.description}</TableCell>
                  <TableCell>
                    {formatCurrency(position.minSalary)} - {formatCurrency(position.maxSalary)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={position.status === "Active" ? "default" : "secondary"}>{position.status}</Badge>
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
                        <DropdownMenuItem onClick={() => setEditingPosition(position)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setDeletingPosition(position)}
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

      {editingPosition && (
        <EditPositionDialog
          position={editingPosition}
          open={!!editingPosition}
          onOpenChange={() => setEditingPosition(null)}
        />
      )}

      {deletingPosition && (
        <DeletePositionDialog
          position={deletingPosition}
          open={!!deletingPosition}
          onOpenChange={() => setDeletingPosition(null)}
        />
      )}
    </>
  )
}

