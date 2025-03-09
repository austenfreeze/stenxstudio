import type { YoutubeVideo } from "@/lib/sanity/types"

export default function ProjectYouTube({ video }: { video: YoutubeVideo }) {
  // Assuming the YoutubeVideo type has a videoId field
  const videoId = video.videoId

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Video</h2>
      <div className="aspect-video overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  )
}

