"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function CitationSection() {
  const [copied, setCopied] = useState(false)

  const bibtex = `@article{liang2025surgverse,
  title={Surgverse: Video World Foundation Models for Augmented Situational Awareness and Dexterity in Robot-Assisted Surgeries},
  author={Liang, Ruixing and Li, Zhaoshuo and Luo, Qian and others},
  journal={arXiv preprint},
  year={2025}
}`

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Publication</span>
          <h2 className="text-4xl font-bold mt-4">Citation</h2>
        </div>

        <div className="glassmorphism p-8 rounded-lg border border-secondary/20">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">BibTeX</h3>
            <div className="relative">
              <pre className="bg-card/80 p-6 rounded border border-border text-xs text-muted-foreground overflow-x-auto font-mono">
                {bibtex}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded bg-secondary/20 hover:bg-secondary/30 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-secondary" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground hover:text-secondary transition-colors" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-secondary/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">About This Work</h3>
            <p className="text-muted-foreground mb-4">
              This research was conducted by teams at{" "}
              <span className="font-semibold text-foreground">Intuitive Surgical</span>,{" "}
              <span className="font-semibold text-foreground">NVIDIA</span>, and{" "}
              <span className="font-semibold text-foreground">Johns Hopkins University</span>.
            </p>
            <p className="text-muted-foreground">
              Submitted to <span className="font-semibold text-foreground">CVPR 2026</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
