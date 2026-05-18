export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('bg1.jpeg')",
        }}
      />

      {/* Overlay để chữ dễ đọc */}
      <div className="absolute inset-0 bg-[var(--overlay-dark)]" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 py-32">
        <div className="max-w-4xl text-white">

          {/* Conference Acronym */}
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            AMI 2026
          </h1>

          {/* Full Conference Name */}
          <p className="text-xl md:text-2xl font-semibold text-white/90 mb-2">
            International Conference on Autonomous Machine Intelligence
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 font-medium mb-6">
            Autonomous, Predictive, and Self-Supervised Intelligence Systems
          </p>

          {/* Date & Location */}
          <div className="space-y-1 text-lg text-white/80 font-medium">
            <p>October 29–31, 2026 • Can Tho City, Vietnam</p>
            <p>1st Edition · Inaugural Conference</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/2026/cfp"
              className="px-6 py-3 bg-ctu-cyan  font-semibold rounded-xl
                         hover:bg-white hover:text-ctu-blue transition-all"
            >
              Call for Papers
            </a>

            <a
              href="/2026/submission"
              className="px-6 py-3 border border-white text-white font-semibold rounded-xl
                         hover:bg-white hover:text-ctu-blue transition-all"
            >
              Submit Paper
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
