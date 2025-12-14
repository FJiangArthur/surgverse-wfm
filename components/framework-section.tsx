export default function FrameworkSection() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-background border-b border-border" id="method">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Method</span>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-foreground">Surgverse Framework</h2>
        </div>

        {/* Data Pipeline Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Hybrid Data Curation Pipeline</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Training high-fidelity World Foundation Models requires massive datasets of video paired with rich conditioning signals. We developed a hybrid data curation pipeline that combines:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Simulation-based Generation</h4>
                  <p className="text-xs text-muted-foreground">
                    High-fidelity surgical assets in NVIDIA Isaac Sim provide dense annotations—semantic segmentation, depth maps, and precise instrument kinematics—perfectly aligned with video frames.
                  </p>
                </div>
                <div className="p-4 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm mb-2">Real Surgical Video Adaptation</h4>
                  <p className="text-xs text-muted-foreground">
                    Large-scale corpora from public surgical datasets with pseudo-labeling via foundation models (SAM2, depth estimation) fine-tuned on endoscopic data.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/data-pipeline.png" alt="Data Pipeline" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Two-Stage Training Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Two-Stage Post-Training Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-card/50 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary font-bold text-sm flex items-center justify-center">1</span>
                <h4 className="font-semibold text-foreground">Domain Adaptation via LoRA</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adapt the base diffusion transformer to capture surgical-specific details—specular reflections, tissue textures, and smoke dynamics—using Low-Rank Adaptation on attention layers, conditioned on text captions.
              </p>
            </div>
            <div className="p-5 bg-card/50 border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-secondary/20 text-secondary font-bold text-sm flex items-center justify-center">2</span>
                <h4 className="font-semibold text-foreground">Multimodal Control Alignment</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Train auxiliary ControlNet adapters for precise control over camera viewpoint and scene geometry. Includes Anchor-ControlNet for camera trajectories with visibility-aware output masking.
              </p>
            </div>
          </div>
        </div>

        {/* Model Architecture Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Model Architecture</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Surgverse builds upon the Cosmos-Transfer1 paradigm for efficient world model adaptation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-card/50 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground text-sm mb-2">3D-VAE Latent Space</h4>
                <p className="text-xs text-muted-foreground">
                  Captures both spatial and temporal information in compressed latent representations.
                </p>
              </div>
              <div className="p-4 bg-card/50 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground text-sm mb-2">Flow-Matching Diffusion</h4>
                <p className="text-xs text-muted-foreground">
                  Generative model in latent space with flow-based objective for stable training.
                </p>
              </div>
              <div className="p-4 bg-card/50 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground text-sm mb-2">DiT Backbone</h4>
                <p className="text-xs text-muted-foreground">
                  Diffusion Transformer with resolution-aware embeddings for multi-scale generation.
                </p>
              </div>
              <div className="p-4 bg-card/50 border border-border rounded-lg">
                <h4 className="font-semibold text-foreground text-sm mb-2">Efficient Inference</h4>
                <p className="text-xs text-muted-foreground">
                  Post-trained weights are much smaller than full retraining, enabling practical deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SurgBench Section */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">SurgBench: Surgical WFM Benchmark</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/3d-eval.png" alt="3D Evaluation - Dense Point Tracking" className="w-full h-auto" />
              <p className="text-xs text-muted-foreground p-3 border-t border-border">
                Dense point tracking for geometric coherence evaluation. Tracked points overlaid on first frame (red) and last frame (blue).
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                A benchmark designed to assess surgical video generation through domain-adapted metrics that capture clinical validity:
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm">Surg-Consistency Score</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Feature similarity between adjacent frames using surgical video pretrained encoders.
                  </p>
                </div>
                <div className="p-3 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm">Geometric Coherence Score</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Dense point tracking to quantify geometric drift and reprojection error under camera motion.
                  </p>
                </div>
                <div className="p-3 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm">Pose Controllability Score</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Deviation between generated camera poses and input pose commands.
                  </p>
                </div>
                <div className="p-3 bg-card/50 border border-border rounded-lg">
                  <h4 className="font-semibold text-foreground text-sm">Phase Recognition Accuracy</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Downstream surgical phase recognition performance as a measure of clinical relevance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
