"use client";

import { useState, useEffect } from "react";
import { getDesktopItems } from "@/lib/sanity/queries";
import DesktopItem from "./desktop-item";
import BrowserWindow from "../windows/browser-window";
import { useBranding } from "@/lib/hooks/use-branding";

// Mock data for when Sanity isn't available
const mockDesktopItems = [
  { _id: "desktop1", name: "Documents", type: "folder", icon: "folder" },
  { _id: "desktop2", name: "Projects", type: "folder", icon: "folder" },
  { _id: "desktop3", name: "Notes.txt", type: "file", icon: "file-text" },
  { _id: "desktop4", name: "Clock", type: "widget", icon: "clock" },
];

export default function Desktop() {
  const [desktopItems, setDesktopItems] = useState(mockDesktopItems);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const { browserName, browserLogo } = useBranding();

  useEffect(() => {
    async function fetchDesktopItems() {
      try {
        const items = await getDesktopItems();
        // Handle missing or incomplete items gracefully
        const validItems = items.filter(item => item._id && item.name);
        setDesktopItems(validItems.length > 0 ? validItems : mockDesktopItems);
      } catch (error) {
        console.error("Error fetching desktop items:", error);
        setDesktopItems(mockDesktopItems); // Use mock data if the fetch fails
      }
    }

    fetchDesktopItems();
  }, []);

  const handleOpenBrowser = () => setIsBrowserOpen(true);
  const handleCloseBrowser = () => setIsBrowserOpen(false);

  return (
    <div className="h-[calc(100vh-48px)] w-full p-4 relative">
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Desktop items section */}
        <div className="col-span-12 h-full relative">
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 p-4">
            {desktopItems.map((item) => (
              <DesktopItem key={item._id} item={item} />
            ))}
            <DesktopItem
              item={{
                _id: "browser",
                name: browserName || "Web Browser",
                type: "application",
                icon: browserLogo || "globe",
              }}
              onClick={handleOpenBrowser}
            />
          </div>
        </div>
      </div>
      {isBrowserOpen && <BrowserWindow onClose={handleCloseBrowser} />}
    </div>
  );
}
