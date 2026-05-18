export default function SubmissionSection() {
  const SUBMISSION_LINK = "https://cmt3.research.microsoft.com/AMI2026"

  const sections = [
    {
      title: "Submission System",
      content: (
        <>
          All papers must be submitted electronically via the official Microsoft CMT
          submission system:
          <br />
          <a
            href={SUBMISSION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctu-blue hover:text-ctu-cyan font-semibold"
          >
            {SUBMISSION_LINK}
          </a>
        </>
      ),
    },
    {
      title: "Paper Format",
      content: (
        <>
          <p>
            Submissions must be written in English and prepared using the Springer LNCS/CCIS
            one-column conference proceedings format. Papers must be original and not under
            review elsewhere.
          </p>
        </>
      ),
    },
    {
      title: "Paper Length",
      content: (
        <>
          The proceedings will primarily consist of full papers (typically 12 to 15 pages
          in the Springer CCIS format). A limited number of short or poster papers
          (minimum 6 to 11 pages) may also be included.
          All page limits include references and appendices.
        </>
      ),
    },
    {
      title: "Review Process",
      content: (
        <>
          All submissions will undergo a rigorous and competitive double-blind peer review process.
          Papers will be evaluated based on originality, technical quality, relevance,
          significance, and clarity.
        </>
      ),
    },
    {
      title: "Publication",
      content: (
        <>
          Accepted papers will be published in the AMI 2026 conference proceedings
          by Springer in the Communications in Computer and Information Science (CCIS) series,
          subject to satisfactory peer review and compliance with Springer’s publication policies.
        </>
      ),
    },
    {
      title: "Presentation Requirement",
      content: (
        <>
          At least one author of each accepted paper must register for the conference
          and present the paper in person at AMI 2026.
        </>
      ),
    },
  ]

  return (
    <section id="submission" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Submission Guidelines
      </h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-ctu-blue/20 shadow-sm">
        <div className="space-y-8">
          {sections.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-ctu-blue mb-2">
                {item.title}
              </h3>
              <div className="text-gray-800 leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={SUBMISSION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl bg-ctu-blue text-white font-semibold hover:bg-ctu-cyan transition"
          >
            Submit Your Paper
          </a>
        </div>
      </div>

      {/* Notes */}
      <div className="max-w-3xl mx-auto mt-10 bg-ctu-blue/5 p-6 rounded-xl border-l-4 border-ctu-blue">
        <p className="text-ctu-blue font-semibold text-lg mb-2">
          Important Notes
        </p>
        <ul className="space-y-2 text-gray-800">
          <li>• All deadlines will be announced in the Call for Papers.</li>
          <li>• Papers must comply with anonymity requirements.</li>
          <li>• Submissions not following formatting rules may be rejected without review.</li>
        </ul>
      </div>
    </section>
  )
}
