import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CorporateTax() {
  return (
    <>
      <Head>
        <title>Corporate Tax Returns | Accubusiness</title>
        <meta
          name="description"
          content="Corporate tax returns from $200. Year-end working papers, GIFI, T2 schedules, GST/PST, payroll, and CRA e-file with planning insights."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Corporate Tax Returns
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              Compilation‑level year ends with T2 filing from{" "}
              <span className="font-medium">$200</span>. We deliver clean
              working papers and pragmatic tax advice for the next fiscal year.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-md"
              >
                Speak to an Advisor
              </Link>
              <a
                className="px-6 py-3 rounded-md border"
                href="https://accufile.ca"
                target="_blank"
                rel="noreferrer"
              >
                Start Online
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Year‑End Workflow</h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>
                Planning call to align on salary/dividend targets and deadlines.
              </li>
              <li>
                Record collection: TB/GL exports, bank reconciliations, AR/AP
                aging.
              </li>
              <li>
                Adjustments and schedules: accruals, CCA, reserves, loan
                amortizations.
              </li>
              <li>
                Draft financials and T2 review meeting to confirm positions.
              </li>
              <li>
                E‑file to CRA and deliver year‑end package with next‑year
                recommendations.
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Entities & Situations We Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc ml-5 space-y-2">
                <li>CCPCs with active business income and investment holds</li>
                <li>Professional corporations and medical practices</li>
                <li>
                  Multi‑provincial operations and permanent establishment
                  apportionment
                </li>
              </ul>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Asset sales/purchases and Section 85 rollovers (with legal
                  counsel)
                </li>
                <li>Loss utilization planning and SR&ED coordination</li>
                <li>Owner remuneration and dividend designation tracking</li>
              </ul>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Deliverables</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>
                  Compilation financial statements (NTR) and working papers
                </li>
                <li>
                  T2 return with GIFI and schedules (e.g., S1, S7, S50,
                  S100‑S125)
                </li>
                <li>GST/HST, PST, and payroll reconciliations</li>
                <li>Year‑end adjusting entries and asset schedules</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">What We Need</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Trial balance or exports (QuickBooks/Xero/CSV)</li>
                <li>
                  Bank/credit card statements, AR/AP aging, payroll reports
                </li>
                <li>Asset additions/disposals; loan statements</li>
                <li>Prior year financials and returns (if available)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Planning Areas</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Salary vs. dividends and CPP optimization</li>
                <li>Loss carry‑backs/forwards and small business deduction</li>
                <li>CCA classes and asset write‑off strategy</li>
                <li>Shareholder loan (s.15) and eligible dividend tracking</li>
              </ul>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Start Your Year‑End
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
