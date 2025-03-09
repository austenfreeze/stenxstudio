import type { SanityImage } from "@/lib/sanity/types"
import Image from "next/image"
import { urlForImage } from "@/lib/sanity/image"

export default function ProjectSoloAssets({ assets }: { assets: SanityImage[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Images</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset, index) => (
          <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={urlForImage(asset).url() || "/placeholder.svg"}
              alt={asset.alt || `Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

