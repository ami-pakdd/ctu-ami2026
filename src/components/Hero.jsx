export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-ctu-blue/5"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-ctu-blue/20 rounded-full blur-3xl" />
      <div className="absolute top-48 -right-24 w-[360px] h-[360px] bg-ctu-cyan/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 py-28">
        <div className="max-w-4xl">

          {/* Conference Acronym */}
          <h1 className="text-4xl md:text-6xl font-display font-bold text-ctu-blue mb-4">
            AMI 2026
          </h1>

          {/* Full Conference Name */}
          <p className="text-xl md:text-2xl font-semibold text-ctu-blue/90 mb-2">
            International Conference on Autonomous Machine Intelligence
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-ctu-blue/80 font-medium mb-6">
            Autonomous, Predictive, and Self-Supervised Intelligence Systems
          </p>

          {/* Date & Location */}
          <div className="space-y-1 text-lg text-ctu-blue/80 font-medium">
            <p>October 29–31, 2026 • Can Tho City, Vietnam</p>
            <p>1st Edition · Inaugural Conference</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/ctu-ami2026/cfp"
              className="px-6 py-3 bg-ctu-blue text-white font-semibold rounded-xl
                         hover:bg-ctu-cyan transition-all"
            >
              Call for Papers
            </a>

            <a
              href="/ctu-ami2026/submission"
              className="px-6 py-3 border border-ctu-blue text-ctu-blue font-semibold rounded-xl
                         hover:bg-ctu-blue hover:text-white transition-all"
            >
              Submit Paper
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
