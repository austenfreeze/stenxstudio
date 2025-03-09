import { getProject, getProjectPaths } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const projects = await getProjectPaths();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      {project.projectCoverPhoto && (
        <Image
          src={project.projectCoverPhoto}
          alt={project.altText || "Project image"}
          width={800}
          height={500}
          className="object-cover rounded-lg shadow-md"
        />
      )}

      <p className="mt-4 text-lg">{project.description}</p>

      {project.protonLink && (
        <a
          href={project.protonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View More
        </a>
      )}
    </main>
  );
}
