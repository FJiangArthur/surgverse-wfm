export default function ResultsSection() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-background border-b border-border" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Results</span>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-foreground">Ablation Studies</h2>
        </div>

        {/* Data Scalability Study */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-foreground mb-3">Data Scalability Study</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/data-scalability.png" alt="Data Scalability Study" className="w-full h-auto" />
            </div>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Surg-Consistency and Surg-Geometric Coherence scores improve with increasing training data size during post-training of WFMs on surgical videos. Qualitatively, this enhances anatomical fidelity (e.g., no industrial tools) and temporal stability (e.g., reduced random surgical tool appearance).
              </p>
            </div>
          </div>
        </div>

        {/* Training Iteration Study */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Training Iteration Study</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Increasing training iterations shows improvement in tool and tissue consistency (e.g., shape of the retrieval bag), and fine details of the tissue when generating long rollouts.
              </p>
            </div>
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <img src="/iteration-study.png" alt="Training Iteration Study" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
