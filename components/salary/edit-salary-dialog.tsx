"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  basicSalary: z.coerce.number().min(0, {
    message: "Basic salary must be a positive number.",
  }),
  bonus: z.coerce.number().min(0, {
    message: "Bonus must be a positive number.",
  }),
  deduction: z.coerce.number().min(0, {
    message: "Deduction must be a positive number.",
  }),
})

interface EditSalaryDialogProps {
  salary: any
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditSalaryDialog({ salary, open, onOpenChange }: EditSalaryDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basicSalary: salary.basicSalary,
      bonus: salary.bonus,
      deduction: salary.deduction,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const netSalary = values.basicSalary + values.bonus - values.deduction
    console.log({ ...values, netSalary })
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Salary Information</DialogTitle>
          <DialogDescription>
            Update the salary details for {salary.name}. The net salary will be calculated automatically.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="basicSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Basic Salary</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bonus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bonus</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deduction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deduction</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

