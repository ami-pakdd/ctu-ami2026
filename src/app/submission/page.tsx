import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Submission – AMI 2026",
  description:
    "Submission guidelines for AMI 2026 – The International Conference on Autonomous Machine Intelligence.",
}

export default function SubmissionPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-5xl">

      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          Submission Guidelines
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Authors are invited to submit original and unpublished research papers
          presenting significant contributions to Autonomous Machine Intelligence.
        </p>
      </header>

      <div className="space-y-16">

        {/* Submission System */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Submission System
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            All papers must be submitted electronically through the official
            conference submission system.
            <br />
            <span className="italic text-gray-600">
              The submission link will be announced soon.
            </span>
          </p>
        </section>

        {/* Paper Types */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Paper Types and Length
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-800">
            <li>
              <strong>Full papers:</strong> 12–15 pages
            </li>
            <li>
              <strong>Short papers:</strong> 6–11 pages
            </li>
          </ul>

          <p className="mt-3 text-gray-700">
            Page limits inclusive of references and appendices.
          </p>
        </section>

        {/* Formatting */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Formatting Guidelines
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Submissions must be written in English and prepared according to the official
conference proceedings format.
          </p>

          <p className="mt-2 text-gray-700">
            Detailed formatting instructions and author kits will be provided once the
submission system opens.
          </p>
        </section>

        {/* Review Process */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Review Process
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            All submissions will undergo a rigorous <strong>double-blind peer-review</strong> process. Each paper will be reviewed by at least three qualified reviewers
            and evaluated based on originality, technical quality, relevance, clarity,
            experimental validation, and potential impact.
          </p>
        </section>

        {/* Policies */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Important Policies
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-800">
            <li>Submissions must be original and not under review elsewhere.</li>
            <li>Authors must ensure anonymity in the submitted manuscript.</li>
            <li>Papers not complying with formatting or anonymity requirements may be desk-rejected.</li>
            <li>All accepted papers will be subject to plagiarism checking.</li>
          </ul>
        </section>

        {/* Presentation */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Presentation & Registration
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            For each accepted paper, at least one author must register for the
            conference and present the paper in person at AMI 2026.
          </p>
        </section>

        {/* Publication */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Publication
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Accepted papers will be published in the official conference proceedings of
AMI 2026, subject to final approval.
            <br />
            Detailed publication information will be announced after the review process.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pt-10">
          <div className="inline-block px-8 py-3 rounded-xl bg-gray-300 text-gray-700 font-semibold cursor-not-allowed">
            Submission System – Coming Soon
          </div>
        </section>

      </div>
    </div>
  )
}
