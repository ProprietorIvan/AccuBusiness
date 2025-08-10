import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Clock, Users, Phone, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const stats = [
    {
      number: "180,000+",
      label: "Tax Returns Filed",
      icon: Shield,
    },
    {
      number: "24-48hrs",
      label: "Typical Turnaround",
      icon: Clock,
    },
    {
      number: "Canada-wide",
      label: "Service Coverage",
      icon: Users,
    },
  ];

  const principles = [
    {
      title: "Simple & Transparent",
      description:
        "Clear pricing, no hidden fees, and straightforward communication about your tax situation.",
    },
    {
      title: "Professional Excellence",
      description:
        "Our team follows CRA guidance and industry best practices to ensure accurate, compliant filing.",
    },
    {
      title: "Client-Focused Service",
      description:
        "We work at your pace, whether you prefer in-person meetings or fully remote collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/photos/homepage/background.mp4"
            alt="Accubusiness Office"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight tracking-tight">
              About Accubusiness
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
              Affordable tax preparation, bookkeeping, and business advisory for
              individuals and companies across Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="tel:+18009896507"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-700"
              >
                <Phone className="w-5 h-5" />
                Call: 1-800-989-6507
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-extralight text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 leading-tight">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We believe tax preparation should be straightforward, affordable,
              and stress-free. That&apos;s why we&apos;ve built our practice
              around clear communication and predictable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {principles.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 leading-tight">
              Common Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  How quickly can you prepare a return?
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Most personal tax returns can be prepared within 24–48 hours
                  once we have all information. Business and corporate timelines
                  vary based on complexity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Are you certified?
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Our preparers are experienced professionals with tax and
                  bookkeeping credentials. We follow CRA guidance and industry
                  best practices.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  What areas do you cover?
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We serve clients in Vancouver and across Canada via secure
                  online processes and email.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  How do I get started?
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Book a free consultation and we&apos;ll outline the documents
                  needed for your personal, business, or corporate tax file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 leading-tight">
            Ready to simplify your taxes?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Contact our team today to get started with a free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              href="tel:+18009896507"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 border border-gray-700"
            >
              <Phone className="w-5 h-5" />
              Call Now: 1-800-989-6507
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-gray-600 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
