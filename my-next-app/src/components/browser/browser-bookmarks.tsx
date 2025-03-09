export default function BrowserBookmarks({ bookmarks = [], onNavigate }) {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-sm text-slate-500">No bookmarks available</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Bookmarks</h3>

      {bookmarks.map((bookmark) => (
        <div
          key={bookmark._id}
          className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          onClick={() => onNavigate(bookmark.url)}
        >
          <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{bookmark.title}</div>
          <div className="text-[10px] text-slate-500 mt-1 truncate">{bookmark.url}</div>
        </div>
      ))}
    </div>
  )
}

