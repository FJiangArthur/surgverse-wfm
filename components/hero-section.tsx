"use client"

import { useEffect, useRef } from "react"
import { FileText, ExternalLink, Download } from "lucide-react"

function VideoPlayer({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="border border-border bg-card/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-colors">
      <div className="aspect-video bg-black">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain"
          loop
          muted
          playsInline
          controls
        />
      </div>
      <div className="p-2 border-t border-border">
        <h4 className="font-medium text-foreground text-xs text-center">{label}</h4>
      </div>
    </div>
  )
}

function ImageDisplay({ src, label }: { src: string; label: string }) {
  return (
    <div className="border border-border bg-card/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-colors">
      <div className="aspect-video bg-black flex items-center justify-center">
        <img src={src} alt={label} className="w-full h-full object-contain" />
      </div>
      <div className="p-2 border-t border-border">
        <h4 className="font-medium text-foreground text-xs text-center">{label}</h4>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white border-b border-border">
      {/* Top navigation bar */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">CVPR 2026</span>
            <nav className="hidden md:flex gap-4">
              <a href="#abstract" className="text-sm text-foreground hover:text-secondary transition-colors">Abstract</a>
              <a href="#method" className="text-sm text-foreground hover:text-secondary transition-colors">Method</a>
              <a href="#results" className="text-sm text-foreground hover:text-secondary transition-colors">Results</a>
            </nav>
          </div>
          <div className="flex gap-3">
            <button className="text-xs font-medium text-secondary hover:underline flex items-center gap-1">
              <Download className="w-3 h-3" /> Paper
            </button>
            <button className="text-xs font-medium text-secondary hover:underline flex items-center gap-1">
              <ExternalLink className="w-3 h-3" /> Code
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        {/* Header: Title + Authors + Buttons in compact layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2 text-xs text-muted-foreground">
              {["Intuitive Surgical", "NVIDIA", "Johns Hopkins University"].map((inst, i) => (
                <span key={inst} className="font-medium uppercase tracking-wide">
                  {inst}{i < 2 && <span className="ml-4">·</span>}
                </span>
              ))}
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
              Surgverse: Video World Foundation Models for Surgery
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Augmented Situational Awareness and Dexterity in Robot-Assisted Surgeries through Foundation Model Post-Training
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:flex-col">
            <a href="#paper" className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-md hover:bg-secondary/90 transition-all">
              <FileText className="w-4 h-4" /> Paper
            </a>
            <a href="#code" className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-md hover:bg-muted/70 transition-all">
              <ExternalLink className="w-4 h-4" /> Code
            </a>
          </div>
        </div>

        {/* Video Demos */}
        <div className="space-y-6">
          {/* Future Prediction */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Future Prediction</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageDisplay src="/videos/predict_input_image.png" label="Input Frame" />
              <VideoPlayer src="/videos/predict_ground.mp4" label="Ground Truth" />
              <VideoPlayer src="/videos/predict_example_2.mp4" label="Model Prediction" />
            </div>
          </div>

          {/* Style Transfer */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Style Transfer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <VideoPlayer src="/videos/transfer-examples/transfer_sample_src.mp4" label="Source Video" />
              <VideoPlayer src="/videos/transfer-examples/transfer_video1.mp4" label="Transfer Output 1" />
              <VideoPlayer src="/videos/transfer-examples/try_videowithSmoke.mp4" label="Transfer with Smoke" />
            </div>
          </div>

          {/* Camera Control */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Camera Control Comparison</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <VideoPlayer src="/videos/camera-control-intuitive.mp4" label="Ground Truth" />
              <VideoPlayer src="/videos/camera-control-cogvideo.mp4" label="CogVideo" />
              <VideoPlayer src="/videos/camera-control-veo.mp4" label="Veo (Google)" />
              <VideoPlayer src="/videos/camera-control-anchor.mp4" label="Surgverse (Ours)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
