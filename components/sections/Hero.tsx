import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Engineering Manager &
            <br />
            Fullstack Developer |
            <br />
            Product-Led Growth Specialist
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Building scalable systems, driving product experimentation, and
            leading high-performing teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Explore My Work
            </Link>
            <Link
              href="#contact"
              className="inline-block border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image
              src="/images/lukas-avatar.jpg"
              alt="Lukas Havlicek Avatar"
              width={400}
              height={400}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
