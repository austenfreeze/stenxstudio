import type { Reference } from "@/lib/sanity/types"
import { ExternalLink } from "lucide-react"

export default function ProjectReferences({ references }: { references: Reference[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">References & Inspirations</h2>

      <ul className="space-y-2">
        {references.map((reference, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>{reference.referenceName}</span>
            {reference.referenceLink && (
              <a
                href={reference.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <span className="text-sm">Link</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

