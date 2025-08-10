import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TaxStrategies() {
  return (
    <>
      <Head>
        <title>Tax Strategies | Accubusiness</title>
        <meta
          name="description"
          content="Pragmatic tax planning: salary vs dividends, RRSP/TFSA, income splitting, CCA strategy, corporate integration, and year-round advice."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <section className="mb-10">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Tax Strategies
            </h1>
            <p className="text-gray-700 text-lg max-w-3xl">
              We focus on practical, CRA‑compliant tactics that reduce tax and
              strengthen cash flow for individuals and owner‑managed businesses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Engagement Model</h2>
            <ol className="list-decimal ml-5 text-gray-700 space-y-2">
              <li>Discovery call to capture goals and constraints</li>
              <li>
                Data review: payroll, dividends, corporate/ personal returns
              </li>
              <li>Strategy memo with quantified options and risks</li>
              <li>Implementation checklist and reminders through the year</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-light mb-3">Illustrative Wins</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-2">Owner‑Manager Mix</h3>
                <p>
                  Rebalanced salary/dividends, added RRSP, and used
                  losses—reduced combined tax by an estimated $6,400.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-2">Capital Loss Planning</h3>
                <p>
                  Harvested losses before year‑end and reset ACB to offset
                  gains, deferring tax and improving cash flow.
                </p>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Individuals</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>RRSP/TFSA contribution planning and timing</li>
                <li>Tuition/education transfer strategy</li>
                <li>Medical/donation bunching to maximize credits</li>
                <li>Capital gains/loss harvesting and ACB tracking</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Owner‑Managers</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Salary vs. dividends mix and CPP optimization</li>
                <li>
                  Income splitting (spousal, adult child, TOSI safe harbours)
                </li>
                <li>Shareholder loan management and tracking</li>
                <li>CCA classes and immediate expensing strategy</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">
                Corporate Integration
              </h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Small Business Deduction planning and grind management</li>
                <li>Eligible vs. non‑eligible dividend planning</li>
                <li>
                  Loss carry‑backs/forwards and investment holding structure
                </li>
                <li>Remuneration calendars and installment planning</li>
              </ul>
            </div>
          </section>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-6 py-3 rounded-md"
            >
              Book a Consultation
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
