import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

// Define your own type for Sanity image sources
type SanityImageSource = {
  _type: string;
  asset: {
    _ref: string;
  };
};

export function urlFor(source: SanityImageSource): string {
  return imageUrlBuilder(client).image(source).url();
}
