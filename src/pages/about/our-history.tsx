import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function OurHistory() {
  return (
    <>
      <Head>
        <title>Our History | Accubusiness</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
          <h1 className="text-4xl font-light mb-6 tracking-tight">
            Our History
          </h1>
          <p className="text-gray-700 mb-4">
            Accubusiness began with a simple idea: make tax and bookkeeping
            frictionless and affordable. Over the years, we&apos;ve helped
            thousands of Canadians file accurately, on time, and with
            confidence.
          </p>
          <p className="text-gray-700">
            From our base in Vancouver, we now serve clients nationwide through
            secure online processes, transparent pricing, and friendly service.
          </p>

          <h2 className="text-2xl font-light mt-8 mb-3">Timeline</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>2012 — Accubusiness founded; personal tax returns at $25</li>
            <li>2015 — Added full bookkeeping and payroll services</li>
            <li>2019 — Canada‑wide online filing via secure gateway</li>
            <li>2023 — 180,000+ returns filed and counting</li>
          </ul>

          <h2 className="text-2xl font-light mt-8 mb-3">Our Principles</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Transparent pricing and fast communication</li>
            <li>Simple explanations that help clients decide</li>
            <li>Obsess over accuracy and secure data handling</li>
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}
