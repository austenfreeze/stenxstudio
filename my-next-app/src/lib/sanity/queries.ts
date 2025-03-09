import { client } from "./client"; // ✅ Correct import
import type { Project } from "./types"; // ✅ Keep this if needed, otherwise remove

// ✅ Fetch project by slug
export async function getProject(slug: string): Promise<Project | null> {
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
      // cspell:ignore refandinspo
      refAndInspo[]{ // ✅ Fixed typo and added spell-check ignore
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

// ✅ Fetch all project paths
export async function getProjectPaths() {
  try {
    const query = `*[_type == "project"]{ "slug": slug.current }`;
    const projects: { slug: string }[] = await client.fetch(query); // ✅ Explicitly typed

    if (!projects || projects.length === 0) {
      console.warn("⚠️ Warning: No project slugs found in Sanity.");
    }

    return projects.map((p: { slug: string }) => ({ slug: p.slug })).filter((p) => p.slug); // ✅ Fixed implicit any
  } catch (error) {
    console.error("❌ Error fetching project paths:", error);
    return [];
  }
}

// ✅ Fetch all projects for list page
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

// ✅ Fetch desktop items with error handling
export async function getDesktopItems() {
  try {
    const query = `*[_type == "desktopItem"]{ _id, name, type, icon }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("❌ Error fetching desktop items:", error);
    return [];
  }
}
export async function getBrandingData() {
  const query = `*[_type == "branding"][0]`;
  return await client.fetch(query);
}

export async function getBrowserData() {
  const query = `*[_type == "browserSettings"][0]`;
  return await client.fetch(query);
}

export async function getMenuItems() {
  const query = `*[_type == "menuItem"]`;
  return await client.fetch(query);
}

export async function getTaskbarData() {
  const query = `*[_type == "taskbar"]`;
  return await client.fetch(query);
}
