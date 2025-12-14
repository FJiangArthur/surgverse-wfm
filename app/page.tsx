"use client"
import HeroSection from "@/components/hero-section"
import AbstractSection from "@/components/abstract-section"
import ProblemSection from "@/components/problem-section"
import FrameworkSection from "@/components/framework-section"
import ResultsSection from "@/components/results-section"
import MetricsSection from "@/components/metrics-section"
import ApplicationsSection from "@/components/applications-section"
import TechnicalSection from "@/components/technical-section"
import FutureDirectionsSection from "@/components/future-directions"
import ResultsTableSection from "@/components/results-table-section"
import CitationSection from "@/components/citation-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <AbstractSection />
      <ProblemSection />
      <FrameworkSection />
      <ResultsSection />
      <MetricsSection />
      <ApplicationsSection />
      <TechnicalSection />
      <FutureDirectionsSection />
      <ResultsTableSection />
      <CitationSection />
      <Footer />
    </main>
  )
}
