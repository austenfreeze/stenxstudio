import Image from "next/image"
import { urlForImage } from "@/lib/sanity/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { SanityImage } from "@/lib/sanity/types"

interface ProjectHeaderProps {
  title: string
  coverPhoto?: SanityImage
  protonLink?: string
}

export default function ProjectHeader({ title, coverPhoto, protonLink }: ProjectHeaderProps) {
  return (
    <div className="mb-8">
      {coverPhoto && (
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-6">
          <Image
            src={urlForImage(coverPhoto).url() || "/placeholder.svg"}
            alt={coverPhoto.alt || title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>

        {protonLink && (
          <Button asChild variant="outline">
            <a href={protonLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>View Project</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

