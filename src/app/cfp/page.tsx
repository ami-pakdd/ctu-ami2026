import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Call for Papers – AMI 2026",
  description:
    "Call for Papers for AMI 2026 – The 1st International Conference on Autonomous Machine Intelligence.",
}

export default function CFPPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl">

      {/* Page Header */}
      <header className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          Call for Papers
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          The 1st International Conference on Autonomous Machine Intelligence (AMI 2026)
          invites high-quality, original research contributions advancing the
          foundations and applications of autonomous intelligence.
        </p>
      </header>

      <div className="space-y-14 text-lg leading-relaxed text-gray-800">

        {/* Scope */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Scope of the Conference
          </h2>
          <p>
            Autonomous Machine Intelligence focuses on systems that can learn, predict, reason, and act autonomously in complex and dynamic environments.
            Recent advances in self-supervised learning, world models, predictive
            learning, and energy-based architectures have accelerated progress
            toward this vision.
          </p>
          <p className="mt-4">
            AMI 2026 provides a focused international forum for presenting
            novel theories, algorithms, system architectures, and real-world
            applications that advance autonomous machine intelligence.
          </p>
        </section>

        {/* Topics */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Topics of Interest
          </h2>
          <p>
            Topics of interest include, but are not limited to:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Autonomous Machine Intelligence</li>
            <li>Self-supervised and predictive learning</li>
            <li>World models and representation learning</li>
            <li>Energy-based models and joint embedding predictive architectures (JEPA)</li>
            <li>Multimodal and embodied intelligence</li>
            <li>Perception–prediction–action loops</li>
            <li>Autonomous decision-making systems</li>
            <li>Autonomous robotics and intelligent agents</li>
            <li>Real-world deployment and evaluation of autonomous systems</li>
          </ul>
        </section>

        {/* Important Dates */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Important Dates
          </h2>
          <ul className="space-y-3">
            <li className="flex flex-wrap items-baseline gap-x-2">
              <strong className="whitespace-nowrap">Paper submission deadline:</strong>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-base">
                <span className="line-through text-gray-400 whitespace-nowrap">June 1, 2026</span>
                <span className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-red-600 font-bold">July 1, 2026</span>
                  <span className="bg-red-50 text-red-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-red-200 uppercase tracking-wide animate-pulse">
                    Extended
                  </span>
                </span>
              </span>
            </li>
            <li><strong>Acceptance notification:</strong> August 15, 2026</li>
            <li><strong>Camera-ready papers due:</strong> October 15, 2026</li>
            <li><strong>Conference dates:</strong> October 29–31, 2026</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            All deadlines are firm and follow the Anywhere on Earth (AoE) convention.
          </p>
        </section>

        {/* Submission & Review */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Submission and Review
          </h2>
          <p>
            AMI 2026 invites original research and application papers. Submissions must be
            written in English and prepared using the Springer LNCS/CCIS one-column
            conference proceedings format.
          </p>
          <p className="mt-2">
            All submissions must be original and not under review or published elsewhere.
          </p>
          <p className="mt-4">
            Each submission will undergo a rigorous double-blind peer-review process.
            Every paper will be reviewed by at least three qualified reviewers and
            evaluated based on originality, technical quality, relevance, significance,
            and clarity.
          </p>
        </section>

        {/* Publication */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Publication
          </h2>
          <p>
            Accepted papers will be published in the conference proceedings by Springer in the Communications in Computer and Information Science (CCIS) series, subject to satisfactory peer review and compliance with Springer’s publication policies.
          </p>
        </section>

        {/* Presentation */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Presentation Requirement
          </h2>
          <p>
            At least one author of each accepted paper must register for the
            conference and present the paper in person at AMI 2026.
          </p>
        </section>

      </div>
    </div>
  )
}