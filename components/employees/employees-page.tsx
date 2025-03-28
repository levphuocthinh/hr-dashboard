"use client"

import { useState } from "react"
import { Download, Filter, Search, SlidersHorizontal, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { EmployeesTable } from "@/components/employees/employees-table"
import { AddEmployeeDialog } from "@/components/employees/add-employee-dialog"

export default function EmployeesPage() {
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setIsAddEmployeeOpen(true)}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Employee
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Management</CardTitle>
          <CardDescription>Manage your employees, update their information, and track their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by ID, name, department, or position..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Advanced
                </Button>
              </div>
            </div>
            <EmployeesTable searchQuery={searchQuery} />
          </div>
        </CardContent>
      </Card>

      <AddEmployeeDialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen} />
    </div>
  )
}

