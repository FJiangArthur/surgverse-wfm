export default function FutureDirectionsSection() {
  const directions = [
    {
      title: "Cross-Industry Data Collaboration",
      description:
        "Establish partnerships with medical institutions worldwide to expand surgical domain coverage and enable multi-center validation",
      icon: "🌐",
    },
    {
      title: "Enhanced Multimodal Conditioning",
      description:
        "Integrate force feedback, kinematics, and haptic signals to create fully immersive surgical simulations with tactile realism",
      icon: "🎯",
    },
    {
      title: "Closed-Loop Surgical Planning",
      description:
        "Enable real-time adaptation of surgical plans based on counterfactual predictions and patient-specific anatomical variations",
      icon: "🔄",
    },
    {
      title: "Augmented Dexterity via Counterfactuals",
      description:
        "Generate hypothetical surgical scenarios to train surgeons in handling rare complications and edge cases safely",
      icon: "🚀",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Vision</span>
          <h2 className="text-4xl font-bold mt-4">Future Directions</h2>
          <p className="text-muted-foreground mt-4">Research roadmap for advancing surgical AI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directions.map((direction, idx) => (
            <div
              key={idx}
              className="glassmorphism p-8 rounded-lg border border-secondary/20 hover:border-secondary/50 transition-all"
            >
              <div className="text-3xl mb-4">{direction.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-3">{direction.title}</h3>
              <p className="text-muted-foreground">{direction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
