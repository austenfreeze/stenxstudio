export default function ProjectDescription({ description }: { description: string }) {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <p>{description}</p>
    </div>
  )
}

