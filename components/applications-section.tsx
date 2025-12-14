export default function ApplicationsSection() {
  const applications = [
    {
      id: "camera-control",
      title: "Virtual Camera Control",
      subtitle: "Enhanced Situational Awareness",
      description:
        "Generate endoscope trajectories and surgical scene visualizations from arbitrary camera viewpoints and poses.",
      useCases: [
        "Surgeon training with dynamic viewpoint control",
        "Preoperative planning with patient-specific anatomy",
        "Intraoperative augmented visualization systems",
      ],
      impact: "Enables new forms of interactive surgical education and planning tools",
    },
    {
      id: "data-gen",
      title: "Scalable Data Generation",
      subtitle: "Synthetic Surgical Scenarios",
      description:
        "Generate high-quality surgical video data for rare procedures, edge cases, and anatomical variations.",
      useCases: [
        "Data augmentation for surgical AI training",
        "Edge case scenario generation",
        "Anatomical variation synthesis",
      ],
      impact: "Addresses data scarcity in specialized surgical procedures and rare pathologies",
    },
    {
      id: "prediction",
      title: "Test-Time Prediction",
      subtitle: "Augmented Dexterity",
      description: "Predict future surgical scenes and instrument positions to support intraoperative decision-making.",
      useCases: [
        "Model predictive control for robotic systems",
        "Look-ahead visualization for surgeons",
        "Counterfactual outcome prediction",
      ],
      impact: "Enhances surgical precision and safety through predictive guidance",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Clinical & Research Applications
          </span>
          <h2 className="text-4xl font-bold mt-4">Real-World Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="glassmorphism p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all flex flex-col"
            >
              <div className="mb-4">
                <div className="text-sm font-semibold text-secondary mb-1">{app.subtitle}</div>
                <h3 className="text-xl font-bold text-foreground">{app.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6 flex-1">{app.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-accent mb-2 uppercase tracking-wide">Use Cases</div>
                  <ul className="space-y-2">
                    {app.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1">→</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-secondary/20">
                  <p className="text-sm font-semibold text-foreground">{app.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
