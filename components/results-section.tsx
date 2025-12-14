function PlaceholderDisplay({ label }: { label: string }) {
  return (
    <div className="border border-border bg-card/50 rounded-lg overflow-hidden hover:border-secondary/50 transition-colors">
      <div className="aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Coming Soon</div>
      </div>
      <div className="p-3 border-t border-border">
        <h4 className="font-medium text-foreground text-sm text-center">{label}</h4>
      </div>
    </div>
  )
}

export default function ResultsSection() {
  return (
    <section className="relative py-16 px-4 lg:px-8 bg-background border-b border-border" id="results">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Results</span>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-foreground">Quantitative Comparisons</h2>
        </div>

        {/* Pre-Training vs Post-Training */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">Pre-Training vs Post-Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PlaceholderDisplay label="Real (Ground Truth)" />
            <PlaceholderDisplay label="Pre-trained (Zero-shot)" />
            <PlaceholderDisplay label="Post-trained (Surgverse)" />
          </div>
        </div>
      </div>
    </section>
  )
}
