import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/sanity/types";

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.projectCoverPhoto || "/default-image.png";
const projectSlug = project.slug; // ✅ Access slug directly

  if (!projectSlug) {
    console.error("Project is missing a slug:", project);
    return null; // Prevent rendering if slug is missing
  }

  return (
    <Link href={`/projects/${projectSlug}`} className="project-card block">
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          alt={project.altText || "Project Image"}
          width={300}
          height={200}
          className="object-cover rounded-md shadow-md"
        />
      </div>
      <h3 className="text-lg font-bold mt-2">{project.title}</h3>
    </Link>
  );
}
