"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/lib/sanity/image"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import type { AudioAsset } from "@/lib/sanity/types"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function ProjectAudio({ audioAssets }: { audioAssets: AudioAsset[] }) {
  const [activeAudio, setActiveAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  const handlePlay = (audioUrl: string) => {
    if (activeAudio === audioUrl) {
      if (isPlaying) {
        audioElement?.pause()
      } else {
        audioElement?.play()
      }
      setIsPlaying(!isPlaying)
    } else {
      if (audioElement) {
        audioElement.pause()
      }

      const newAudio = new Audio(audioUrl)
      newAudio.addEventListener("timeupdate", () => {
        const percentage = (newAudio.currentTime / newAudio.duration) * 100
        setProgress(percentage)
      })

      newAudio.addEventListener("ended", () => {
        setIsPlaying(false)
        setProgress(0)
      })

      newAudio.muted = isMuted
      newAudio.play()

      setAudioElement(newAudio)
      setActiveAudio(audioUrl)
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (audioElement) {
      audioElement.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleProgressChange = (value: number[]) => {
    if (audioElement) {
      const newTime = (value[0] / 100) * audioElement.duration
      audioElement.currentTime = newTime
      setProgress(value[0])
    }
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Audio</h2>

      <div className="space-y-4">
        {audioAssets.map((audio, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
              {audio.coverPhoto ? (
                <Image
                  src={urlForImage(audio.coverPhoto).url() || "/placeholder.svg"}
                  alt={audio.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-xs">No cover</span>
                </div>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="font-medium">{audio.title}</h3>
              {audio.artist && <p className="text-sm text-muted-foreground">{audio.artist}</p>}
            </div>

            <div className="flex items-center gap-2">
              {audio.duration && <span className="text-sm text-muted-foreground">{audio.duration}</span>}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePlay(audio.url)}
                aria-label={isPlaying && activeAudio === audio.url ? "Pause" : "Play"}
              >
                {isPlaying && activeAudio === audio.url ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {activeAudio && (
        <div className="mt-6 p-4 rounded-lg border bg-card">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (isPlaying) {
                  audioElement?.pause()
                } else {
                  audioElement?.play()
                }
                setIsPlaying(!isPlaying)
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>

            <div className="flex-grow">
              <Slider
                value={[progress]}
                min={0}
                max={100}
                step={0.1}
                onValueChange={handleProgressChange}
                aria-label="Audio progress"
              />
            </div>

            <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

