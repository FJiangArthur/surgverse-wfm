export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-foreground mb-4">Surgverse</h4>
            <p className="text-sm text-muted-foreground">
              Video World Foundation Models for Augmented Situational Awareness and Dexterity in Robot-Assisted
              Surgeries
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#results" className="hover:text-secondary transition-colors">
                  View Results
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-secondary transition-colors">
                  SurgBench Metrics
                </a>
              </li>
              <li>
                <a href="#citation" className="hover:text-secondary transition-colors">
                  Cite This Work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Institutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Intuitive Surgical</li>
              <li>NVIDIA</li>
              <li>Johns Hopkins University</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>Surgverse | Submitted to CVPR 2026 | Built with research-first design principles</p>
        </div>
      </div>
    </footer>
  )
}
