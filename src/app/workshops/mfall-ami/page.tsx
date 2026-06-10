export default function WorkshopMFALLPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8 md:p-12 mb-8">
          <div className="inline-block bg-ctu-cyan/10 text-ctu-cyan font-semibold px-4 py-2 rounded-full mb-6">
            Special Workshop
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ctu-blue mb-6 leading-tight">
            Multimodal, Federated, Agentic, and Lifelong Learning for Autonomous Machine Intelligence
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-ctu-cyan">📅</span> Date: Oct 29 - 31, 2026
            </div>
            <div className="flex items-center gap-2">
              <span className="text-ctu-cyan">📍</span> Location: Can Tho City, Vietnam
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-8">

            {/* About this Workshop */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">About this Workshop</h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  The proposed workshop "Multimodal, Federated, Agentic, and Lifelong Learning for Autonomous Machine Intelligence" aims to explore emerging foundations, models, and systems for building truly autonomous intelligent machines capable of learning, reasoning, and acting over long time horizons with minimal human supervision.
                </p>
                <p>
                  Recent advances in self-supervised learning, world models have opened new directions toward autonomous intelligence. At the same time, the rise of agentic Al, multi-agent systems, large language and vision models, and federated learning introduces new challenges in representation learning, coordination, memory, and continual adaptation.
                </p>
              </div>
            </div>

            {/* Topics of Interest / Call for Papers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">Topics of Interest </h2>
              <p className="text-gray-600 mb-6">
                Topics of interest include, but are not limited to:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Multimodal and Federated Learning</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Multimodal representation learning (vision-language-sensor-action)</li>
                    <li>Federated and decentralized learning for autonomous agents</li>
                    <li>Representation alignment and drift in distributed systems</li>
                    <li>Privacy-preserving learning for autonomous intelligence</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Agentic and Multi-Agent Learning</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Agentic Al architectures beyond classical reinforcement learning</li>
                    <li>Multi-agent coordination, communication, and emergence</li>
                    <li>Representation learning for agent memory, planning, and reasoning</li>
                    <li>Collective and distributed intelligence in autonomous systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Lifelong and Continual Learning</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Continual and lifelong learning without task boundaries</li>
                    <li>Catastrophic forgetting and stability-plasticity trade-offs</li>
                    <li>Open-world learning and novelty detection</li>
                    <li>Lifelong adaptation in non-stationary environments</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Important Dates */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-6">
              <h3 className="text-xl font-bold text-ctu-blue mb-4">Important Dates</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Paper Submission:</span>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm">                    
                    <span className="line-through text-gray-400 whitespace-nowrap">
                      June 1, 2026
                    </span>                    
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-red-600 font-bold">July 1, 2026</span>
                      <span className="bg-red-50 text-red-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-red-200 uppercase tracking-wide animate-pulse">
                        Extended
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Acceptance Notification:</span>
                  <span>August 15, 2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Camera-Ready Due:</span>
                  <span>October 15, 2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Conference Dates:</span>
                  <span>October 29-31, 2026</span>
                </li>
              </ul>
              <a href="https://cmt3.research.microsoft.com/AMI2026" target="_blank" rel="noreferrer" className="block">
                <button className="w-full bg-ctu-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-ctu-cyan transition-colors shadow-md shadow-ctu-blue/20">
                  Submit via Microsoft CMT
                </button>
              </a>
            </div>

            {/* Workshop Co-Chairs */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-6">
              <h3 className="text-xl font-bold text-ctu-blue mb-4">Workshop Co-Chairs</h3>
              <ul className="space-y-5">
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Ngo-Ho Anh-Khoi</div>
                  <div className="text-sm text-gray-500">Nam Can Tho University, Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Guillaume SAES</div>
                  <div className="text-sm text-gray-500">Givaudan, France</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Hong-Lan BOTTERMAN</div>
                  <div className="text-sm text-gray-500">Capgemini Invent France, France</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Assoc. Prof. Sasmita Padhy</div>
                  <div className="text-sm text-gray-500">VIT Bhopal University, India</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Prof. Pon Harshavardhanan</div>
                  <div className="text-sm text-gray-500">VIT Bhopal University, India</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Prof. George DAIS</div>
                  <div className="text-sm text-gray-500">Rajagiri College of Social Sciences, India</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Prof. Sajimon ABRAHAM</div>
                  <div className="text-sm text-gray-500">Mahatma Gandhi University, India</div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}