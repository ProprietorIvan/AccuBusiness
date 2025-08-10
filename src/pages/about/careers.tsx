import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers | Accubusiness</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
          <h1 className="text-4xl font-light mb-6 tracking-tight">
            Careers at Accubusiness
          </h1>
          <p className="text-gray-700 mb-8">
            We&apos;re building a modern tax and bookkeeping firm focused on
            clear communication, fast turnaround, and pragmatic advice. If you
            love helping clients and simplifying complexity, you&apos;ll feel at
            home here.
          </p>

          <h2 className="text-2xl font-light mb-3">Open Roles</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-1">Seasonal Tax Preparers</h3>
              <p className="text-gray-700 mb-2">
                T1 preparation, slip matching, credits optimization, and client
                communication.
              </p>
              <p className="text-sm text-gray-600">
                Experience with Profile/TaxCycle/DT Max is an asset.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-1">Bookkeepers (Remote/Onsite)</h3>
              <p className="text-gray-700 mb-2">
                Monthly reconciliations, sales tax filings, payroll, and
                year‑end packages.
              </p>
              <p className="text-sm text-gray-600">
                QuickBooks Online/Xero proficiency required.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-1">Client Success Specialists</h3>
              <p className="text-gray-700 mb-2">
                Triage client requests, manage timelines, and keep files moving
                efficiently.
              </p>
              <p className="text-sm text-gray-600">
                Strong writing and organization skills.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-light mb-3">Hiring Process</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-2 mb-8">
            <li>Resume review and short written questionnaire</li>
            <li>30‑minute video interview</li>
            <li>Practical challenge (brief tax/bookkeeping scenario)</li>
            <li>Offer and onboarding</li>
          </ol>

          <h2 className="text-2xl font-light mb-3">Benefits</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Flexible schedules and remote options</li>
            <li>Continuing education support and paid resources</li>
            <li>Clear career paths and mentoring</li>
          </ul>

          <div className="mt-8">
            <p className="text-gray-700">
              Send your resume to{" "}
              <a href="mailto:info@accubusiness.ca" className="underline">
                info@accubusiness.ca
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
