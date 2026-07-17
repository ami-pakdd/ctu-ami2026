export default function WorkshopQAISAGINPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8 md:p-12 mb-8">
          <div className="inline-block bg-ctu-cyan/10 text-ctu-cyan font-semibold px-4 py-2 rounded-full mb-6">
            QAI-SAGIN Workshop
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ctu-blue mb-6 leading-tight">
            Quantum-Inspired Artificial Intelligence for Autonomous SAGINs and Non-Terrestrial Networks
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
                  The next generation of wireless infrastructure is no longer a homogeneous terrestrial network. The emerging Space-Air-Ground Integrated Network (SAGIN) paradigm fuses Low Earth Orbit (LEO) satellite constellations, high-altitude platforms, UAV swarms, and terrestrial cells into a single programmable fabric, while Non-Terrestrial Networks (NTN) have become a first-class component of the 3GPP standards.
                </p>
                <p>
                  Classical machine learning often struggles in this regime due to scarce data, unreliable gradients, and NP-hard optimization problems. Quantum-inspired methods—including quantum-inspired evolutionary computation, tensor networks, and hybrid quantum-classical neural architectures—offer a complementary toolbox. This workshop serves as the venue to articulate, debate, and advance the integration of quantum-inspired AI into autonomous SAGINs and NTN.
                </p>
              </div>
            </div>

            {/* Topics of Interest / Call for Papers */}
            <div className="bg-white rounded-2xl shadow-sm border border-ctu-blue/10 p-8">
              <h2 className="text-2xl font-bold text-ctu-blue mb-4">Topics of Interest</h2>
              <p className="text-gray-600 mb-6">
                We solicit original research papers, position papers, and reproducible case studies on, but not limited to, the following topics:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Quantum-inspired learning and optimisation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Quantum-inspired evolutionary computation for network resource allocation</li>
                    <li>Quantum-inspired tensor networks and matrix-product-state models</li>
                    <li>Amplitude/phase encoding for compressed representation of spatio-temporal traffic</li>
                    <li>Hybrid quantum-classical neural architectures (variational circuits, QNN, QCNN)</li>
                    <li>Beyond-MLP architectures (KANs) with quantum-inspired parameterisation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Autonomous SAGINs and NTN</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>LEO satellite handover prediction and beam management</li>
                    <li>UAV swarm trajectory planning and energy-aware coordination</li>
                    <li>Joint communication-computing offloading at the NTN edge</li>
                    <li>Network slicing and orchestration across space-air-ground tiers</li>
                    <li>Digital twins of multi-orbit constellations</li>
                    <li>Semantic and goal-oriented communication for bandwidth-scarce links</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Trustworthy and secure QI-AI for SAGINs</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Federated and split learning over intermittent satellite/UAV links</li>
                    <li>QKD-secured and post-quantum-secured learning pipelines</li>
                    <li>Intrusion detection on satellite and DPU-equipped edge nodes</li>
                    <li>Robustness, fairness and explainability of QI models in safety-critical scenarios</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-ctu-blue mb-3">Benchmarks, datasets and tooling</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Open datasets for SAGIN traffic, satellite channels, UAV telemetry</li>
                    <li>Reproducible simulation frameworks</li>
                    <li>Evaluation methodology for QI-AI under non-stationarity</li>
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
                  <div className="font-semibold text-ctu-blue">Dr. Minh Tuan Pham</div>
                  <div className="text-sm text-gray-500">University of Science and Technology (DUT-UDN), Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Phuc Hao Do</div>
                  <div className="text-sm text-gray-500">Danang Architecture University (DAU), Vietnam</div>
                </li>
                <li>
                  <div className="font-semibold text-ctu-blue">Dr. Nang Hung Van Nguyen</div>
                  <div className="text-sm text-gray-500">University of Science and Technology (DUT-UDN), Vietnam</div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}