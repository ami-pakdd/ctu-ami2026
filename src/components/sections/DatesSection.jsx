import Countdown from "@/components/Countdown"

export default function DatesSection() {
  const dates = [
    { 
      event: 'Paper Submission Deadline', 
      date: 'July 1, 2026',
      originalDate: 'June 1, 2026',
      isExtended: true 
    },
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
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 gap-y-2 ${
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

                {/* Xử lý hiển thị ngày - Chống rớt dòng lỗi font */}
                {item.isExtended ? (
                  <div className="flex flex-wrap items-center sm:justify-end gap-x-2 gap-y-1">
                    <span className="line-through text-gray-400 text-sm md:text-base whitespace-nowrap">
                      {item.originalDate}
                    </span>
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-red-600 font-bold text-lg md:text-xl">{item.date}</span>
                      <span className="bg-red-50 text-red-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-red-200 uppercase tracking-wide animate-pulse">
                        Extended
                      </span>
                    </div>
                  </div>
                ) : (
                  <span
                    className={`font-bold text-ctu-blue whitespace-nowrap ${
                      item.highlight ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {item.date}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Countdown to submission deadline - Đã đổi Target sang 2026-07-01 */}
          <div className="mt-8">
            <Countdown targetDate="2026-07-01T23:59:59Z" />
            <div className="mt-2 text-sm text-ctu-blue/70 text-center flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5">
              <span>Submission deadline:</span>
              <span className="line-through text-gray-400">June 1, 2026</span>
              <span className="text-red-600 font-semibold">July 1, 2026</span>
              <span>at 23:59 (Anywhere on Earth)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}