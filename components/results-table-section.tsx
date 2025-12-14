export default function ResultsTableSection() {
  const results = [
    { model: "Predict1 (0-shot)", surgConsistency: "86.43", geoCoherence: "—", rpeTransmm: "—", rpeRotdeg: "—" },
    { model: "Predict1 (Post-Train)", surgConsistency: "91.4", geoCoherence: "—", rpeTransmm: "—", rpeRotdeg: "—" },
    { model: "Transfer1", surgConsistency: "95.81", geoCoherence: "—", rpeTransmm: "—", rpeRotdeg: "—" },
    { model: "Transfer1 (Post-Train)", surgConsistency: "96.05", geoCoherence: "—", rpeTransmm: "—", rpeRotdeg: "—" },
    { model: "Veo (Google)", surgConsistency: "96.72", geoCoherence: "1.5", rpeTransmm: "1.2", rpeRotdeg: "1.8" },
    { model: "CogVideo", surgConsistency: "—", geoCoherence: "1.9e-4", rpeTransmm: "2.1", rpeRotdeg: "0.3" },
    { model: "Wan2.1", surgConsistency: "—", geoCoherence: "2.7e-4", rpeTransmm: "3.5", rpeRotdeg: "0.1" },
    {
      model: "Ours (Anchor Video)",
      surgConsistency: "—",
      geoCoherence: "5.57e-4",
      rpeTransmm: "0.055",
      rpeRotdeg: "0.06",
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Comprehensive Results</span>
          <h2 className="text-4xl font-bold mt-4">Quantitative Comparison</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-secondary/50">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Model</th>
                <th className="text-right py-4 px-4 font-semibold text-secondary">Surg-Consistency ↑</th>
                <th className="text-right py-4 px-4 font-semibold text-accent">Geo-Coherence ↑</th>
                <th className="text-right py-4 px-4 font-semibold text-accent-secondary">RPE Trans (mm) ↓</th>
                <th className="text-right py-4 px-4 font-semibold text-accent-secondary">RPE Rot (deg) ↓</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-border transition-colors ${
                    row.model.includes("Ours") ? "bg-secondary/10 hover:bg-secondary/15" : "hover:bg-card/80"
                  }`}
                >
                  <td className="py-4 px-4 font-semibold text-foreground">
                    {row.model}
                    {row.model.includes("Ours") && <span className="ml-2 text-xs text-secondary">⭐ BEST</span>}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span
                      className={row.surgConsistency === "—" ? "text-muted-foreground" : "text-secondary font-semibold"}
                    >
                      {row.surgConsistency}
                      {row.surgConsistency !== "—" && "%"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={row.geoCoherence === "—" ? "text-muted-foreground" : "text-accent font-semibold"}>
                      {row.geoCoherence}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span
                      className={
                        row.rpeTransmm === "—" ? "text-muted-foreground" : "text-accent-secondary font-semibold"
                      }
                    >
                      {row.rpeTransmm}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span
                      className={
                        row.rpeRotdeg === "—" ? "text-muted-foreground" : "text-accent-secondary font-semibold"
                      }
                    >
                      {row.rpeRotdeg}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 glassmorphism rounded-lg border border-secondary/20">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Legend:</span> Surg-Consistency measures temporal coherence
            using a surgical video encoder (higher is better). Geo-Coherence is geometric reprojection error (lower is
            better). RPE measures camera pose deviation in translation (mm) and rotation (degrees).
          </p>
        </div>
      </div>
    </section>
  )
}
