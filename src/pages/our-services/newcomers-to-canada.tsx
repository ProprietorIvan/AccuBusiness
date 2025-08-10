import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Newcomers() {
  return (
    <>
      <Head>
        <title>Newcomers to Canada | Accubusiness</title>
        <meta
          name="description"
          content="New to Canada? We prepare first and final returns, assess residency, handle world income and register benefits. Online filing supported."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Newcomers to Canada
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              We specialize in first‑year and last‑year filings, ensuring your
              residency status, world income and credits are correctly reported
              and you’re set up for benefits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Before You Arrive/After You Leave
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Entry year: what counts as world income and what doesn’t
                </li>
                <li>Eligible moving costs and what receipts are required</li>
                <li>Provincial health, benefits, and school forms alignment</li>
              </ul>
              <ul className="list-disc ml-5 space-y-2">
                <li>Exit year: deemed disposition, elections, and NR4 slips</li>
                <li>Closing bank/investment accounts and record retrieval</li>
                <li>Keeping CRA My Account active from abroad</li>
              </ul>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">What We Handle</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Determine residency entry/exit dates</li>
                <li>Report world income where required</li>
                <li>Claim moving, tuition, medical and donation credits</li>
                <li>Register for CRA My Account and benefits</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Documents</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Passport/permit details and SIN</li>
                <li>Employment income (T4) and foreign income statements</li>
                <li>Rent receipts/property tax where applicable</li>
                <li>Tuition (T2202), medical, donations</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Process</h3>
              <ol className="list-decimal ml-5 text-gray-700 space-y-2">
                <li>Share docs via secure upload or email</li>
                <li>We prepare and send a summary for approval</li>
                <li>Sign electronically; we e‑file to CRA</li>
              </ol>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Ask a Question
            </Link>
            <a
              className="px-6 py-3 rounded-md border"
              href="https://accufile.ca"
              target="_blank"
              rel="noreferrer"
            >
              Start Online
            </a>
            <Link href="/our-services" className="px-6 py-3 rounded-md border">
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
