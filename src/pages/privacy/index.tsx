import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Accubusiness</title>
        <meta
          name="description"
          content="Privacy Policy for Accubusiness — how we collect, use, and protect your information for our tax, bookkeeping, and advisory services."
        />
      </Head>
      <Navigation />
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <p className="mb-4">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            At Accubusiness, we respect your privacy and are committed to
            protecting your personal data. This policy explains how we handle
            information when you visit our website, contact us, or use our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect and process the following data about you:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">
              Personal identification information (Name, email address, phone
              number, etc.)
            </li>
            <li className="mb-2">
              Contact information including email address and telephone numbers
            </li>
            <li className="mb-2">
              Demographic information such as preferences and interests
            </li>
            <li className="mb-2">
              Other information relevant to customer surveys and/or offers
            </li>
            <li className="mb-2">
              Technical data including IP address, browser data, and device
              information
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Provide, operate, and maintain our website</li>
            <li className="mb-2">
              Provide tax preparation, bookkeeping, and consulting services
            </li>
            <li className="mb-2">
              Improve, personalize, and expand our website
            </li>
            <li className="mb-2">
              Understand and analyze how you use our website
            </li>
            <li className="mb-2">
              Communicate with you about our services, updates, and offers
            </li>
            <li className="mb-2">
              Develop new products, services, features, and functionality
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How We Share Your Information
          </h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates, and advertisers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to improve your experience,
            analyze site traffic, and understand usage. You can control cookies
            through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection
            laws in relation to your personal data including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Request access to your personal data</li>
            <li className="mb-2">Request correction of your personal data</li>
            <li className="mb-2">Request erasure of your personal data</li>
            <li className="mb-2">Object to processing of your personal data</li>
            <li className="mb-2">
              Request restriction of processing your personal data
            </li>
            <li className="mb-2">Request transfer of your personal data</li>
            <li className="mb-2">Right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="mb-4">
            We value your trust in providing us your personal information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="list-disc ml-6">
            <li className="mb-2">By email: info@accubusiness.ca</li>
            <li className="mb-2">By phone: 1-800-989-6507</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
