import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Bookkeeping() {
  return (
    <>
      <Head>
        <title>Bookkeeping Services | Accubusiness</title>
        <meta
          name="description"
          content="Bookkeeping packages from $50–$150 per month. Reconciliations, payroll, monthly financials, and year-end ready records."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Bookkeeping Services
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              Monthly packages from{" "}
              <span className="font-medium">$50–$150</span>. We keep your books
              clean and year‑end ready—so tax time is fast and stress‑free.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Package Levels</h2>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-2">Starter (from $50)</h3>
                <p>
                  Monthly reconciliations and basic financials for
                  micro‑businesses.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-2">Standard (from $100)</h3>
                <p>
                  AP/AR tracking, sales tax filings, and quarterly management
                  reports.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-2">Growth (from $150)</h3>
                <p>
                  Payroll, monthly reporting with KPIs, and year‑end
                  coordination.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Implementation</h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>System health check and account mapping</li>
              <li>Backlog cleanup and opening balances alignment</li>
              <li>Automations: bank feeds, recurring bills, rules and memos</li>
              <li>Reporting pack and KPI setup (cash, margins, AR days)</li>
            </ol>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Monthly Tasks</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Bank/credit card reconciliations</li>
                <li>Accounts receivable and payable tracking</li>
                <li>Sales tax coding and GST/HST/PST filings</li>
                <li>Payroll processing and T4/T4A/ROE support</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Deliverables</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Monthly P&L, Balance Sheet, and Cash Flow</li>
                <li>Customized management summary with key metrics</li>
                <li>Year‑end package for your corporate return</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Systems</h3>
              <p className="text-gray-700">
                We work with QuickBooks Online, Xero, Wave, or clean CSVs. We
                can set up bank feeds, chart of accounts, and recurring
                workflows.
              </p>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Request a Proposal
            </Link>
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
