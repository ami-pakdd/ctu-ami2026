export default function ContactSection() {
  return (
    <section id="contact" className="mb-20 scroll-mt-24">
      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Contact Information
      </h2>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-ctu-blue/20 shadow-sm text-center">

        <p className="text-lg text-gray-800 mb-4">
          For inquiries regarding submissions, program, or organization, please contact:
        </p>

        <p className="text-xl font-bold text-ctu-blue">
          Prof. Hiep Xuan Huynh, Ph.D. (HDR)
        </p>

        <p className="text-gray-700 mb-1">
          General Chair, AMI 2026
        </p>

        <p className="text-gray-700 mb-3">
          Can Tho University, Vietnam
        </p>

        <a
          href="mailto:hxhiep@ctu.edu.vn"
          className="text-lg font-medium text-ctu-blue hover:text-ctu-cyan transition-colors"
          aria-label="Email contact"
        >
          hxhiep@ctu.edu.vn
        </a>

        <div className="mt-6 text-sm text-gray-700">
          <p>Conference Website:</p>
          <a
            href="https://ami-pakdd.github.io/ctu-ami2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctu-blue hover:text-ctu-cyan"
          >
            https://ami-pakdd.github.io/ctu-ami2026
          </a>
        </div>

      </div>
    </section>
  );
}
