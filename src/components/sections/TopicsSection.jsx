export default function TopicsSection() {
  const topics = [
    {
      title: 'Foundations of Autonomous Intelligence',
      items: [
        'Self-supervised learning and predictive representation learning',
        'World models and joint embedding predictive architectures (JEPA)',
        'Energy-based models and latent variable approaches',
        'Learning under limited or no human supervision',
      ],
    },
    {
      title: 'Models, Architectures, and Systems',
      items: [
        'Autonomous perception–prediction–action loops',
        'Multimodal and temporal representation learning',
        'Hierarchical and memory-augmented models',
        'Learning from video, sensor streams, and embodied interaction',
      ],
    },
    {
      title: 'Embodied and Applied Autonomous Systems',
      items: [
        'Autonomous robotics and embodied AI',
        'Autonomous agents and decision-making systems',
        'Human–AI interaction in autonomous settings',
        'Real-world deployment and evaluation of autonomous systems',
      ],
    },
  ]

  return (
    <section id="topics" className="scroll-mt-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-display font-bold text-ctu-blue mb-3">
          Topics of Interest
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-ctu-blue/80">
          AMI 2026 invites original research contributions on the foundations,
          models, and applications of autonomous machine intelligence.
          The following list highlights representative topics of interest.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-ctu-blue/20
                       shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4 text-ctu-blue">
              {topic.title}
            </h3>

            <ul className="space-y-2">
              {topic.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start text-ctu-blue/90">
                  <span className="text-ctu-cyan mr-2">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <a
          href="/ctu-ami2026/cfp"
          className="inline-flex items-center px-6 py-3
                     border border-ctu-blue text-ctu-blue font-semibold rounded-xl
                     hover:bg-ctu-blue hover:text-white transition-all"
        >
          View Full Call for Papers
        </a>
      </div>
    </section>
  )
}
