import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const items = [
  {
    q: "How much is a personal tax return?",
    a: "$25. Prices for business returns are $75 and corporate returns start at $200.",
  },
  {
    q: "Can I file online?",
    a: "Yes. You can file remotely and sign electronically. Visit accufile.ca to start.",
  },
  {
    q: "Do you offer bookkeeping packages?",
    a: "Yes, from $50–$150 per month depending on volume and complexity.",
  },
  {
    q: "How fast can you finish my file?",
    a: "Most personal returns are completed within 24–48 hours after receiving all documents. Business returns typically take 3–5 business days.",
  },
  {
    q: "What documents do I need?",
    a: "ID/SIN, T4/T4A slips, RRSP receipts, T5/T3/T5008 statements, tuition (T2202), medical and donations. For business, bank/credit card exports and expense summaries are helpful.",
  },
  {
    q: "Do you support first‑year and last‑year returns?",
    a: "Yes. We handle residency entry/exit dates, world income, and registrations for benefits.",
  },
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | Accubusiness</title>
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
          <h1 className="text-4xl font-light mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {items.map((i, idx) => (
              <div key={idx} className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">{i.q}</h3>
                <p className="text-gray-700">{i.a}</p>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
