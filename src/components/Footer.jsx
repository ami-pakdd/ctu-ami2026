export default function Footer() {
  return (
    <footer className="bg-white border-t border-ctu-blue/20 mt-20">
      <div className="container mx-auto py-12 px-4">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left – Conference Identity */}
          <div className="max-w-md text-center md:text-left">
            <p className="text-2xl font-bold text-ctu-blue mb-2">
              AMI 2026
            </p>

            <p className="text-ctu-blue/80 text-sm leading-snug">
              International Conference on Autonomous Machine Intelligence
            </p>

            <p className="text-ctu-blue/70 text-sm mt-1">
              October 29–31, 2026 • Can Tho City, Vietnam
            </p>
          </div>

          {/* Middle – Organizers */}
          <div className="max-w-md text-center">
            <p className="text-ctu-blue/60 text-sm mb-2">
              Organized by
            </p>

            <ul className="space-y-1 text-sm text-ctu-blue/80">
              <li>Can Tho University, Vietnam</li>
              <li>Nantes University, France</li>
              <li>Vietnam National University – Ho Chi Minh City</li>
              <li>Vietnam National University – Hanoi</li>
            </ul>
          </div>

          {/* Right – Contact */}
          <div className="max-w-md text-center md:text-right">
            <p className="text-ctu-blue/60 text-sm mb-2">
              Contact
            </p>

            <p className="text-sm text-ctu-blue/80 leading-snug">
              General Chair: Prof. Hiep Xuan Huynh<br />
              Can Tho University<br />
              <a
                href="mailto:hxhiep@ctu.edu.vn"
                className="text-ctu-blue hover:text-ctu-cyan transition-colors"
              >
                hxhiep@ctu.edu.vn
              </a>
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-4 border-t border-ctu-blue/20 text-center text-sm text-ctu-blue/60">
          <p>
            © 2026 International Conference on Autonomous Machine Intelligence (AMI 2026).
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
