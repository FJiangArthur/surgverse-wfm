import { Layers, Database, Target } from "lucide-react"

export default function AbstractSection() {
  return (
    <section id="abstract" className="relative py-16 px-4 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span className="text-sm font-bold tracking-wider text-secondary uppercase">Research Overview</span>
          <h2 className="text-3xl font-bold mt-4 mb-4 text-foreground">Abstract</h2>
        </div>

        {/* Main abstract text */}
        <div className="max-w-5xl mb-12">
          <div className="text-base leading-relaxed text-foreground space-y-4 border-l-4 border-secondary pl-6">
            <p>
              <span className="font-semibold">Video world foundation models (WFMs)</span> offer realistic physical
              simulation through video generation, enabling applications like autonomous driving and robotics. However,
              surgical applications demand unprecedented levels of visual fidelity, geometric precision, and action
              controllability—requirements unmet by existing general-purpose models.
            </p>
            <p>
              We present <span className="font-bold text-secondary">Surgverse</span>, the first specialized video world
              foundation model for robot-assisted surgery. Through systematic post-training of high-resolution video
              diffusion models on multimodal surgical data, we achieve state-of-the-art performance across four novel
              surgical-specific metrics.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Database,
              number: "01",
              title: "Multimodal Data Pipeline",
              description:
                "Hybrid surgical dataset combining simulation and real-world data with semantic segmentation, depth, and action annotations.",
            },
            {
              icon: Layers,
              title: "Two-Stage Post-Training",
              number: "02",
              description:
                "LoRA-based domain adaptation followed by multimodal ControlNet training for precise surgical generation.",
            },
            {
              icon: Target,
              number: "03",
              title: "SurgBench Evaluation",
              description:
                "Clinically-grounded benchmark with four novel metrics for surgical-specific video quality assessment.",
            },
          ].map((item) => (
            <div key={item.number} className="bg-white border border-border rounded-lg p-6 hover:border-secondary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-2xl font-bold text-secondary/30">{item.number}</span>
              </div>
              <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
