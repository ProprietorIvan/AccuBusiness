import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Check } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceInterest: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/charteremail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok)
        throw new Error((await res.json()).error || "Failed to submit");
        setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
        subject: "",
        serviceInterest: "",
            message: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Accubusiness</title>
        <meta
          name="description"
          content="Get in touch with Accubusiness for personal, business, and corporate tax services, bookkeeping, and tax planning."
        />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={false} />

        <section className="pt-32 pb-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              Contact Accubusiness
              </h1>
            <p className="text-gray-600 max-w-3xl">
              We’re available 24 hrs, Monday to Sunday. Call, email, or send the
              form and we’ll get back to you shortly.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                              <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                  className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                  placeholder="Jane Doe"
                              />
                            </div>
              <div className="grid md:grid-cols-2 gap-6">
                            <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                    className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                    placeholder="you@email.com"
                              />
                            </div>
                            <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Phone Number
                  </label>
                              <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                    placeholder="1-800-989-6507"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                    placeholder="Question about corporate return"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                  >
                    <option value="">Select a service</option>
                    <option>Personal Tax Returns</option>
                    <option>Business Tax Returns</option>
                    <option>Corporate Tax Returns</option>
                    <option>Bookkeeping Services</option>
                    <option>Tax Strategies</option>
                    <option>Newcomers to Canada</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  How can we help?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 rounded-md focus:ring-1 focus:ring-gray-900 outline-none"
                  placeholder="Tell us about your situation..."
                />
                </div>
                <button
                  type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-md hover:bg-gray-800 transition-colors w-full md:w-auto"
                >
                  {submitting ? (
                  "Sending..."
                  ) : submitted ? (
                  <span className="inline-flex items-center gap-2">
                    <Check className="w-4 h-4" /> Sent
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
              {error && <p className="text-red-600">{error}</p>}
              </form>

            <aside className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Contact Details</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-3">
                    <Phone className="w-4 h-4" /> 1-800-989-6507
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-4 h-4" /> info@accubusiness.ca
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4" /> 1066 West Hastings,
                    Vancouver, BC
                  </p>
                  <p>Hours: 24 HRS, Monday to Sunday</p>
                </div>
              </div>
              <div className="border rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium mb-2">File Online</h3>
                <p className="text-gray-700 mb-3">
                  Prefer online filing? Use our secure gateway and sign
                  electronically.
                </p>
                <a
                  href="https://accufile.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-2 rounded-md bg-white border hover:bg-gray-50"
                >
                  Go to Accufile
                </a>
            </div>
            </aside>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
