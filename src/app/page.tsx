import Hero from "@/components/Hero"

import AboutSection from "@/components/sections/AboutSection"
import TopicsSection from "@/components/sections/TopicsSection"
import DatesSection from "@/components/sections/DatesSection"
import SubmissionSection from "@/components/sections/SubmissionSection"
import SponsorsSection from "@/components/sections/SponsorsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      {/* Conference Identity */}
      <Hero />

      <div className="container mx-auto px-4 md:px-8 space-y-24 py-20">

        {/* About AMI (high-level overview) */}
        <AboutSection />

        {/* Topics of Interest (summary) */}
        <TopicsSection />

        {/* Important Dates */}
        <DatesSection />

        {/* Submission CTA */}
        <SubmissionSection />

        {/* Partners & Publication */}
        <SponsorsSection />

        {/* Contact */}
        <ContactSection />

      </div>
    </>
  )
}
