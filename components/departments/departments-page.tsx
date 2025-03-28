"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DepartmentsTable } from "@/components/departments/departments-table"
import { PositionsTable } from "@/components/departments/positions-table"
import { AddDepartmentDialog } from "@/components/departments/add-department-dialog"
import { AddPositionDialog } from "@/components/departments/add-position-dialog"

export default function DepartmentsPage() {
  const [isAddDepartmentOpen, setIsAddDepartmentOpen] = useState(false)
  const [isAddPositionOpen, setIsAddPositionOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Department Management</h1>
      </div>

      <Tabs defaultValue="departments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="positions">Positions</TabsTrigger>
        </TabsList>
        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Departments</CardTitle>
                <CardDescription>Manage your company's departments and their details.</CardDescription>
              </div>
              <Button onClick={() => setIsAddDepartmentOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Department
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search departments..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <DepartmentsTable searchQuery={searchQuery} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Positions</CardTitle>
                <CardDescription>Manage your company's positions and their details.</CardDescription>
              </div>
              <Button onClick={() => setIsAddPositionOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Add Position
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search positions..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <PositionsTable searchQuery={searchQuery} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <AddDepartmentDialog open={isAddDepartmentOpen} onOpenChange={setIsAddDepartmentOpen} />

      <AddPositionDialog open={isAddPositionOpen} onOpenChange={setIsAddPositionOpen} />
    </div>
  )
}

