export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface Project {
  _id: string
  title: string
  description: string
  projectCoverPhoto?: SanityImage
  protonLink?: string
  youtubeVideo?: YoutubeVideo
  assetGalleries?: ImageGallery[]
  soloAssets?: SanityImage[]
  audioAssets?: AudioAsset[]
  associatedProjects?: Project[]
  samples?: Sample[]
  refandinspo?: Reference[]
  concepts?: Concept[]
}

export interface YoutubeVideo {
  _id: string
  title: string
  videoId: string
}

export interface ImageGallery {
  _id: string
  title: string
  images: SanityImage[]
}

export interface AudioAsset {
  _type: "file"
  asset: {
    _ref: string
    _type: "reference"
  }
  url: string
  coverPhoto?: SanityImage
  title: string
  artist?: string
  duration?: string
}

export interface Sample {
  name: string
  source?: string
}

export interface Reference {
  referenceName: string
  referenceLink?: string
}

export interface Concept {
  conceptTitle: string
  conceptDescription?: string
}

