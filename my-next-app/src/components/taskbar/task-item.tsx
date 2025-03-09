"use client"

import { useState } from "react"
import { Icon } from "lucide-react"

interface TaskItemProps {
  task: {
    _id: string
    name: string
    icon: string
    isActive: boolean
  }
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`h-10 px-3 flex items-center justify-center rounded-md transition-colors ${
        task.isActive || isHovered ? "bg-slate-300 dark:bg-slate-700" : "hover:bg-slate-200 dark:hover:bg-slate-800"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {task.icon && (
        <Icon name={task.icon as keyof typeof Icon} className="h-5 w-5 mr-2 text-slate-700 dark:text-slate-300" />
      )}
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate max-w-[120px]">{task.name}</span>
    </button>
  )
}

