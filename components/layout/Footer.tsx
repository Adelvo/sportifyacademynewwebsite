import Link from "next/link";
import { nav, site, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { BrandLogo } from "../ui/BrandLogo";
import { Container } from "../ui/Section";
import { Txt } from "../ui/Txt";

const headingClass = "mb-3 font-display font-bold text-white";
const linkClass = "inline-block py-1 text-on-midnight-soft hover:text-cyan";

export function Footer() {
  return (
    <footer className="bg-midnight text-on-midnight-soft">
      <Container className="grid grid-cols-1 gap-10 border-t border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo variant="light" alt={site.name} className="h-16 w-auto" />
          <p className="mt-3">{site.tagline}.</p>
          <p className="mt-2">{site.recognition}.</p>
        </div>

        <nav aria-label={ui.footerNavLabel}>
          <p className={headingClass}>{ui.pages}</p>
          <ul>
            {nav.main.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={`${headingClass} mt-6`}>{ui.legal}</p>
          <ul>
            {nav.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={headingClass}>{ui.organisations}</p>
          <ul>
            {[nav.organisationsOverview, ...nav.organisations].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={headingClass}>{ui.address}</p>
          <address className="not-italic">
            {site.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className={`${headingClass} mt-6`}>{ui.phone}</p>
          <a href={`tel:${site.phoneE164}`} className={linkClass}>
            {site.phoneDisplay}
          </a>
          <br />
          <a href={whatsappUrlForPath("/contact")} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {ui.whatsappButton}
          </a>
          <p className="mt-4">
            <Txt>{site.hoursTodo}</Txt>
          </p>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6 text-sm">
        © {new Date().getFullYear()} {site.name}. {ui.rights}
      </Container>
    </footer>
  );
}
