import type { SchemaTypeDefinition } from "sanity"
import desktopItem from "./schemas/desktop-item"
import task from "./schemas/task"
import notification from "./schemas/notification"
import bookmark from "./schemas/bookmark"
import browserHistory from "./schemas/browser-history"
import headline from "./schemas/headline"
import menuItem from "./schemas/menu-item"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [desktopItem, task, notification, bookmark, browserHistory, headline, menuItem],
}

