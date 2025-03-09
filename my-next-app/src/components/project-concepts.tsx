import type { Concept } from "@/lib/sanity/types"

export default function ProjectConcepts({ concepts }: { concepts: Concept[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Concepts</h2>

      <div className="space-y-6">
        {concepts.map((concept, index) => (
          <div key={index} className="p-4 rounded-lg border bg-card">
            <h3 className="text-xl font-medium mb-2">{concept.conceptTitle}</h3>
            {concept.conceptDescription && <p className="text-muted-foreground">{concept.conceptDescription}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

