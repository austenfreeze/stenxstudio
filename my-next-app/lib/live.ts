import { defineLive } from "next-sanity";
import { client } from "@/lib/sanity/sanity";

export const { sanityFetch, SanityLive } = defineLive({client});

export async function getBootSequenceContent() {
  return sanityFetch({
    query: `*[_type == "bootSequence"][0]`, // Ensures we only get one document
  });
}