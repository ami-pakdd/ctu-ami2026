import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Venue – AMI 2026",
  description:
    "Venue and location information for AMI 2026, held in Hong Kong, China.",
}

export default function VenuePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-20 max-w-5xl">

      {/* Page Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ctu-blue mb-4">
          Conference Venue
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          AMI 2026 will be held in Can Tho City, Vietnam.
        </p>
      </header>

      <div className="space-y-20">

        {/* Venue Overview */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-ctu-blue">
            Location
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Can Tho City is the academic and economic center of the Mekong Delta,
Vietnam. The city offers a welcoming environment for international
researchers and provides convenient access to major Vietnamese cities.
          </p>
        </section>

        {/* Images */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden border border-ctu-blue/20">
            <img
              src="cantho-city.jpg"
              alt="Can Tho city view"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="rounded-xl overflow-hidden border border-ctu-blue/20 bg-gray-50 flex items-center justify-center text-gray-500 text-sm">
            Conference venue image<br />(to be announced)
          </div>
        </section>

        {/* Google Map */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-ctu-blue">
            Map
          </h2>

          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-ctu-blue/20">
            <iframe
              title="Can Tho City Map"
              src="https://www.google.com/maps?q=Can+Tho+City+Vietnam&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-sm text-gray-600">
            The exact conference venue will be announced once finalized.
          </p>
        </section>

        {/* Travel Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-ctu-blue">
            Travel Information
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-lg text-gray-800">
            <li>
              <strong>Airport:</strong> Can Tho International Airport (VCA)
            </li>
            <li>
              <strong>Alternative airports:</strong> Tan Son Nhat International Airport (SGN), Ho Chi Minh City
            </li>
            <li>
              <strong>Public Transport:</strong> Taxi and regional bus services
            </li>
            <li>
              <strong>Visa:</strong> Participants should check Vietnam visa requirements
            </li>
          </ul>
        </section>

        {/* Accommodation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-ctu-blue">
            Accommodation
          </h2>
          <p className="text-lg text-gray-800">
            Information on recommended hotels and accommodation options
            will be provided closer to the conference date.
          </p>
        </section>

      </div>
    </div>
  )
}
