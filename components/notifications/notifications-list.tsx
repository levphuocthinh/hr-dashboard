"use client"

import { useState } from "react"
import { Bell, Cake, Clock, DollarSign, MailCheck, MoreHorizontal, UserMinus } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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

interface NotificationsListProps {
  searchQuery?: string
  filterUnread?: boolean
}

export function NotificationsList({ searchQuery = "", filterUnread = false }: NotificationsListProps) {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "anniversary",
      title: "Work Anniversary",
      message: "Alex Johnson is celebrating 3 years with the company today!",
      time: "2 hours ago",
      read: false,
      icon: Cake,
    },
    {
      id: 2,
      type: "leave",
      title: "Employee Leave",
      message: "Emily Davis has submitted a leave request for next week.",
      time: "5 hours ago",
      read: false,
      icon: UserMinus,
    },
    {
      id: 3,
      type: "overtime",
      title: "Overtime Alert",
      message: "Michael Brown has worked 5 hours overtime this week.",
      time: "Yesterday",
      read: true,
      icon: Clock,
    },
    {
      id: 4,
      type: "salary",
      title: "Salary Review",
      message: "It's time to review salaries for the Engineering department.",
      time: "2 days ago",
      read: true,
      icon: DollarSign,
    },
    {
      id: 5,
      type: "payroll",
      title: "Payroll Processed",
      message: "Monthly payroll has been processed and emails have been sent.",
      time: "3 days ago",
      read: true,
      icon: MailCheck,
    },
  ])

  // Filter notifications based on search query and read status
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesReadStatus = filterUnread ? !notification.read : true

    return matchesSearch && matchesReadStatus
  })

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case "anniversary":
        return "text-blue-500"
      case "leave":
        return "text-yellow-500"
      case "overtime":
        return "text-purple-500"
      case "salary":
        return "text-green-500"
      case "payroll":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <div className="space-y-4">
      {filteredNotifications.length === 0 ? (
        <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
          <div className="flex flex-col items-center gap-1 text-center">
            <Bell className="h-6 w-6 text-muted-foreground" />
            <h3 className="font-semibold">No notifications</h3>
            <p className="text-sm text-muted-foreground">
              {filterUnread ? "You have no unread notifications." : "You have no notifications."}
            </p>
          </div>
        </div>
      ) : (
        filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start gap-4 rounded-lg border p-4 ${!notification.read ? "bg-muted/50" : ""}`}
          >
            <Avatar className={`h-10 w-10 ${getIconColor(notification.type)}`}>
              <AvatarFallback>
                <notification.icon className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{notification.title}</h4>
                {!notification.read && (
                  <Badge variant="secondary" className="h-5 px-1.5 text-xs font-medium">
                    New
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{notification.message}</p>
              <p className="text-xs text-muted-foreground">{notification.time}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {!notification.read && (
                  <DropdownMenuItem onClick={() => markAsRead(notification.id)}>Mark as read</DropdownMenuItem>
                )}
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dismiss</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))
      )}
    </div>
  )
}

