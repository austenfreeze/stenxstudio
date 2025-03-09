export default function TaskbarItem({ task }) {
  return (
    <button className="h-10 px-3 flex items-center justify-center rounded-md hover:bg-slate-300 dark:hover:bg-slate-700">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 truncate max-w-[120px]">{task.name}</span>
    </button>
  )
}

