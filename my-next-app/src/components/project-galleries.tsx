import type { ImageGallery } from "@/lib/sanity/types"
import Image from "next/image"
import { urlForImage } from "@/lib/sanity/image"

export default function ProjectGalleries({ galleries }: { galleries: ImageGallery[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Galleries</h2>

      {galleries.map((gallery) => (
        <div key={gallery._id} className="mb-8">
          <h3 className="text-xl font-medium mb-3">{gallery.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.images?.map((image, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={urlForImage(image).url() || "/placeholder.svg"}
                  alt={image.alt || `Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

