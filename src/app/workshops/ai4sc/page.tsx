export default function WorkshopAI4SCPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8 md:p-12 mb-8">
          <div className="inline-block bg-ctu-cyan/10 text-ctu-cyan font-semibold px-4 py-2 rounded-full mb-6">
            AI4SC 2026 Special Session
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ctu-blue mb-6 leading-tight">
            AI for Smart Cities: Intelligent Systems for Future Cities
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
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">About this Session</h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  This special session focuses on recent advances in Artificial Intelligence (AI) technologies and intelligent systems for future smart cities. As urban environments become increasingly connected, data-driven, and autonomous, AI is playing a key role in improving transportation, infrastructure management, public safety, sustainability, healthcare, and citizen services.
                </p>
                <p>
                  The session aims to bring together researchers and practitioners working on AI-enabled solutions that support efficient, resilient, and human-centered urban environments. It encourages discussions on intelligent systems that integrate AI, IoT, edge computing, multimodal sensing, autonomous systems, and predictive analytics to address real-world smart city challenges.
                </p>
                <p>
                  By fostering interdisciplinary collaboration between academia and industry, this session seeks to advance innovative AI technologies that contribute to safer, smarter, and more sustainable cities of the future.
                </p>
              </div>
            </div>

            {/* Topics of Interest / Call for Papers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">Topics of Interest</h2>
              <p className="text-gray-600 mb-6">
                We welcome high-quality research papers, industrial case studies, and practical deployments on, but not limited to, the following topics:
              </p>

              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI for intelligent transportation & traffic management</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Smart infrastructure monitoring & predictive maintenance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Autonomous systems and robotics for urban environments</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Edge AI and distributed intelligence in smart cities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI-powered IoT and sensor networks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Multimodal sensing and urban data fusion</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI for environmental monitoring and sustainability</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Smart healthcare and assisted living technologies</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI for public safety and emergency response</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Digital twins and virtual city environments</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Federated learning & communication-efficient AI</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI for energy management and smart grids</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Human-centered AI for urban services</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Explainable, trustworthy, and ethical AI</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">AI for smart governance and citizen engagement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">UAVs and autonomous vehicles for urban applications</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Cyber-physical systems & intelligent urban computing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Predictive analytics for smart city operations</span>
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
                  <span>October 29 - 31, 2026</span>
                </li>
              </ul>
              {/* Submission Button */}
              <a href="https://cmt3.research.microsoft.com/AMI2026" target="_blank" rel="noreferrer" className="block">
                <button className="w-full bg-ctu-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-ctu-cyan transition-colors shadow-md shadow-ctu-blue/20">
                  Submit via Microsoft CMT
                </button>
              </a>
            </div>

            {/* Session Organizers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-6">
              <h3 className="text-xl font-bold text-ctu-blue mb-4">Session Chairs</h3>
              <ul className="space-y-5">
                <li>
                  <div className="font-semibold text-ctu-blue">Huynh Kha Tu (Chair)</div>
                  <div className="text-sm text-gray-500">Vietnam National University Ho Chi Minh City, Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Le Duy Tan (Co-Chair)</div>
                  <div className="text-sm text-gray-500">International University - VNU-HCM, Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Nguyen Duc Dung (Co-Chair)</div>
                  <div className="text-sm text-gray-500">Ho Chi Minh City University of Technology - VNU-HCM, Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Huynh Tuong Nguyen (Co-Chair)</div>
                  <div className="text-sm text-gray-500">Industrial University of Ho Chi Minh City, Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Nguyen Tan Viet Tuyen (Co-Chair)</div>
                  <div className="text-sm text-gray-500">University of Southampton, United Kingdom</div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}