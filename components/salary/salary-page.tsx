"use client"

import { Download, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SalaryTable } from "@/components/salary/salary-table"
import { AttendanceTable } from "@/components/salary/attendance-table"

export default function SalaryPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Salary Management</h1>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="salary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="salary">Salary Information</TabsTrigger>
          <TabsTrigger value="attendance">Attendance Data</TabsTrigger>
        </TabsList>
        <TabsContent value="salary" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Salary Information</CardTitle>
              <CardDescription>
                View and manage employee salary details including basic salary, bonuses, and deductions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search by employee name or ID..." className="w-full pl-8" />
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
                <SalaryTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Attendance Data</CardTitle>
              <CardDescription>
                Track employee attendance including working days, absences, and days off.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative w-full sm:w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search by employee name or ID..." className="w-full pl-8" />
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
                <AttendanceTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

