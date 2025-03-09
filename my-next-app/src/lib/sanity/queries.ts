import { client } from "./client";  // ✅ Correct import
import type { Project } from "./types";
export async function getProject(slug: string) {
  if (!slug) {
    console.error("❌ Error: Missing slug parameter in getProject.");
    return null;
  }

  try {
    const query = `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      description,
      category,
      "projectCoverPhoto": projectCoverPhoto.asset->url,
      "altText": projectCoverPhoto.alt,
      protonLink,
      youtubeVideo->{
        title,
        videoId
      },
      audioAssets[]{
        audioName,
        "fileUrl": asset->url,
        "coverPhotoUrl": audioCover.asset->url
      },
      assetGalleries[]->{
        title,
        images[]{
          "url": asset->url,
          "alt": asset->alt
        }
      },
      soloAssets[]{
        "url": asset->url,
        "alt": alt
      },
      associatedProjects[]->{
        title,
        "slug": slug.current,
        "projectCoverPhoto": projectCoverPhoto.asset->url
      },
      samples[]{
        name,
        source
      },
      refandinspo[]{
        referenceName,
        referenceLink
      },
      concepts[]{
        conceptTitle
      }
    }`;

    return await client.fetch(query, { slug });
  } catch (error) {
    console.error(`❌ Error fetching project with slug "${slug}":`, error);
    return null;
  }
}

// 🟢 Fetch all project slugs for dynamic paths
export async function getProjectPaths() {
  try {
    const query = `*[_type == "project"]{ "slug": slug.current }`;
    const projects = await client.fetch(query);

    if (!projects || projects.length === 0) {
      console.warn("⚠️ Warning: No project slugs found in Sanity.");
    }

    return projects.map((p) => ({ slug: p.slug })).filter(p => p.slug); // Filter out undefined slugs
  } catch (error) {
    console.error("❌ Error fetching project paths:", error);
    return [];
  }
}

// 🟢 Fetch all projects for the main list page
export async function getProjects() {
  try {
    const query = `*[_type == "project"]{
      _id,
      title,
      description,
      "projectCoverPhoto": projectCoverPhoto.asset->url,
      "altText": projectCoverPhoto.alt,
      "slug": slug.current
    }`;

    const projects = await client.fetch(query);

    if (!projects || projects.length === 0) {
      console.warn("⚠️ Warning: No projects found in Sanity.");
    }

    return projects;
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    return [];
  }
}

