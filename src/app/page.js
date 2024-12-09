'use client'
import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <div className="bg-gray-50">
        <HeroSection />
        <ServiceSection />
        <Card />
        <Testimonials />
        <section className="bg-voile text-white py-16 dark:bg-dark-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 dark:text-dark-text">
              Contact us today and let&apos;s discuss your next big project.
            </p>
            <button className="mt-6 bg-white border border-voile text-voile font-bold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 dark:bg-dark-background dark:text-dark-text">
              <Link href={"/contact"}>Contact Us</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
