import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Star,
  MessageSquare,
  Check,
  Calculator,
  FileText,
  Building,
  TrendingUp,
  Users,
  Shield,
  ChevronRight,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TypedText from "@/components/TypedText";

const Home = () => {
  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accubusiness",
    description:
      "Affordable tax, bookkeeping, and advisory services in Vancouver and across Canada",
    url: "https://accubusiness.ca",
    logo: "https://accubusiness.ca/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressCountry: "CA",
    },
    sameAs: ["https://www.facebook.com", "https://www.instagram.com"],
    offers: {
      "@type": "Offer",
      description: "Tax preparation and bookkeeping services",
      areaServed: "Canada",
    },
  };

  const services = [
    {
      icon: FileText,
      title: "Personal Tax Returns",
      price: "$25",
      description:
        "Complete T1 preparation with all credits and deductions optimized for maximum refund.",
      link: "/our-services/personal-tax-returns",
      features: [
        "T4/T5 slips",
        "RRSP optimization",
        "Medical credits",
        "Tuition credits",
      ],
    },
    {
      icon: Building,
      title: "Business Tax Returns",
      price: "$75",
      description:
        "Comprehensive business filing with expense optimization and GST/PST handling.",
      link: "/our-services/business-tax-returns",
      features: [
        "Expense tracking",
        "GST/PST filing",
        "T2125 forms",
        "Deduction maximization",
      ],
    },
    {
      icon: Calculator,
      title: "Corporate Tax Returns",
      price: "From $200",
      description:
        "Full corporate compliance with T2 preparation and strategic tax planning.",
      link: "/our-services/corporate-tax-returns",
      features: [
        "T2 preparation",
        "Tax planning",
        "Compliance",
        "Quarterly filings",
      ],
    },
    {
      icon: TrendingUp,
      title: "Bookkeeping Services",
      price: "From $50/mo",
      description:
        "Monthly bookkeeping with QuickBooks, reconciliations, and financial reporting.",
      link: "/our-services/bookkeeping-services",
      features: [
        "Monthly reconciliation",
        "QuickBooks setup",
        "Financial reports",
        "Payroll processing",
      ],
    },
    {
      icon: Shield,
      title: "Tax Strategies",
      price: "Custom",
      description:
        "Strategic tax planning to minimize your tax burden legally and efficiently.",
      link: "/our-services/tax-strategies",
      features: [
        "Tax planning",
        "Incorporation advice",
        "Investment strategies",
        "Retirement planning",
      ],
    },
    {
      icon: Users,
      title: "Newcomers to Canada",
      price: "$25",
      description:
        "Specialized service for new Canadian residents with first/last year returns.",
      link: "/our-services/newcomers-to-canada",
      features: [
        "First year filing",
        "Residency dates",
        "Foreign income",
        "Credit applications",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "Fast, professional, and affordable. They found credits I didn't know about and filed everything online.",
      author: "Amrita S.",
      title: "Personal Tax Client",
    },
    {
      quote:
        "Excellent value for my small business. Bookkeeping and year‑end were smooth and clearly explained.",
      author: "Daniel P.",
      title: "Business Owner",
    },
    {
      quote:
        "New to Canada and they guided me step‑by‑step. Clear pricing and great communication.",
      author: "Nadia K.",
      title: "Newcomer to Canada",
    },
  ];

  return (
    <>
      <Head>
        <title>Accubusiness | Tax, Bookkeeping & Advisory</title>
        <meta
          name="description"
          content="Affordable personal, business, and corporate tax returns, bookkeeping, payroll, and advisory. Serving Vancouver and Canada."
        />
        <meta
          name="keywords"
          content="tax services Vancouver, personal tax return $25, business tax $75, corporate tax $200, bookkeeping, Accubusiness"
        />
        <meta
          property="og:title"
          content="Accubusiness | Tax, Bookkeeping & Advisory"
        />
        <meta
          property="og:description"
          content="Affordable tax preparation and bookkeeping with online filing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://accubusiness.ca" />
        <meta
          property="og:image"
          content="https://accubusiness.ca/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Accubusiness | Tax, Bookkeeping & Advisory"
        />
        <meta
          name="twitter:description"
          content="Affordable personal, business, and corporate tax services."
        />
        <meta
          name="twitter:image"
          content="https://accubusiness.ca/twitter-image.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        <Navigation transparent={true} />

        {/* Hero Section - Keep as requested, only change Contact Us button color */}
        <section className="relative h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src="/photos/homepage/background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-white leading-tight">
                <TypedText
                  text="Simple, Affordable Tax & Bookkeeping"
                  speed={40}
                  delay={300}
                />
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-3xl mb-10 font-light leading-relaxed">
                <TypedText
                  text="Personal, business, and corporate tax services with transparent pricing and online filing."
                  speed={30}
                  delay={2500}
                />
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/our-services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-base font-medium shadow-lg"
                >
                  <span>View Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 text-base font-medium shadow-lg"
                >
                  <span>Contact Us</span>
                  <MessageSquare className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tax Services - Minimalist */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-extralight mb-12 leading-tight">
                Our Tax Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                At Accubusiness, our professional tax services focus on our
                client&apos;s most critical issues and opportunities. We prepare
                personal, business, and corporate tax returns with transparent
                pricing across Canada.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <span className="bg-gray-900 text-white px-6 py-2 rounded-full font-light">
                  Personal $25
                </span>
                <span className="bg-gray-900 text-white px-6 py-2 rounded-full font-light">
                  Business $75
                </span>
                <span className="bg-gray-900 text-white px-6 py-2 rounded-full font-light">
                  Corporate from $200
                </span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-light text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="text-3xl font-extralight text-gray-900">
                      {service.price}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center font-medium text-gray-900 group-hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are + KPI Counters */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                  Who We Are
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  Accubusiness is one of Canada&apos;s leading Tax Preparation
                  Service firms. We help clients understand their financial
                  situation, make better decisions, and save money on all
                  different tax situations.
                </p>
                <blockquote className="text-xl font-light text-gray-500 italic mb-8 pl-6 border-l-4 border-gray-200">
                  &quot;Let us spend time to take care of your tax return and
                  you spend time enjoy your life&quot;
                </blockquote>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Animated KPI counters */}
              <div className="grid grid-cols-2 gap-8">
                <KPICounter number={625} label="Personal Returns/week" />
                <KPICounter number={100} label="% Satisfaction" suffix="%" />
                <KPICounter number={305} label="Business Returns/week" />
                <KPICounter number={9.8} label="Rating" decimals={1} />
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help - Progress Bars */}
        <section className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                How We Can Help
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                Whether you&apos;re saving money on tax, providing an accurate
                return, or planning for financial goals, we can help simplify
                your taxes with our comprehensive range of services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { label: "Personal Tax Returns", value: 100 },
                { label: "Business Tax Returns", value: 100 },
                { label: "Corporate Tax Returns", value: 100 },
                { label: "Business Planning", value: 80 },
                { label: "Bookkeeping", value: 100 },
                { label: "Retirement Planning", value: 75 },
              ].map((item, i) => (
                <ProgressBar
                  key={i}
                  label={item.label}
                  value={item.value}
                  delay={i * 200}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                Why Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  Experienced
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  We have filed over 180,000 tax returns to date with unmatched
                  precision and care.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                  <Calculator className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  Best Prices
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Personal Returns $25, Business $75, Corporate from $200.
                  Transparent pricing, no surprises.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gray-900 rounded-2xl mx-auto mb-8 flex items-center justify-center">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  Professional
                </h3>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  We handle every challenge with professional excellence and
                  maintain our prestigious reputation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl font-light text-gray-600 mb-12">
                Canada&apos;s #1 Professional Tax Service
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gray-900 text-white px-12 py-5 rounded-full font-medium text-xl hover:bg-gray-800 transition-all duration-300"
              >
                Start Your Tax Return Now
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Online Filing Section */}
        <section className="py-32 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
              File Online.
              <br />
              <span className="font-light">Save Time.</span>
            </h2>

            <p className="text-xl font-light opacity-90 max-w-5xl mx-auto mb-16 leading-relaxed">
              In addition to filing by appointment with our professional tax
              services, we offer seamless online filing. Our efficient process
              covers all your bases, optimizes your return, and saves
              considerable time. Sign digitally, pay online—no office visit
              required.
            </p>

            <a
              href="http://accufile.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-12 py-5 rounded-full font-medium text-xl hover:bg-gray-100 transition-all duration-300"
            >
              Start at accufile.ca
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-xl font-light text-gray-700 mb-8 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-lg font-medium text-gray-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600 font-light">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request A Call Back */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-extralight mb-8 leading-tight">
                Request A Call Back
              </h2>

              <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto">
                Would you like to speak to one of our tax advisors over the
                phone? Just submit your details and we&apos;ll be in touch
                shortly.
              </p>
            </div>

            <CallBackForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

// Animated KPI Counter Component
function KPICounter({
  number,
  label,
  suffix = "",
  decimals = 0,
}: {
  number: number;
  label: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(
      `counter-${label.replace(/\s+/g, "-")}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);

      if (decimals > 0) {
        setCount(+(progress * number).toFixed(decimals));
      } else {
        setCount(Math.floor(progress * number));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number, decimals]);

  return (
    <div
      id={`counter-${label.replace(/\s+/g, "-")}`}
      className="p-8 rounded-3xl bg-white shadow-lg"
    >
      <div className="text-5xl font-extralight text-gray-900 mb-3">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 font-light">{label}</div>
    </div>
  );
}

// Animated Progress Bar Component
function ProgressBar({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: number;
  delay?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(
      `progress-${label.replace(/\s+/g, "-")}`
    );
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay, isVisible]);

  return (
    <div id={`progress-${label.replace(/\s+/g, "-")}`}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-light text-gray-900">{label}</span>
        <span className="text-2xl font-light text-gray-900">{value}%</span>
      </div>
      <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-900 rounded-full transition-all duration-1500 ease-out"
          style={{ width: animated ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function CallBackForm() {
  const [form, setForm] = useState({
    name: "",
    topic: "",
    email: "",
    phone: "",
  });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white p-12 rounded-3xl shadow-lg max-w-4xl mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="grid md:grid-cols-2 gap-8"
      >
        <input
          className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all font-light text-lg"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all font-light text-lg"
          placeholder="I would like to discuss"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
        />
        <input
          type="email"
          className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all font-light text-lg"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          className="px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-all font-light text-lg"
          placeholder="Your Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button className="md:col-span-2 bg-gray-900 text-white px-12 py-5 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-medium text-xl">
          {sent ? "✓ Thanks — we&apos;ll be in touch" : "Request Call Back"}
        </button>
      </form>
    </div>
  );
}

export default Home;
