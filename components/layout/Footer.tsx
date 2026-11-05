import Link from "next/link";
import { nav, site, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import { BrandLogo } from "../ui/BrandLogo";
import { WhatsAppIcon } from "../ui/Button";
import { Container } from "../ui/Section";
import { InstagramIcon, YouTubeIcon } from "../ui/SocialIcons";

const headingClass = "mb-3 font-display font-bold text-white";
const linkClass = "inline-block py-1 text-on-midnight-soft hover:text-cyan";
const socialClass = "grid size-11 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-cyan hover:text-midnight";

export function Footer() {
  const socialLinks = [
    { href: site.social.instagram, label: ui.instagramLabel, Icon: InstagramIcon },
    { href: site.social.youtube, label: ui.youtubeLabel, Icon: YouTubeIcon },
    { href: whatsappUrlForPath("/"), label: ui.whatsappLabel, Icon: WhatsAppIcon },
  ];
  return (
    <footer className="bg-midnight text-on-midnight-soft">
      <Container className="grid grid-cols-1 gap-12 border-t border-white/10 py-16 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-3">
        <div>
          <BrandLogo variant="light" alt={site.name} className="h-16 w-auto" />
          <p className="mt-3">{site.tagline}.</p>
          <p className="mt-2">{site.recognition}.</p>
          <p className={`${headingClass} mt-6`}>{ui.followUs}</p>
          <ul className="flex gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={socialClass}>
                  <Icon className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={ui.footerNavLabel} className="grid grid-cols-2 gap-6 sm:block">
          <div>
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
          </div>
          <div className="sm:mt-6">
            <p className={headingClass}>{ui.legal}</p>
            <ul>
              {nav.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

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
          <a href={whatsappUrlForPath("/")} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {ui.whatsappButton}
          </a>
          <p className={`${headingClass} mt-6`}>{ui.openingHours}</p>
          {site.hours.map((entry) => (
            <p key={entry.days}>
              {entry.days}: <span className="whitespace-nowrap">{entry.time}</span>
            </p>
          ))}
        </div>
      </Container>
      {/* The extra space on phones keeps this line clear of the floating WhatsApp button. */}
      <Container className="border-t border-white/10 pt-6 pb-24 text-sm sm:pb-6">
        © {new Date().getFullYear()} {site.name}. {ui.rights}
      </Container>
    </footer>
  );
}
