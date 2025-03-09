import { getProject } from "@/lib/sanity/queries";
import { notFound } from "next/navigation";
import ProjectHeader from "@/components/project-header";
import ProjectDescription from "@/components/project-description";
import ProjectAudio from "@/components/project-audio";
import ProjectGalleries from "@/components/project-galleries";
import ProjectConcepts from "@/components/project-concepts";
import ProjectSamples from "@/components/project-samples";
import ProjectReferences from "@/components/project-references";
import ProjectAssociated from "@/components/project-associated";
import ProjectLoading from "@/components/project-loading";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    console.error("❌ Missing slug parameter.");
    return notFound();
  }

  const project = await getProject(params.slug);

  if (!project) {
    console.error(`⚠️ No project found for slug: ${params.slug}`);
    return notFound();
  }

  return (
    <main className="container mx-auto px-6 py-12 max-w-6xl space-y-12">
      {/* ✅ Project Header */}
      <ProjectHeader 
        title={project.title} 
        coverPhoto={project.projectCoverPhoto} 
        protonLink={project.protonLink} 
      />

      {/* ✅ Description */}
      {project.description && <ProjectDescription description={project.description} />}

      {/* ✅ Audio Section */}
      {project.audioAssets?.length > 0 && <ProjectAudio audioAssets={project.audioAssets} />}

      {/* ✅ Asset Galleries */}
      {project.assetGalleries?.length > 0 && <ProjectGalleries galleries={project.assetGalleries} />}

      {/* ✅ Concept Section */}
      {project.concepts?.length > 0 && <ProjectConcepts concepts={project.concepts} />}

      {/* ✅ Samples */}
      {project.samples?.length > 0 && <ProjectSamples samples={project.samples} />}

      {/* ✅ References */}
      {project.references?.length > 0 && <ProjectReferences references={project.references} />}

      {/* ✅ Associated Projects */}
      {project.associatedProjects?.length > 0 && <ProjectAssociated projects={project.associatedProjects} />}
    </main>
  );
}
