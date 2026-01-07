import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Keynote Speakers – AMI 2026",
  description:
    "Keynote speakers of AMI 2026, an international conference on Autonomous Machine Intelligence.",
}

type Keynote = {
  name: string
  affiliation: string
  country: string
  title?: string
  bio?: string
  photo?: string
  status?: "confirmed" | "tentative"
}

export default function KeynotesPage() {
  const keynotes: Keynote[] = [
    // Example structure – keep empty or tentative until confirmed
    // {
    //   name: "Prof. John Doe",
    //   affiliation: "University of Somewhere",
    //   country: "USA",
    //   title: "Towards Autonomous Machine Intelligence",
    //   bio: "Prof. John Doe is a leading researcher in...",
    //   status: "confirmed",
    // },
  ]

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-5xl">

      {/* Page Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          Keynote Speakers
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          AMI 2026 will feature invited keynote speakers who are leading
          experts in autonomous machine intelligence and related fields.
        </p>
      </header>

      {/* Keynotes */}
      {keynotes.length > 0 ? (
        <div className="space-y-16">
          {keynotes.map((k, idx) => (
            <section
              key={idx}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Photo (optional) */}
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
                Photo
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-ctu-blue">
                  {k.name}
                </h2>

                <p className="text-gray-700">
                  {k.affiliation}, {k.country}
                </p>

                {k.status && (
                  <p className="mt-1 text-sm italic text-gray-600">
                    {k.status === "confirmed"
                      ? "Confirmed Keynote Speaker"
                      : "Tentative Keynote Speaker"}
                  </p>
                )}

                {k.title && (
                  <p className="mt-4 font-semibold text-gray-900">
                    Talk Title: {k.title}
                  </p>
                )}

                {k.bio && (
                  <p className="mt-3 text-gray-800 leading-relaxed">
                    {k.bio}
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 italic mt-20">
          Keynote speakers will be announced soon.
        </div>
      )}

      {/* Note */}
      <div className="mt-20 text-sm text-gray-600 text-center">
        More information about keynote talks will be provided once speakers
        are confirmed.
      </div>

    </div>
  )
}
