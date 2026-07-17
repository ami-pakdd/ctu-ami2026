export default function WorkshopAAI26Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8 md:p-12 mb-8">
          <div className="inline-block bg-ctu-cyan/10 text-ctu-cyan font-semibold px-4 py-2 rounded-full mb-6">
            AAI-26 Workshop
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ctu-blue mb-6 leading-tight">
            Advanced Artificial Intelligence Systems
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
                  In recent years, Artificial Intelligence (AI) has made remarkable progress, expanding significantly in both theoretical depth and application scope. AAI-26 aims to build a high-quality academic forum where researchers, experts, and industry practitioners can present and exchange the latest research results in modern AI fields.
                </p>
                <p>
                  The Workshop is designed in an open and interdisciplinary manner, focusing on the integration of data-driven learning, knowledge-driven systems, reasoning, and representation learning to create intelligent systems capable of learning, reasoning, and adapting in complex environments.
                </p>
              </div>
            </div>

            {/* Call for Papers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">Call for Papers</h2>
              <p className="text-gray-600 mb-6">
                We warmly invite original, unpublished papers on, but not limited to, the following core topics:
              </p>

              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Artificial Intelligence & Machine Learning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Image, Video, and Signal Processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Language Processing & Large Language Models</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Time Series Analysis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Multimodal AI</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Soft Computing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Knowledge Systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Integrated Machine Learning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Emerging AI Directions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-ctu-cyan mt-1">•</span>
                  <span className="text-gray-700 font-medium">Practical Applications</span>
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
                      <span className="text-red-600 font-bold">August 24, 2026</span>
                      <span className="bg-red-50 text-red-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded border border-red-200 uppercase tracking-wide animate-pulse">
                        Extended
                      </span>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Notification of acceptance:</span>
                  <span>September 24, 2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Camera-ready papers:</span>
                  <span>October 8, 2026</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-semibold text-ctu-blue">Conference date:</span>
                  <span>December 17 - 19, 2026</span>
                </li>
              </ul>
              {/* Submission Button Added Here */}
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
                  <div className="font-semibold text-ctu-blue">A/Prof. Dr. Le Hoang Son</div>
                  <div className="text-sm text-gray-500">Vietnam National University, Hanoi</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Tran Manh Tuan</div>
                  <div className="text-sm text-gray-500">Thuyloi University, Hanoi</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Le Minh Tuan</div>
                  <div className="text-sm text-gray-500">Trade Union University, Hanoi</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Luong Hong Lan</div>
                  <div className="text-sm text-gray-500">Hanoi University of Industry</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}