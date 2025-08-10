import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PersonalTax() {
  return (
    <>
      <Head>
        <title>Personal Tax Returns | Accubusiness</title>
        <meta
          name="description"
          content="Personal tax returns for $25 with fast turnaround. Credits optimization, CRA e‑file, and document checklist."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Personal Tax Returns
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              Flat pricing <span className="font-medium">$25 per return</span>.
              We prepare and e‑file your T1 to CRA, apply all eligible credits
              and deductions, and explain your outcome clearly.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-md"
              >
                Start Now
              </Link>
              <a
                className="px-6 py-3 rounded-md border"
                href="https://accufile.ca"
                target="_blank"
                rel="noreferrer"
              >
                File Online
              </a>
            </div>
          </section>

          {/* Scenarios we handle */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Common Situations We Handle Every Day
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  First job or multiple T4s and mixed student/part‑time income
                </li>
                <li>
                  Families with childcare, CCB eligibility, and tuition
                  transfers
                </li>
                <li>
                  Investors with T3/T5 slips, DRIPs, capital gains and
                  superficial loss rules
                </li>
                <li>
                  Short‑term rental or roommate income and reasonable expense
                  sharing
                </li>
              </ul>
              <ul className="list-disc ml-5 space-y-2">
                <li>
                  Contractors switching to sole prop mid‑year (T2125 add‑on)
                </li>
                <li>Moves between provinces and part‑year residency</li>
                <li>
                  Foreign employment or scholarships and treaty exemptions
                </li>
                <li>
                  RRSP optimization and first‑time home buyer considerations
                </li>
              </ul>
            </div>
          </section>

          {/* Case study */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Mini Case Study</h2>
            <div className="border rounded-lg p-6 text-gray-700">
              <p className="mb-2">
                <span className="font-medium">Client:</span> Single filer with
                two T4s, some investment sales, and home office.
              </p>
              <p className="mb-2">
                <span className="font-medium">Action:</span> Matched CRA slips,
                adjusted ACB for ETF sales, elected detailed home‑office method,
                and applied carryforward tuition credits.
              </p>
              <p>
                <span className="font-medium">Result:</span> Increased refund by
                identifying overlooked fees, and set up a contribution plan to
                reduce next year’s taxes.
              </p>
            </div>
          </section>

          {/* Why us */}
          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">
              Why File with Accubusiness
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6 text-gray-700">
                <h3 className="font-medium mb-1">Transparent Pricing</h3>
                <p>
                  Up‑front quote with base price of $25. Add‑ons only when
                  needed, approved by you.
                </p>
              </div>
              <div className="border rounded-lg p-6 text-gray-700">
                <h3 className="font-medium mb-1">Fast and Accurate</h3>
                <p>
                  Structured workflow and CRA e‑file ensure your return is right
                  and on time.
                </p>
              </div>
              <div className="border rounded-lg p-6 text-gray-700">
                <h3 className="font-medium mb-1">Year‑Round Support</h3>
                <p>
                  We answer CRA mail and help with adjustments related to the
                  return we filed.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-14">
            <h2 className="text-2xl font-light mb-3">
              Security & Data Handling
            </h2>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>
                Secure upload links; documents stored in encrypted cloud systems
              </li>
              <li>We share final PDFs only through secure channels</li>
              <li>We keep organized archives for easy future reference</li>
            </ul>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">What’s Included</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Preparation and e‑filing of your T1 General</li>
                <li>
                  Optimization of credits (spouse, tuition, medical, donations,
                  disability, climate, transit where applicable)
                </li>
                <li>Employment expenses (T2200), union dues, child care</li>
                <li>RRSP/TFSA, capital gains/losses, investments</li>
                <li>CRA questions support for this return</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Optional Add‑ons</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Rental income (T776) or self‑employment (T2125)</li>
                <li>Foreign income reporting (T1135), foreign tax credits</li>
                <li>Final/deceased returns and optional returns</li>
                <li>Prior‑year adjustments (T1‑ADJ)</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Turnaround</h3>
              <p className="text-gray-700">
                Standard files within{" "}
                <span className="font-medium">24–48 hours</span> after receiving
                all documents. Approval summary is sent before e‑file. Refunds
                by direct deposit typically in 8–10 business days.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Document Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>ID and SIN, address, marital status</li>
                <li>T4, T4A, T5, T3, T5008 (investments)</li>
                <li>RRSP contributions (both periods)</li>
                <li>Tuition (T2202), student loan interest</li>
                <li>Medical, donations, childcare receipts</li>
              </ul>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Rent/property tax (where applicable)</li>
                <li>Moving expenses, support docs</li>
                <li>Home office (simplified or detailed)</li>
                <li>Rental/self‑employment statements</li>
                <li>Foreign income/tax paid statements</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Our Process</h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>
                Send documents via secure upload/email or book a quick call.
              </li>
              <li>We prepare the return and share a one‑page summary.</li>
              <li>Approve and e‑sign; we e‑file to CRA and confirm.</li>
              <li>Receive Notice of Assessment and keep organized PDFs.</li>
            </ol>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-light mb-4">FAQ</h2>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <h3 className="font-medium">
                  I’m new to Canada—what should I know?
                </h3>
                <p className="text-gray-700">
                  We assess residency, include world income where required, and
                  register you for benefits. We can file first and last year
                  online.
                </p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-medium">Do you handle back taxes?</h3>
                <p className="text-gray-700">
                  Yes. We can file multiple prior years and submit adjustments
                  or voluntary disclosures as needed.
                </p>
              </div>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Start Your Return
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
