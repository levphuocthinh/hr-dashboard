import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentEmployees() {
  const employees = [
    {
      id: "EMP001",
      name: "Alex Johnson",
      department: "Engineering",
      position: "Senior Developer",
      joinDate: "2023-06-15",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Sarah Williams",
      department: "Marketing",
      position: "Marketing Manager",
      joinDate: "2023-07-02",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Michael Brown",
      department: "Sales",
      position: "Sales Representative",
      joinDate: "2023-07-10",
      status: "Active",
    },
    {
      id: "EMP004",
      name: "Emily Davis",
      department: "HR",
      position: "HR Specialist",
      joinDate: "2023-07-15",
      status: "Probation",
    },
    {
      id: "EMP005",
      name: "David Wilson",
      department: "Finance",
      position: "Financial Analyst",
      joinDate: "2023-07-20",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-4">
      {employees.map((employee) => (
        <div key={employee.id} className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
              <AvatarFallback>
                {employee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{employee.name}</p>
              <p className="text-sm text-muted-foreground">{employee.position}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{employee.department}</Badge>
            <Badge variant={employee.status === "Active" ? "default" : "secondary"}>{employee.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}

