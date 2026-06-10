export default function WorkshopKEIS2026Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8 md:p-12 mb-8">
          <div className="inline-block bg-ctu-cyan/10 text-ctu-cyan font-semibold px-4 py-2 rounded-full mb-6">
            KEIS 2026 Workshop
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ctu-blue mb-6 leading-tight">
            Knowledge-Driven and Explainable Intelligent Systems
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
                  The proposed workshop "Knowledge-Driven and Explainable Intelligent Systems (KEIS 2026)" aims to provide an interdisciplinary forum for researchers, practitioners, and industry experts working on intelligent systems that integrate learning, reasoning, uncertainty modeling, and explainability.
                </p>
                <p>
                  Recent advances in machine learning, foundation models, and intelligent data analytics have significantly improved the capability of AI systems across diverse domains. However, challenges related to interpretability, reliability, uncertainty handling, and trustworthy decision-making remain critical for deploying AI systems in real-world environments.
                </p>
                <p>
                  This workshop focuses on emerging approaches that combine knowledge-driven intelligence, explainable AI, soft computing, and hybrid learning systems to develop transparent, adaptive, and human-centered intelligent solutions. The workshop welcomes both theoretical advances and practical applications across interdisciplinary AI domains.
                </p>
              </div>
            </div>

            {/* Topics of Interest */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">Topics of Interest</h2>
              <p className="text-gray-600 mb-6">
                Topics of interest include, but are not limited to:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Intelligent Data Analytics</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Data mining and knowledge discovery</li>
                    <li>Machine learning and deep learning</li>
                    <li>Data-driven intelligent systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Explainable and Trustworthy AI</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Explainable AI (XAI)</li>
                    <li>Interpretable and reliable AI systems</li>
                    <li>Human-centered artificial intelligence</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Knowledge-Driven and Soft Computing Systems</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Knowledge-based and reasoning systems</li>
                    <li>Rough sets, fuzzy systems, and uncertainty modeling</li>
                    <li>Soft computing and hybrid intelligent systems</li>
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
                  <span className="font-semibold text-ctu-blue">Workshop Dates:</span>
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

            {/* Workshop Organizers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-6">
              <h3 className="text-xl font-bold text-ctu-blue mb-4">Workshop Organizers</h3>
              <ul className="space-y-5">
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Quang-Thinh Bui</div>
                  <div className="text-sm text-gray-500">Tien Giang University</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Hung Nguyen</div>
                  <div className="text-sm text-gray-500">Ho Chi Minh City University of Education</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Ngo Duc Luu</div>
                  <div className="text-sm text-gray-500">Bac Lieu University</div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}