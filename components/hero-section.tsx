"use client"

import { useEffect, useRef } from "react"
import { FileText, ExternalLink, ArrowRight } from "lucide-react"

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
      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Institution logos */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-8">
          <img src="/logos/intuitive-surgical.png" alt="Intuitive Surgical" className="h-8 w-auto" />
          <img src="/logos/nvidia.png" alt="NVIDIA" className="h-8 w-auto" />
          <img src="/logos/jhu.png" alt="Johns Hopkins University" className="h-8 w-auto" />
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
          Surgverse: Video World Foundation Models for Surgery
        </h1>

        {/* Decorative line */}
        <div className="w-16 h-1 bg-teal-600 mb-6"></div>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed mb-8 max-w-4xl">
          Augmented Situational Awareness and Dexterity in Robot-Assisted Surgeries through Foundation Model Post-Training
        </p>

        {/* Authors */}
        <div className="mb-2">
          <p className="text-base text-slate-700 leading-relaxed">
            Ruixing Liang<sup>1,3,4*</sup>,
            Zhaoshuo Li<sup>2</sup>,
            Qian Luo<sup>2</sup>,
            Fengyi Jiang<sup>1</sup>,
            Xiaorui Zhang<sup>1</sup>,
            Lingbo Jin<sup>1</sup>,
            Sierra Bonilla<sup>1</sup>,
            Hongchao Shu<sup>4</sup>,
            Zhuohong He<sup>1</sup>,
            Chinedu Nwoye<sup>1</sup>,
            Adam Schmidt<sup>1</sup>,
            Jingpei Lu<sup>1</sup>,
            Abdullah Jamal<sup>1</sup>,
            Omid Mohareri<sup>1</sup>
          </p>
        </div>

        {/* Institution legend */}
        <p className="text-sm text-slate-400 mb-2">
          <sup>1</sup>Intuitive Surgical · <sup>2</sup>Johns Hopkins University · <sup>3</sup>NVIDIA · <sup>4</sup>University of Maryland
        </p>
        <p className="text-xs text-slate-400 italic mb-10">
          *Work done during internship at Intuitive Surgical
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#paper"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white text-base font-medium rounded-lg hover:bg-teal-700 transition-all"
          >
            <FileText className="w-5 h-5" />
            Read Full Paper
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 text-base font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            Explore SurgBench
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#code"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 text-base font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            View Code
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200"></div>
      </div>

      {/* Video Demos Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
        <div className="space-y-6">
          {/* Future Prediction */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Future Prediction</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Based on a current situation it could predict what's gonna happen shortly.
            </p>
            {/* Set 1: Ground Truth + 2 Predictions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <VideoPlayer src="/videos/predict/groundtruth_future.mp4" label="Ground Truth" />
              <VideoPlayer src="/videos/predict/predicted1.mp4" label="Prediction #1" />
              <VideoPlayer src="/videos/predict/predicted2.mp4" label="Prediction #2" />
            </div>
            {/* Set 2: Input + Ground Truth + Prediction */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ImageDisplay src="/videos/predict/ground-style2-input.png" label="Input Frame" />
              <VideoPlayer src="/videos/predict/ground-style2-gruond.mp4" label="Ground Truth" />
              <VideoPlayer src="/videos/predict/ground-style2-predict.mp4" label="Model Prediction" />
            </div>
          </div>

          {/* Style Transfer */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Style Transfer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Apply photorealistic texture on simulation data or augment current annotated dataset with certain variations.
            </p>
            {/* Row 1: Raw video + Segmented raw video */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <VideoPlayer src="/videos/transfer-examples/transfer_sample_src.mp4" label="Raw Video" />
              <VideoPlayer src="/videos/transfer-examples/seg_masked_video.mp4" label="Segmented Raw Video" />
            </div>
            {/* Row 2: Generated outputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <VideoPlayer src="/videos/transfer-examples/transfer_video1.mp4" label="Gen #1" />
              <VideoPlayer src="/videos/transfer-examples/try_video_withSmoke1.mp4" label="Gen #2" />
              <VideoPlayer src="/videos/transfer-examples/try_videowithSmoke.mp4" label="Gen #3" />
            </div>
          </div>

          {/* Camera Control Comparison with SOTA */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3">Camera Control Comparison with SOTA</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Based on a current situation it could recreate it via a new view point (Virtual Camera).
            </p>
            {/* Row 1: Surgverse outputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <VideoPlayer src="/videos/camera-control-ground-intuitive1.mp4" label="Ground Truth | Surgverse #1" />
              <VideoPlayer src="/videos/camera-control-intuitive2.mp4" label="Surgverse #2" />
            </div>
            {/* Row 2: Baselines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VideoPlayer src="/videos/camera-control-cogvideo.mp4" label="CogVideo" />
              <VideoPlayer src="/videos/camera-control-veo.mp4" label="Veo (Google)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
