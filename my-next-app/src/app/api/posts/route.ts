import { client } from "../../../lib/sanity/sanity";
import { NextResponse } from "next/server";

export const config = { runtime: "edge" }; // ✅ Use Edge runtime for speed

export async function GET() {
  const posts = await client.fetch(`*[_type == "post"]{title, slug}`);
  return NextResponse.json(posts);
}
