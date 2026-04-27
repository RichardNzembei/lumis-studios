import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/lumis-logo-primary-light.svg"
              alt="Lumis Studios"
              width={96}
              height={41}
            />
            <p className="mt-2 text-xs text-gray-400">Nairobi, Kenya</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Company
            </p>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-800"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Social
            </p>
            <a
              href="https://www.linkedin.com/company/lumis-studios/"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-800"
            >
              <ExternalLink size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">© {year} Lumis Studios. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
