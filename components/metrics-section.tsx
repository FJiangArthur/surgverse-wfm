"use client"

import { useState } from "react"

interface Metric {
  id: string
  name: string
  shortName: string
  description: string
  formula: string
  explanation: string
  relevance: string
}

const surgBenchMetrics: Metric[] = [
  {
    id: "surg-consistency",
    name: "Surg-Consistency Score",
    shortName: "S-CS",
    description: "Measures temporal consistency using surgical video pretrained encoder",
    formula: "S-CS = mean(cos_similarity(V_t, V_t+1))",
    explanation:
      "Uses a surgical video encoder to extract frame representations, then measures cosine similarity between adjacent frames. Higher scores indicate smoother, more coherent video generation.",
    relevance:
      "Critical for surgical applications - inconsistencies between frames can confuse surgeons during training or planning",
  },
  {
    id: "geometric-coherence",
    name: "Surg-Geometric Coherence",
    shortName: "S-GC",
    description: "Dense point tracking reveals trajectory accuracy and 3D consistency",
    formula: "S-GC = 1 - mean(reprojection_error)",
    explanation:
      "Tracks sparse keypoints across generated frames using dense optical flow and reprojects them into 3D space. Measures reprojection error to quantify 3D geometric stability.",
    relevance:
      "Ensures that surgical anatomy maintains spatial consistency across time - crucial for instrument guidance and tissue deformation realism",
  },
  {
    id: "pose-control",
    name: "Pose Controllability Score",
    shortName: "P-CS",
    description: "Measures camera pose precision and control accuracy",
    formula: "P-CS = distance(predicted_pose, target_pose)",
    explanation:
      "Combines rotational geodesic distance (for camera orientation) and translational L2 distance. Measures how accurately the model respects camera trajectory inputs.",
    relevance:
      "Essential for augmented situational awareness - surgeons need precise camera control for optimal visualization during procedures",
  },
  {
    id: "surgical-phase",
    name: "Surgical Phase Recognition",
    shortName: "SPR",
    description: "Downstream task: surgical phase classification accuracy",
    formula: "SPR = accuracy(classifier(generated_video))",
    explanation:
      "Trains a temporal classifier to predict surgical phases (setup, main, closing) from generated videos. Evaluates if model captures procedurally coherent sequences.",
    relevance:
      "Validates that generated videos maintain surgical workflow semantics - important for training and decision support applications",
  },
]

export default function MetricsSection() {
  const [selectedMetric, setSelectedMetric] = useState<string>("surg-consistency")

  const selectedMetricData = surgBenchMetrics.find((m) => m.id === selectedMetric)

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-card/50 border-b border-border" id="metrics">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Evaluation</span>
          <h2 className="text-5xl font-black mt-6 mb-4 text-foreground">SurgBench Metrics</h2>
          <div className="w-12 h-1 bg-secondary rounded-full" />
          <p className="text-muted-foreground mt-6">
            Novel clinically-informed evaluation framework for surgical video generation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {surgBenchMetrics.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`p-4 rounded-lg border transition-all text-left ${
                selectedMetric === metric.id
                  ? "border-secondary bg-secondary/5"
                  : "border-border bg-background hover:border-secondary/50"
              }`}
            >
              <div className="text-xs font-bold text-secondary mb-2 uppercase">{metric.shortName}</div>
              <h3 className="font-bold text-foreground text-sm">{metric.name}</h3>
              <p className="text-xs text-muted-foreground mt-2">{metric.description}</p>
            </button>
          ))}
        </div>

        {selectedMetricData && (
          <div className="p-8 bg-background border border-border rounded-lg animate-slide-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{selectedMetricData.name}</h3>

                <div className="mb-8">
                  <div className="text-xs font-bold text-secondary mb-3 uppercase tracking-wide">Formula</div>
                  <div className="bg-card/50 p-4 rounded-lg font-mono text-sm text-muted-foreground border border-border">
                    {selectedMetricData.formula}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-foreground mb-3 uppercase tracking-wide">How It Works</div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{selectedMetricData.explanation}</p>
                </div>
              </div>

              <div className="bg-card/50 border border-border rounded-lg p-8">
                <div className="text-xs font-bold text-secondary mb-4 uppercase tracking-wide">Clinical Relevance</div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{selectedMetricData.relevance}</p>

                {selectedMetricData.id === "surg-consistency" && (
                  <div className="space-y-3 mt-8 pt-6 border-t border-border">
                    <div className="text-xs font-bold text-foreground uppercase">Results</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pre-trained Model</span>
                        <span className="font-bold text-secondary">86.43%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transfer 1 (Post-train)</span>
                        <span className="font-bold text-secondary">96.05%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Surgverse (Post-train)</span>
                        <span className="font-bold text-secondary">96.7%</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMetricData.id === "geometric-coherence" && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-xs font-bold text-foreground uppercase mb-2">Achievement</div>
                    <p className="text-sm text-muted-foreground">
                      2x improvement through depth-conditioned generation and visibility-aware output masking
                    </p>
                  </div>
                )}

                {selectedMetricData.id === "pose-control" && (
                  <div className="space-y-3 mt-8 pt-6 border-t border-border">
                    <div className="text-xs font-bold text-foreground uppercase">Surgverse Achievement</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RPE Translation</span>
                        <span className="font-bold text-secondary">±0.055 mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">RPE Rotation</span>
                        <span className="font-bold text-secondary">±0.06°</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
