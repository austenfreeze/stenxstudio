import { getProjects } from "@/lib/sanity/queries"
import ProjectCard from "@/components/project-card"
import { Suspense } from "react"
import ProjectsLoading from "@/components/projects-loading"

export default async function HomePage() {
  let projects = [];
  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found. Please check your Sanity configuration.
          </p>
        </div>
      )}
    </main>
  );
}
