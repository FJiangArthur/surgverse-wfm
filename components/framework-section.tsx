"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface PipelineStep {
  id: string
  title: string
  description: string
  details: {
    inputs: string[]
    outputs: string[]
    process: string
  }
}

const pipelineSteps: PipelineStep[] = [
  {
    id: "observations",
    title: "Observations",
    description: "Raw surgical data collection",
    details: {
      inputs: ["Videos", "Images", "Semantics", "Depth Maps", "Actions", "Text"],
      outputs: ["Structured multimodal dataset"],
      process: "Capture and organize surgical scenes with dense annotations",
    },
  },
  {
    id: "data-pipeline",
    title: "Data Pipeline",
    description: "Hybrid real and synthetic data",
    details: {
      inputs: ["Real datasets", "Simulated scenarios"],
      outputs: ["Curated training data"],
      process: "Real Dataset (public sources) + Synthetic Dataset (NVIDIA Isaac Sim) merged via pseudo-labeling (SAM2)",
    },
  },
  {
    id: "training",
    title: "Training Strategy",
    description: "Two-stage post-training",
    details: {
      inputs: ["Foundation models", "Curated data"],
      outputs: ["Fine-tuned WFMs"],
      process: "Stage 1: LoRA adaptation | Stage 2: Multimodal ControlNet training",
    },
  },
  {
    id: "generation",
    title: "World Models",
    description: "Video generation engine",
    details: {
      inputs: ["Control signals", "Camera parameters"],
      outputs: ["Surgical video generation", "Scene prediction"],
      process:
        "Generate coherent, anatomically plausible surgical scenarios with controllable camera and instrument trajectories",
    },
  },
  {
    id: "evaluation",
    title: "Evaluation",
    description: "Comprehensive metrics",
    details: {
      inputs: ["Generated video", "Ground truth"],
      outputs: ["Performance metrics"],
      process: "Surg-Consistency + Geometric Coherence + Pose Accuracy + Clinical Phase Recognition",
    },
  },
  {
    id: "applications",
    title: "Applications",
    description: "Real-world deployment",
    details: {
      inputs: ["Trained models"],
      outputs: ["Data generation", "Prediction", "Camera control"],
      process: "Virtual camera control, scalable synthetic data generation, test-time prediction for dexterity",
    },
  },
]

export default function FrameworkSection() {
  const [expandedStep, setExpandedStep] = useState<string | null>("observations")

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">System Architecture</span>
          <h2 className="text-5xl font-black mt-6 mb-4 text-foreground">Surgverse Framework</h2>
          <div className="w-12 h-1 bg-secondary rounded-full" />
          <p className="text-muted-foreground mt-6">End-to-end pipeline for surgical video world foundation models</p>
        </div>

        <div className="space-y-3 mb-12">
          {pipelineSteps.map((step, idx) => (
            <div key={step.id}>
              <button
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                className={`w-full px-6 py-4 rounded-lg border transition-all text-left flex items-center justify-between ${
                  expandedStep === step.id
                    ? "border-secondary bg-secondary/5"
                    : "border-border bg-card/50 hover:border-secondary/50"
                }`}
              >
                <div>
                  <div className="font-bold text-foreground">{step.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-secondary transition-transform ${expandedStep === step.id ? "rotate-180" : ""}`}
                />
              </button>

              {expandedStep === step.id && (
                <div className="mt-2 p-6 bg-card/50 border border-border rounded-lg animate-slide-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wide">Inputs</div>
                      <ul className="space-y-2">
                        {step.details.inputs.map((input, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-secondary" />
                            {input}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-accent mb-3 uppercase tracking-wide">Process</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.details.process}</p>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wide">Outputs</div>
                      <ul className="space-y-2">
                        {step.details.outputs.map((output, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {idx < pipelineSteps.length - 1 && expandedStep !== step.id && (
                <div className="flex justify-center py-2">
                  <div className="w-0.5 h-3 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
