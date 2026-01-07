import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AMI 2026",
  description:
    "About AMI 2026 – The 1st International Conference on Autonomous Machine Intelligence.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-4xl">

      {/* Page Title */}
      <header className="mb-14 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          About AMI 2026
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          The 1st International Conference on Autonomous Machine Intelligence (AMI 2026) is an inaugural international forum dedicated to the study of autonomous intelligent systems.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-12 text-lg leading-relaxed text-gray-800">

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Overview
          </h2>
          <p>
            The International Conference on Autonomous Machine Intelligence (AMI 2026)
            is the inaugural edition of a new international scientific conference series
            dedicated to the study of intelligent systems that can learn, reason,
            and act autonomously in complex and dynamic environments.
          </p>
          <p className="mt-4">
            AMI 2026 brings together researchers and practitioners from academia and industry
            working across machine learning, artificial intelligence, robotics,
            and autonomous systems to exchange ideas and present research in autonomous machine intelligence.
          </p>
        </section>

        {/* Motivation */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Motivation and Background
          </h2>
          <p>
            AMI 2026 provides a forum for discussing the theoretical foundations, algorithmic principles, and system-level designs that enable autonomy, adaptability, and scalable intelligent systems.
          </p>
        </section>

        {/* Scope */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Scope and Objectives
          </h2>
          <p className="mb-4">
            The conference covers a coherent set of topics of international relevance,
            with an emphasis on both foundational research and real-world deployment.
            Key objectives of AMI 2026 include:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Advancing theories and principles of autonomous learning and intelligence</li>
            <li>Exploring architectures for perception, prediction, reasoning, and decision-making</li>
            <li>Investigating world models, predictive learning, and multimodal intelligence</li>
            <li>Showcasing applications in autonomous robotics and real-world systems</li>
            <li>Encouraging interdisciplinary collaboration between academia and industry</li>
          </ul>
        </section>

        {/* Community & Organization */}
        <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            International Community
          </h2>
          <p>
            AMI 2026 is organized by Can Tho University in collaboration with Nantes Université, France; Vietnam National University – Ho Chi Minh City; and Vietnam National University – Hanoi.
          </p>
          <p className="mt-4">
            The conference is supported by an international Program Committee
            comprising experts from academia and industry across Asia-Pacific,
            Europe, and North America, ensuring a rigorous peer-review process
            and high scientific quality.
          </p>
        </section>

        {/* Relation to PAKDD */}
        {/* <section>
          <h2 className="text-2xl font-bold text-ctu-blue mb-4">
            Relation to PAKDD and AMI–PAKDD Workshop
          </h2>
          <p>
            AMI 2026 is an independent international conference that shares strong
            intellectual connections with the data mining and knowledge discovery community.
            These connections are reflected in the AMI–PAKDD 2026 workshop,
            which provides a focused forum for research at the intersection of
            autonomous machine intelligence and knowledge discovery.
          </p>
          <p className="mt-4">
            While AMI 2026 and PAKDD 2026 maintain distinct scopes, objectives,
            and organizational structures, the workshop highlights the natural
            overlap between the two research communities and fosters scientific
            exchange across related areas.
          </p>
        </section> */}
      </div>
    </div>
  )
}
