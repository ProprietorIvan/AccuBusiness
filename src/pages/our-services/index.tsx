import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <Head>
        <title>Our Services | Accubusiness</title>
        <meta
          name="description"
          content="Personal, business, and corporate tax services, bookkeeping, payroll, and tax strategies from Accubusiness in Vancouver, BC."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />

        <header className="bg-gray-900 text-white pt-28 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Our Tax Services
            </h1>
            <p className="text-white/80 max-w-3xl">
              Professional, affordable, and fast. We prepare personal, business,
              and corporate tax returns, manage GST/PST, payroll, and
              bookkeeping, and help you plan with smart tax strategies.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-16">
          <section className="mb-12">
            <p className="text-gray-700 max-w-3xl">
              At Accubusiness, our professional tax services focus on your most
              important needs. We prepare personal, business and corporate tax
              returns and handle GST/PST, payroll, and bookkeeping. Our prices
              are among the most competitive in Canada.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Personal Tax Returns</h3>
              <p className="text-gray-600 mb-4">
                Flat rate of $25. New to Canada or complex return? We apply the
                right expertise to maximize your deductions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/our-services/personal-tax-returns"
                  className="text-gray-900 font-medium"
                >
                  Read More
                </Link>
                <Link href="/contact" className="text-gray-900 font-medium">
                  Start Now
                </Link>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Business Tax Returns</h3>
              <p className="text-gray-600 mb-4">
                $75 per business return. We work hard to find every deduction
                and keep you compliant.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/our-services/business-tax-returns"
                  className="text-gray-900 font-medium"
                >
                  Read More
                </Link>
                <Link href="/contact" className="text-gray-900 font-medium">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">
                Corporate Tax Returns
              </h3>
              <p className="text-gray-600 mb-4">
                Starting at $200. Full support including GST/PST, payroll, and
                filings.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/our-services/corporate-tax-returns"
                  className="text-gray-900 font-medium"
                >
                  Read More
                </Link>
                <Link href="/contact" className="text-gray-900 font-medium">
                  Speak to an Advisor
                </Link>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Bookkeeping Services</h3>
              <p className="text-gray-600 mb-3">
                Monthly packages from $50–$150. Financial reporting, bank
                reconciliations, payroll, and year-end support.
              </p>
              <Link
                href="/our-services/bookkeeping-services"
                className="text-gray-900 font-medium"
              >
                Read More
              </Link>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">
                Tax Strategies & Planning
              </h3>
              <p className="text-gray-600 mb-3">
                We monitor tax implications and structure your affairs to
                optimize deductions and minimize tax year-round.
              </p>
              <Link
                href="/our-services/tax-strategies"
                className="text-gray-900 font-medium"
              >
                Read More
              </Link>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Newcomers to Canada</h3>
              <p className="text-gray-600">
                Filing for the first time in Canada can be tricky. We file your
                first and last returns online and ensure nothing is missed.
              </p>
              <a
                href="https://accufile.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium"
              >
                File Online via Accufile
              </a>
              <div className="mt-2">
                <Link
                  href="/our-services/newcomers-to-canada"
                  className="text-gray-900 font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Online Filing</h3>
              <p className="text-gray-600">
                Convenient remote filing. Sign electronically and pay online —
                no office visit required.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-light mb-3">
              Free Consultations. Competitive Pricing.
            </h2>
            <p className="text-gray-600 mb-6">
              We keep our pricing simple and transparent so you always know what
              to expect. Book a free consultation to review your situation.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-md"
              >
                Request a Call Back
              </Link>
              <a
                href="https://accufile.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-gray-300"
              >
                File Online
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OurServices;
