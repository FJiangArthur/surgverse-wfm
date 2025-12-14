"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface TechnicalDetail {
  id: string
  title: string
  content: string[]
  keyPoints: string[]
}

const technicalDetails: TechnicalDetail[] = [
  {
    id: "data-pipeline",
    title: "Data Curation Pipeline",
    content: [
      "Surgverse combines simulation and real surgical data to create a comprehensive training dataset.",
      "Simulation: NVIDIA Isaac Sim with proprietary surgical assets for procedurally generated scenarios with known ground truth",
      "Real Data: Public surgical datasets (Cholec80, OSATS) augmented with pseudo-labeling via SAM2 (Segment Anything Model 2)",
      "Multimodal Annotations: Each frame includes semantic segmentation, depth maps, camera poses, instrument classes, and VLM-generated captions with human verification",
    ],
    keyPoints: [
      "Real + Synthetic hybrid dataset (1k-10k+ annotated frames)",
      "SAM2-assisted pseudo-labeling for real data",
      "VLM caption verification for semantic grounding",
    ],
  },
  {
    id: "post-training",
    title: "Post-Training Strategy",
    content: [
      "Surgverse employs a two-stage approach for efficient surgical domain adaptation:",
      "Stage 1 - LoRA Adaptation: Low-rank adapters on DiT (Diffusion Transformer) attention layers for parameter-efficient fine-tuning",
      "Stage 2 - Multimodal ControlNet: Separate control branches for depth maps, semantic segmentation, and camera pose parameters",
      "Visibility-Aware Output Masking (Equation 2): Masks invalid regions based on depth and semantic validity to improve coherence",
      "Anchor-ControlNet: Specializes in camera trajectory control for smooth endoscopic viewpoint transitions",
    ],
    keyPoints: [
      "LoRA rank decomposition for efficient adaptation",
      "Multimodal conditioning for fine-grained control",
      "Visibility-aware masking prevents artifacts",
    ],
  },
  {
    id: "architecture",
    title: "Model Architecture",
    content: [
      "Surgverse builds upon the Cosmos-Transfer1 paradigm for efficient world model adaptation:",
      "3D-VAE Latent Space: Captures both spatial and temporal information in compressed latent representations",
      "Flow-Matching Diffusion: Generative model in latent space with flow-based objective for stable training",
      "DiT Backbone: Diffusion Transformer with resolution-aware embeddings for multi-scale generation",
      "Efficient Inference: Post-trained weights are much smaller than full retraining, enabling practical deployment",
    ],
    keyPoints: [
      "Cosmos-Transfer1 paradigm for adaptation",
      "3D-VAE + Flow-matching diffusion",
      "Resolution-aware DiT backbone",
    ],
  },
  {
    id: "evaluation-details",
    title: "Evaluation Methodology",
    content: [
      "SurgBench provides comprehensive evaluation through multiple complementary metrics:",
      "Temporal Consistency: Surgical video encoder computes frame-to-frame similarity (S-CS)",
      "Geometric Correctness: Dense point tracking via optical flow and 3D reprojection (S-GC)",
      "Control Accuracy: Pose deviation measurement using geodesic and L2 distances (P-CS)",
      "Semantic Validity: Downstream surgical phase classification accuracy (SPR)",
      "All metrics weighted for clinical relevance and sensitivity to surgical-specific artifacts",
    ],
    keyPoints: ["Multi-scale metric evaluation", "Surgical encoder supervision", "Downstream task validation"],
  },
]

export default function TechnicalSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Deep Dive</span>
          <h2 className="text-4xl font-bold mt-4">Technical Details</h2>
          <p className="text-muted-foreground mt-4">
            For researchers seeking implementation and methodological specifics
          </p>
        </div>

        <div className="space-y-4">
          {technicalDetails.map((detail) => (
            <div
              key={detail.id}
              className="border border-border rounded-lg overflow-hidden glassmorphism hover:border-secondary/50 transition-all"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === detail.id ? null : detail.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{detail.title}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-secondary transition-transform ${
                    expandedSection === detail.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {expandedSection === detail.id && (
                <div className="px-6 pb-6 border-t border-secondary/20 animate-float-in">
                  <div className="space-y-4 mb-6">
                    {detail.content.map((paragraph, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                    <div className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wide">
                      Key Technical Points
                    </div>
                    <ul className="space-y-2">
                      {detail.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-secondary font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
