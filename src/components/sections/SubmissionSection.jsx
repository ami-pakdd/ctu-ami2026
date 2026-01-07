export default function SubmissionSection() {
  const SUBMISSION_LINK = null // to be announced

  const sections = [
    {
      title: "Submission System",
      content: (
        <>
          Paper submission will be handled through an online submission system.
          The official submission link will be announced soon.
        </>
      ),
    },
    {
      title: "Paper Format",
      content: (
        <>
          Submitted papers must be written in English and prepared according to the official conference proceedings format.
          <br />
          Detailed formatting instructions and author kits will be provided once the
          submission system opens.
        </>
      ),
    },
    {
      title: "Paper Length",
      content: (
        <>
          Page limits will be specified in the Call for Papers.
          All page limits will include references and appendices.
        </>
      ),
    },
    {
      title: "Review Process",
      content: (
        <>
          All submissions will undergo a rigorous double-blind peer review process.
          Papers will be evaluated based on originality, technical quality, relevance,
          significance, and clarity.
        </>
      ),
    },
    {
      title: "Publication",
      content: (
        <>
          Accepted papers will be published in the official conference proceedings of AMI 2026, subject to final approval.
          <br />
          Further publication details will be announced in due course.
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
          <span className="inline-block px-8 py-3 rounded-xl bg-gray-300 text-gray-700 font-semibold cursor-not-allowed">
            Submission System – Coming Soon
          </span>
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
