import Countdown from "@/components/Countdown"

export default function DatesSection() {
  const dates = [
    { event: 'Paper Submission Deadline', date: 'June 1, 2026' },
    { event: 'Acceptance Notification', date: 'August 15, 2026' },
    { event: 'Camera-Ready Papers Due', date: 'October 15, 2026' },
    {
      event: 'Conference Dates',
      date: 'October 29–31, 2026',
      highlight: true,
    },
  ]

  return (
    <section id="dates" className="scroll-mt-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-display font-bold text-ctu-blue mb-3">
          Important Dates
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-ctu-blue/80">
          Please note the following important deadlines for AMI 2026.
          All deadlines are firm and submissions must be received on time.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-ctu-blue/20 shadow-sm">
        <div className="p-8">

          <div className="space-y-6">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 ${
                  idx < dates.length - 1
                    ? 'border-b border-ctu-blue/20'
                    : ''
                }`}
              >
                <span
                  className={`font-semibold text-ctu-blue ${
                    item.highlight ? 'text-xl' : 'text-lg'
                  }`}
                >
                  {item.event}
                </span>

                <span
                  className={`font-bold text-ctu-blue ${
                    item.highlight ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {item.date}
                </span>
              </div>
            ))}
          </div>

          {/* Countdown to submission deadline */}
          <div className="mt-8">
            <Countdown targetDate="2026-06-01T23:59:59Z" />
            <p className="mt-2 text-sm text-ctu-blue/70 text-center">
              Submission deadline: June 1, 2026 at 23:59 (Anywhere on Earth)
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
