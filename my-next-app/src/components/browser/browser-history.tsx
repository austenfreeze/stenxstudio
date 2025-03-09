import { format } from "date-fns"

export default function BrowserHistory({ history = [], onNavigate }) {
  if (history.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-sm text-slate-500">No history available</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">History</h3>

      {history.map((item) => (
        <div
          key={item._id}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          onClick={() => onNavigate(item.url)}
        >
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{item.title}</div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-[10px] text-slate-500 truncate max-w-[70%]">{item.url}</div>
            <div className="text-[10px] text-slate-500">{format(new Date(item.visitedAt), "MMM d, h:mm a")}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

