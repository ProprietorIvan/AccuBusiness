import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Reviews = () => {
  const testimonials = [
    {
      name: "Amrita S.",
      text: "Fast and affordable. They found credits I didn’t know about and handled everything over email.",
    },
    {
      name: "Daniel P.",
      text: "Great value for my corporation. Bookkeeping and year-end were smooth and well organized.",
    },
    {
      name: "Nadia K.",
      text: "I’m new to Canada and they guided me step-by-step. Highly recommend for first-time filers.",
    },
  ];

  return (
    <>
      <Head>
        <title>Reviews | Accubusiness</title>
        <meta
          name="description"
          content="Read client reviews for Accubusiness and see why we’re trusted for tax, bookkeeping, and advisory services."
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 pt-28 pb-16">
          <h1 className="text-4xl font-light mb-8 tracking-tight">
            What Our Clients Say
          </h1>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <p className="text-gray-500 text-sm">{t.name}</p>
              </div>
            ))}
          </div>

          <a
            href="https://share.google/Dl6aNAdLWdWYfDY58"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md"
          >
            View more reviews on Google
          </a>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Reviews;
