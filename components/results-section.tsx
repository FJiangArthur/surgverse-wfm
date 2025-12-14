export default function ResultsSection() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-background border-b border-border" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Results</span>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-foreground">Ablation Studies</h2>
        </div>

        {/* Pre-Training vs Post-Training */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-foreground mb-3">Pre-Training vs Post-Training</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/pretrain-vs-post-train.png" alt="Pre-Training vs Post-Training Comparison" className="w-full h-auto" />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quantitatively, the Surg-Consistency Score improves by 0.24 points for full-modality conditioned Transfer1 model and by 5.7% for Predict1 model, indicating enhanced frame-to-frame coherence and stability during long rollouts. This multimodal fusion in Transfer1 yields more stable, geometrically coherent world simulations than single-modality conditioning, demonstrating the effectiveness of structured control signals in maintaining consistent 3D spatial organization during the diffusion process. These results demonstrate the efficacy of domain-specific post-training in bridging the gap between general WFMs and the specialized requirements of robot-assisted surgery.
              </p>
            </div>
          </div>
        </div>

        {/* Data Scalability Study */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-foreground mb-3">Data Scalability Study</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                To assess scalability, we systematically evaluate the impact of training data size on model performance. The Surg-Consistency score increases from 86.43 (zero-shot baseline) to 90.12 (1k training frames) and further to 91.4 (10k training frames), demonstrating that the model effectively leverages additional data to enhance temporal coherence, anatomical fidelity, and realism of tool-tissue interactions.
              </p>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/data-scalability.png" alt="Data Scalability Study" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Training Iteration Study */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Training Iteration Study</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/iteration-study.png" alt="Training Iteration Study" className="w-full h-auto" />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Extended training iterations refine fine-grained details such as instrument geometry and tissue texture consistency across long rollouts. This demonstrates improvement in tool and tissue consistency (e.g., shape of the retrieval bag), and fine details of the tissue when generating long videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
