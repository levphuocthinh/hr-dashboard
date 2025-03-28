"use client"

import { useState } from "react"
import { Edit, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditSalaryDialog } from "@/components/salary/edit-salary-dialog"

export function SalaryTable() {
  const [editingSalary, setEditingSalary] = useState<any | null>(null)

  // Sample salary data
  const salaries = [
    {
      id: "EMP001",
      name: "Alex Johnson",
      department: "Engineering",
      position: "Senior Developer",
      basicSalary: 5000,
      bonus: 1000,
      deduction: 200,
      netSalary: 5800,
    },
    {
      id: "EMP002",
      name: "Sarah Williams",
      department: "Marketing",
      position: "Marketing Manager",
      basicSalary: 4500,
      bonus: 800,
      deduction: 150,
      netSalary: 5150,
    },
    {
      id: "EMP003",
      name: "Michael Brown",
      department: "Sales",
      position: "Sales Representative",
      basicSalary: 3800,
      bonus: 1200,
      deduction: 180,
      netSalary: 4820,
    },
    {
      id: "EMP004",
      name: "Emily Davis",
      department: "HR",
      position: "HR Specialist",
      basicSalary: 4200,
      bonus: 500,
      deduction: 120,
      netSalary: 4580,
    },
    {
      id: "EMP005",
      name: "David Wilson",
      department: "Finance",
      position: "Financial Analyst",
      basicSalary: 4800,
      bonus: 700,
      deduction: 220,
      netSalary: 5280,
    },
    {
      id: "EMP006",
      name: "Jennifer Taylor",
      department: "IT",
      position: "System Administrator",
      basicSalary: 4600,
      bonus: 900,
      deduction: 190,
      netSalary: 5310,
    },
    {
      id: "EMP007",
      name: "Robert Martinez",
      department: "Engineering",
      position: "Junior Developer",
      basicSalary: 3500,
      bonus: 400,
      deduction: 100,
      netSalary: 3800,
    },
    {
      id: "EMP008",
      name: "Lisa Anderson",
      department: "Marketing",
      position: "Content Specialist",
      basicSalary: 3700,
      bonus: 600,
      deduction: 110,
      netSalary: 4190,
    },
  ]

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
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Basic Salary</TableHead>
              <TableHead>Bonus</TableHead>
              <TableHead>Deduction</TableHead>
              <TableHead>Net Salary</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaries.map((salary) => (
              <TableRow key={salary.id}>
                <TableCell className="font-medium">{salary.id}</TableCell>
                <TableCell>{salary.name}</TableCell>
                <TableCell>{salary.department}</TableCell>
                <TableCell>{formatCurrency(salary.basicSalary)}</TableCell>
                <TableCell>{formatCurrency(salary.bonus)}</TableCell>
                <TableCell>{formatCurrency(salary.deduction)}</TableCell>
                <TableCell className="font-medium">{formatCurrency(salary.netSalary)}</TableCell>
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
                      <DropdownMenuItem onClick={() => setEditingSalary(salary)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Salary
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {editingSalary && (
        <EditSalaryDialog salary={editingSalary} open={!!editingSalary} onOpenChange={() => setEditingSalary(null)} />
      )}
    </>
  )
}

