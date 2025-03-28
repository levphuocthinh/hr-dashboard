"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmployeeDistributionChart } from "@/components/reports/employee-distribution-chart"
import { SalaryDistributionChart } from "@/components/reports/salary-distribution-chart"
import { AttendanceTrendsChart } from "@/components/reports/attendance-trends-chart"
import { SalaryTrendsChart } from "@/components/reports/salary-trends-chart"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Analysis</h1>
      </div>

      <Tabs defaultValue="hr" className="space-y-4">
        <TabsList>
          <TabsTrigger value="hr">HR Analytics</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Analytics</TabsTrigger>
          <TabsTrigger value="trends">Trends & Predictions</TabsTrigger>
        </TabsList>
        <TabsContent value="hr" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Employee Distribution</CardTitle>
                <CardDescription>Distribution of employees across departments</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <EmployeeDistributionChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Working Status</CardTitle>
                <CardDescription>Distribution of employees by working status</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <EmployeeDistributionChart type="status" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="payroll" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Salary Distribution</CardTitle>
                <CardDescription>Distribution of salary across departments</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SalaryDistributionChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Salary by Department</CardTitle>
                <CardDescription>Comparison of average salaries across departments</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SalaryDistributionChart type="average" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="trends" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Attendance trends over the past 12 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <AttendanceTrendsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Salary Trends</CardTitle>
                <CardDescription>Salary trends and predictions for the next 6 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <SalaryTrendsChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

