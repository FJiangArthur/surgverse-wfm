"use client"

import { Layers, Database, Target, Microscope } from "lucide-react"

export default function AbstractSection() {
  return (
    <section id="abstract" className="relative py-24 px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-bold tracking-wider text-secondary uppercase">Research Overview</span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-foreground">Abstract</h2>
        </div>

        {/* Main abstract text */}
        <div className="max-w-5xl mb-20">
          <div className="text-lg leading-relaxed text-foreground space-y-6 border-l-4 border-secondary pl-8">
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
            <p className="text-muted-foreground italic">
              Our approach demonstrates that surgical domain adaptation yields significant improvements in scene
              consistency (96.7%), geometric coherence (2.1× improvement), and precise tool pose control (0.06° error),
              unlocking new possibilities for surgical training, planning, and augmented intelligence.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Three Core Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                number: "01",
                title: "Multimodal Data Curation Pipeline",
                description:
                  "Comprehensive surgical video dataset combining simulation and real-world data with semantic segmentation, depth estimation, and robotic action annotations.",
                highlights: ["500K+ frames", "8 semantic classes", "Stereoscopic depth", "Tool trajectories"],
              },
              {
                icon: Layers,
                title: "Efficient Post-Training Strategy",
                number: "02",
                description:
                  "LoRA-based adaptation and multimodal ControlNet enabling high-fidelity surgical generation while preserving foundational capabilities.",
                highlights: ["LoRA rank-128", "Multi-input ControlNet", "Surgical priors", "8-16 A100 GPUs"],
              },
              {
                icon: Target,
                number: "03",
                title: "SurgBench Evaluation Suite",
                description:
                  "First clinically-grounded benchmark with four novel metrics assessing surgical-specific video quality and controllability.",
                highlights: ["Surg-Consistency", "Geometric Coherence", "Pose Control", "Phase Recognition"],
              },
            ].map((item) => (
              <div key={item.number} className="group">
                <div className="bg-white border-2 border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-secondary transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="text-4xl font-bold text-secondary/20">{item.number}</div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs font-medium bg-muted text-foreground px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem statement callout */}
        <div className="bg-muted border-l-4 border-secondary rounded-r-xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Microscope className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-foreground">The Challenge</h4>
              <p className="text-foreground leading-relaxed mb-4">
                Existing video generation models (CogVideoX, Veo 2, Wan2.1) achieve impressive general quality but
                fundamentally fail on surgical scenes due to:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>
                    <strong>Anatomical inconsistency</strong> – organs morph unnaturally between frames
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>
                    <strong>Geometric inaccuracy</strong> – stereo depth and camera parameters violated
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>
                    <strong>Poor tool control</strong> – inability to precisely manipulate surgical instruments
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span>
                    <strong>Limited domain data</strong> – surgical videos are scarce and privacy-constrained
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
