import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BusinessTax() {
  return (
    <>
      <Head>
        <title>Business Tax Returns | Accubusiness</title>
        <meta
          name="description"
          content="Business tax returns for $75 with GST/PST, bookkeeping tidy-up, mileage and home office optimization, and on-time filing."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Business Tax Returns
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              Sole proprietors and partnerships prepared accurately for{" "}
              <span className="font-medium">$75</span>. We organize your books,
              maximize deductions and file on time.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-md"
              >
                Get a Quote
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
            <h2 className="text-2xl font-light mb-3">Record‑Keeping Toolkit</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  CSV export instructions for major banks and credit cards
                </li>
                <li>Mileage log template and sample allocation worksheet</li>
                <li>Home‑office calculator (simplified vs. detailed)</li>
              </ul>
              <ul className="list-disc ml-5 space-y-2">
                <li>Receipt retention guide and audit‑proof categories</li>
                <li>GST/HST quick and regular method considerations</li>
                <li>Filing calendar with installment reminders</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Sample Engagement Timeline
            </h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>
                Kickoff call (15 minutes): review business model and records.
              </li>
              <li>
                Records upload (same day): guided checklist and templates.
              </li>
              <li>
                Preparation (2–3 days): questions and preliminary summary.
              </li>
              <li>Review meeting (30 minutes): confirm deductions and CCA.</li>
              <li>E‑file and deliverables: T1/T2125 and GST/PST returns.</li>
            </ol>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Scope</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>
                  T2125 statement preparation (multiple activities if needed)
                </li>
                <li>Vehicle and home‑office allocations (logbook templates)</li>
                <li>CCA and asset write‑offs, tools and supplies</li>
                <li>GST/HST, PST and source deduction guidance</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">What We Need</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>
                  Income totals (invoices, POS Z‑read, or bank statements)
                </li>
                <li>Expense summaries or CSV exports of bank/credit cards</li>
                <li>Mileage and home‑office square footage/utilities</li>
                <li>Asset purchases/sales and any loans</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Turnaround</h3>
              <p className="text-gray-700">
                Most files are completed within{" "}
                <span className="font-medium">3–5 business days</span> after
                receiving records. We deliver a year‑end PDF package with T1
                summary, T2125, GST/PST returns and schedules.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Key Deductions We Optimize
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc ml-5 space-y-2">
                <li>Vehicle (fuel, insurance, maintenance, lease/CCA)</li>
                <li>Home office (utilities, internet, rent/property tax)</li>
                <li>Advertising, payment processing, bank charges</li>
                <li>Cell phone and business internet</li>
              </ul>
              <ul className="list-disc ml-5 space-y-2">
                <li>Meals and travel (allowable limits), subcontractors</li>
                <li>Tools/equipment, software and SaaS subscriptions</li>
                <li>Bad debts and reserves where applicable</li>
              </ul>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Get Your Return Started
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
