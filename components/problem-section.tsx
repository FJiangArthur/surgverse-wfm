export default function ProblemSection() {
  return (
    <section className="relative py-24 px-6 lg:px-8 bg-card/50 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase">The Challenge</span>
          <h2 className="text-5xl font-black mt-6 text-foreground">Surgical Complexity Problem</h2>
          <div className="w-12 h-1 bg-secondary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "Complex Lighting Dynamics",
              description:
                "Specular highlights and dynamic shadows create challenging illumination conditions that previous models struggle to replicate with surgical precision.",
            },
            {
              title: "Non-Rigid Tissue Deformations",
              description:
                "Biological tissues undergo complex, continuous deformations that demand sophisticated physical simulation capabilities.",
            },
            {
              title: "Instrument Occlusions",
              description:
                "Surgical instruments frequently occlude tissue and anatomical features, requiring robust handling of partial visibility and spatial reasoning.",
            },
            {
              title: "Clinical-Resolution Fidelity",
              description:
                "Surgical applications demand high-resolution, anatomically precise video generation for training, planning, and decision support.",
            },
          ].map((challenge, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 border border-border rounded-lg group-hover:border-secondary/50 transition-colors" />
              <div className="relative p-8 bg-background">
                <h3 className="text-lg font-bold mb-3 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border-l-4 border-secondary bg-card/50">
          <p className="text-base text-foreground leading-relaxed">
            <span className="font-bold">The Gap:</span> General-purpose video models lack the surgical-specific training
            and specialized evaluation metrics needed for clinical-grade surgical scene understanding and generation.
          </p>
        </div>
      </div>
    </section>
  )
}
