import type { Project } from "@/lib/sanity/types"
import ProjectCard from "./project-card"

export default function ProjectAssociated({ projects }: { projects: Project[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Associated Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  )
}

