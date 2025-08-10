import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavWhatsAppButton from "./NavWhatsAppButton";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Our Services", url: "/our-services" },
    { text: "About Us", url: "/about" },
    { text: "Reviews", url: "/reviews" },
    { text: "Contact", url: "/contact" },
  ];

  const serviceLinks = [
    { text: "Personal Tax Returns", url: "/our-services/personal-tax-returns" },
    { text: "Business Tax Returns", url: "/our-services/business-tax-returns" },
    {
      text: "Corporate Tax Returns",
      url: "/our-services/corporate-tax-returns",
    },
    { text: "Bookkeeping Services", url: "/our-services/bookkeeping-services" },
    { text: "Tax Strategies", url: "/our-services/tax-strategies" },
    { text: "Newcomers to Canada", url: "/our-services/newcomers-to-canada" },
  ];
  const aboutLinks = [
    { text: "Our Company", url: "/about" },
    { text: "Careers", url: "/about/careers" },
    { text: "Our History", url: "/about/our-history" },
    { text: "F.A.Q", url: "/about/faq" },
  ];

  return (
    <nav
      className={`${
        transparent
          ? "absolute top-0 left-0 right-0 z-50"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-[20.28rem] h-[5.915rem]">
                <Image
                  src="/logo.png"
                  alt="Accubusiness"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8">
              {/* Home */}
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? "text-white hover:text-white/80"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Home
              </Link>

              {/* Our Services dropdown */}
              <div className="relative group">
                <Link
                  href="/our-services"
                  className={`text-sm font-medium transition-colors inline-flex items-center ${
                    transparent
                      ? "text-white hover:text-white/80"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Our Services
                  <span className="ml-1">▾</span>
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-72 bg-white shadow-xl border border-gray-100 rounded-md z-50">
                  <ul className="py-2">
                    {serviceLinks.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={s.url}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-sm"
                        >
                          {s.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* About dropdown */}
              <div className="relative group">
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors inline-flex items-center ${
                    transparent
                      ? "text-white hover:text-white/80"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  About Us
                  <span className="ml-1">▾</span>
                </Link>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-72 bg-white shadow-xl border border-gray-100 rounded-md z-50">
                  <ul className="py-2">
                    {aboutLinks.map((s, i) => (
                      <li key={i}>
                        <Link
                          href={s.url}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 text-sm"
                        >
                          {s.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Other links */}
              {navLinks
                .filter(
                  (l) => !["Home", "Our Services", "About Us"].includes(l.text)
                )
                .map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className={`text-sm font-medium transition-colors ${
                      transparent
                        ? "text-white hover:text-white/80"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {link.text}
                  </Link>
                ))}
              <NavWhatsAppButton transparent={transparent} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                transparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </Link>
              <div>
                <p className="px-3 pt-2 pb-1 text-xs uppercase text-gray-500">
                  Our Services
                </p>
                {serviceLinks.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {s.text}
                  </Link>
                ))}
              </div>
              <div>
                <p className="px-3 pt-2 pb-1 text-xs uppercase text-gray-500">
                  About Us
                </p>
                {aboutLinks.map((s, i) => (
                  <Link
                    key={i}
                    href={s.url}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {s.text}
                  </Link>
                ))}
              </div>
              {navLinks
                .filter((l) => l.text !== "Home" && l.text !== "Our Services")
                .map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-3 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              <div className="mt-2">
                <NavWhatsAppButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
