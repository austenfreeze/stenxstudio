export default function BrowserLoading() {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Browser toolbar loading */}
      <div className="h-10 bg-slate-200 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 flex items-center px-2 space-x-2">
        <div className="h-6 w-6 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
        <div className="h-6 w-6 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
        <div className="h-6 w-6 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>

        {/* Address bar loading */}
        <div className="flex-1 h-8 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>

        <div className="h-6 w-6 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
      </div>

      {/* Bookmarks bar loading */}
      <div className="h-8 bg-slate-100 dark:bg-slate-900 border-b border-slate-300 dark:border-slate-700 flex items-center px-2 space-x-2">
        <div className="h-6 w-16 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
        <div className="h-6 w-24 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
        <div className="h-6 w-20 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
      </div>

      {/* Browser content loading */}
      <div className="flex-1 p-4 grid grid-cols-2 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-20 rounded-md bg-slate-300 dark:bg-slate-700 animate-pulse"></div>
        ))}
      </div>
    </div>
  )
}

