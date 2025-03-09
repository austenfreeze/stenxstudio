import type { Sample } from "@/lib/sanity/types"
import { ExternalLink } from "lucide-react"

export default function ProjectSamples({ samples }: { samples: Sample[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Samples</h2>

      <ul className="space-y-2">
        {samples.map((sample, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>{sample.name}</span>
            {sample.source && (
              <a
                href={sample.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                <span className="text-sm">Source</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

