export default function AboutSection() {
  const highlights = [
    'Keynote talks by invited researchers in autonomous and self-supervised AI',
    'Rigorous peer-reviewed technical paper sessions',
    'PhD Forum and poster sessions for emerging research',
    'Industry track highlighting real-world autonomous systems',
    'Awards for best paper and best student paper'
  ]

  return (
    <section id="about" className="scroll-mt-24">
      <div className="max-w-4xl">

        {/* Section Title */}
        <h2 className="text-3xl font-display font-bold mb-6 text-ctu-blue">
          About AMI 2026
        </h2>

        {/* Description */}
        <div className="space-y-4 text-lg leading-relaxed text-ctu-blue/90">
          <p>
            The International Conference on Autonomous Machine Intelligence (AMI 2026)
            is an international forum dedicated to the study of autonomous,
            self-supervised, and predictive learning systems.
            The conference aims to bring together researchers and practitioners
            to advance the foundations and applications of next-generation
            intelligent systems capable of learning and acting with minimal human supervision.
          </p>

          <p>
            AMI 2026 focuses on emerging paradigms such as world models,
            energy-based models, and joint embedding predictive architectures (JEPA),
            which emphasize autonomy, representation learning, and long-term prediction.
            By fostering interdisciplinary exchange, the conference seeks to bridge
            theoretical advances with practical deployments in real-world environments.
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-8 p-6 bg-ctu-blue/10 border-l-4 border-ctu-blue rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-ctu-blue">
            Conference Highlights
          </h3>

          <ul className="space-y-3">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-ctu-blue mr-2 font-bold">•</span>
                <span className="text-ctu-blue/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
