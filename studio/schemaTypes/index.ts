import project from "./project/project";
import asset from "./global/assets";
import artist from "./music/artist";
import album from "./music/album";
import song from "./music/song";
import playlist from "./music/playlist";
import imageGallery from "./images/imageGallery";
import youtubeVideo from "./youtube/youtubeVideo";
import post from "./editorial/post";
import category from "./global/category";
import author from "./people/author";
import bootSequence from "./boot/bootSequence";
import footer from "./footer/footer";
import tool from "./browser/tool";
import blockContent from "./block/blockContent";

// ✅ Named export so `sanity.config.ts` can properly import `schemaTypes`
export const schemaTypes = [
  project,
  asset, // ✅ Includes restored "Assets" schema
  artist,
  album,
  song,
  playlist,
  imageGallery,
  youtubeVideo,
  post,
  category,
  author,
  bootSequence,
  footer,
  tool,
  blockContent,
];
