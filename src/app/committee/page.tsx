import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Organizing Committee – AMI 2026",
  description:
    "Organizing and Program Committee of AMI 2026, an international conference on Autonomous Machine Intelligence.",
}

type Member = {
  name: string
  role?: string
  affiliation: string
  country: string
}

export default function CommitteePage() {
  const organizingCommittee: Member[] = [
    {
      name: "Prof. Hiep Xuan Huynh, Ph.D. (HDR)",
      role: "General Chair",
      affiliation: "Can Tho University",
      country: "Vietnam",
    },
  ]

  const programChairs: Member[] = [
    {
      name: "Prof. Hiep Xuan Huynh, Ph.D. (HDR)",
      affiliation: "Can Tho University",
      country: "Vietnam",
    },
    {
      name: "Prof. Fabrice Guillet",
      affiliation: "Nantes University",
      country: "France",
    },
    {
      name: "Prof. Anh Hoang Pham",
      affiliation: "Vietnam National University – Ho Chi Minh City",
      country: "Vietnam",
    },
    {
      name: "Prof. Ngan Thi Tran",
      affiliation: "Vietnam National University – Hanoi",
      country: "Vietnam",
    },
  ]
  
  const advisoryCommittee: Member[] = [
    // {
    //   name: "Prof. ZZZ",
    //   affiliation: "Institute C",
    //   country: "Country",
    // },
  ]

  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-5xl">

      {/* Page Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          Organizing Committee
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          The AMI 2026 conference is organized by an international organizing and program committee representing
leading universities and research institutions in Vietnam and Europe.
        </p>
      </header>

      <div className="space-y-20">

        {/* Organizing Committee */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-8">
            Organizing Committee
          </h2>

          <ul className="space-y-6">
            {organizingCommittee.map((m, idx) => (
              <li key={idx}>
                <p className="font-semibold text-lg text-gray-900">
                  {m.name}
                </p>
                {m.role && (
                  <p className="text-gray-700 italic">
                    {m.role}
                  </p>
                )}
                <p className="text-gray-700">
                  {m.affiliation}, {m.country}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Program Chairs */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-8">
            Program Chairs
          </h2>

          <ul className="space-y-6">
            {programChairs.map((m, idx) => (
              <li key={idx}>
                <p className="font-semibold text-lg text-gray-900">
                  {m.name}
                </p>
                <p className="text-gray-700">
                  {m.affiliation}, {m.country}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Advisory Committee */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-8">
            Advisory Committee
          </h2>

          <p className="text-gray-600 italic">
            The Advisory Committee will be announced in due course.
          </p>

          {/* <ul className="space-y-6">
            {advisoryCommittee.map((m, idx) => (
              <li key={idx}>
                <p className="font-semibold text-lg text-gray-900">
                  {m.name}
                </p>
                <p className="text-gray-700">
                  {m.affiliation}, {m.country}
                </p>
              </li>
            ))}
          </ul> */}
        </section>

        {/* Program Committee */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-6">
            Program Committee
          </h2>

          <p className="text-gray-600 italic">
            The Program Committee will be announced soon.
          </p>
        </section>

      </div>
    </div>
  )
}
