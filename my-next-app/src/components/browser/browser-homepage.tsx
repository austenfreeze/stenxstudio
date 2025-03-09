export default function BrowserHomepage({ headlines = [], onNavigate }) {
  if (headlines.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-sm text-slate-500">No headlines available</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      {headlines.map((headline) => (
        <div
          key={headline._id}
          className="p-2 rounded-md border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          onClick={() => onNavigate(headline.url)}
        >
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300 line-clamp-2">{headline.title}</div>
          <div className="text-[10px] text-slate-500 mt-1 truncate">{headline.url}</div>
        </div>
      ))}
    </div>
  )
}

