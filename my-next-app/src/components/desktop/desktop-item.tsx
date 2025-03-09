"use client"

import { useState } from "react"
import { Folder, File, Layout, FileText } from "lucide-react"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

export default function DesktopItem({ item }) {
  const [isSelected, setIsSelected] = useState(false)

  // Ensure item has all required properties
  const safeItem = {
    _id: item?._id || "unknown",
    name: item?.name || "Unnamed Item",
    type: item?.type || "file",
    ...item,
  }

  const getIcon = () => {
    switch (safeItem.type) {
      case "folder":
        return <Folder className="h-12 w-12 text-yellow-500" />
      case "file":
        return <FileText className="h-12 w-12 text-blue-500" />
      case "widget":
        return <Layout className="h-12 w-12 text-green-500" />
      default:
        return <File className="h-12 w-12 text-gray-500" />
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          className={`flex flex-col items-center justify-center p-2 rounded-md cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 ${isSelected ? "bg-slate-200 dark:bg-slate-800" : ""}`}
          onClick={() => setIsSelected(!isSelected)}
          onDoubleClick={() => console.log(`Opening ${safeItem.name}`)}
        >
          {getIcon()}
          <span className="mt-2 text-sm text-center font-medium text-slate-700 dark:text-slate-300 truncate max-w-[100px]">
            {safeItem.name}
          </span>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => console.log(`Opening ${safeItem.name}`)}>Open</ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log(`Renaming ${safeItem.name}`)}>Rename</ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log(`Deleting ${safeItem.name}`)}>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

