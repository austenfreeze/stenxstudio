import { StructureBuilder } from "sanity";

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // 📌 MUSIC MANAGEMENT SECTION
      S.divider(),
      S.listItem()
        .title("🎶 Music Library")
        .child(
          S.list()
            .title("Music Management")
            .items([
              S.listItem()
                .title("Artists 🎤")
                .child(S.documentTypeList("artist").title("Artists")),
              S.listItem()
                .title("Albums 💿")
                .child(S.documentTypeList("album").title("Albums")),
              S.listItem()
                .title("Songs 🎵")
                .child(S.documentTypeList("song").title("Songs")),
              S.listItem()
                .title("Playlists 📋")
                .child(S.documentTypeList("playlist").title("Playlists")),
            ])
        ),

      // 📌 PROJECTS: Organized by Category
      S.divider(),
      S.listItem()
        .title("🛠️ Projects")
        .child(
          S.list()
            .title("Projects by Category")
            .items([
              S.listItem()
                .title("Video Projects 🎥")
                .child(S.documentList().title("Video Projects").filter('_type == "project" && category == "video-project"')),
              S.listItem()
                .title("Audio Projects 🎵")
                .child(S.documentList().title("Audio Projects").filter('_type == "project" && category == "audio-project"')),
              S.listItem()
                .title("Graphic Design 🖼️")
                .child(S.documentList().title("Graphic Design Projects").filter('_type == "project" && category == "graphic-design"')),
              S.listItem()
                .title("Research Projects 📑")
                .child(S.documentList().title("Research Projects").filter('_type == "project" && category == "research-project"')),
              S.listItem()
                .title("Photography 📸")
                .child(S.documentList().title("Photography Projects").filter('_type == "project" && category == "photography"')),
              S.listItem()
                .title("Performance Art 🎭")
                .child(S.documentList().title("Performance Art Projects").filter('_type == "project" && category == "performance-art"')),
              S.listItem()
                .title("Web Design 🌐")
                .child(S.documentList().title("Web Design Projects").filter('_type == "project" && category == "web-design"')),
              S.listItem()
                .title("Conceptual 💡")
                .child(S.documentList().title("Conceptual Projects").filter('_type == "project" && category == "conceptual"')),
              S.listItem()
                .title("Other Projects 🎨")
                .child(S.documentList().title("Other Projects").filter('_type == "project" && category == "other"')),
              S.listItem()
                .title("🚨 Undefined Projects (Needs Categorization) ❓")
                .child(S.documentList().title("Undefined Projects").filter('_type == "project" && (!defined(category) || category == "undefined")')),
            ])
        ),

      // 📌 MEDIA ASSETS
      S.divider(),
      S.listItem()
        .title("📸 Media Library")
        .child(
          S.list()
            .title("Media Assets")
            .items([
              S.listItem()
                .title("Image Galleries 🖼️")
                .child(S.documentTypeList("imageGallery").title("Image Galleries")),
              S.listItem()
                .title("YouTube Videos 📹")
                .child(S.documentTypeList("youtubeVideo").title("YouTube Videos")),
            ])
        ),

      // 📌 POSTS & CATEGORIES
      S.divider(),
      S.listItem()
        .title("📰 Content Management")
        .child(
          S.list()
            .title("Content")
            .items([
              S.listItem()
                .title("Blog Posts ✍️")
                .child(S.documentTypeList("post").title("Blog Posts")),
              S.listItem()
                .title("Categories 📌")
                .child(S.documentTypeList("category").title("Categories")),
              S.listItem()
                .title("Authors 🖊️")
                .child(S.documentTypeList("author").title("Authors")),
            ])
        ),

      // 📌 BASE SETTINGS (Footer, Boot, Tools)
      S.divider(),
      S.listItem()
        .title("⚙️ Settings & Configuration")
        .child(
          S.list()
            .title("Base Components")
            .items([
              S.listItem()
                .title("Boot Sequence 🏁")
                .child(S.documentTypeList("bootSequence").title("Boot Sequence")),
              S.listItem()
                .title("Footer 📜")
                .child(S.documentTypeList("footer").title("Footer")),
              S.listItem()
                .title("Tools 🛠️")
                .child(S.documentTypeList("tool").title("Tools")),
            ])
        ),

      // ✅ Auto-Includes Any Unsorted Document Types
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "artist",
            "album",
            "song",
            "playlist",
            "project",
            "imageGallery",
            "youtubeVideo",
            "post",
            "category",
            "author",
            "bootSequence",
            "footer",
            "tool",
          ].includes(listItem.getId())
      ),
    ]);
