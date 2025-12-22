"use client"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar" // নিশ্চিত করুন ফোল্ডার নাম 'components'

export function CalendarDemo() {
  // জাভাস্ক্রিপ্টে টাইপ ( <Date | undefined> ) দেওয়া যাবে না
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
    />
  )
}