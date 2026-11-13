"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { nav, site, ui } from "@/content";
import { whatsappUrlForPath } from "@/lib/links";
import styles from "../home/hero.module.css";
import { BrandLogo } from "../ui/BrandLogo";
import { ExternalButton, WhatsAppIcon } from "../ui/Button";
import { Container } from "../ui/Section";

const linkClass = "rounded text-[13px] font-semibold lg:text-sm whitespace-nowrap text-midnight transition-colors hover:text-cyan-deep aria-[current=page]:text-cyan-deep";

const introAnchors: Record<string, string | undefined> = {
  "/test-my-child": "kids-intro",
  "/train-with-us": "athlete-intro",
  "/adult": "adult-intro",
};

/** Programme navigation targets the dark introduction bar. */
function headerHref(href: string) {
  const anchor = introAnchors[href];
  return anchor ? `${href}#${anchor}` : href;
}

/** A modified click (ctrl/cmd/shift/alt, middle-click) means "open in new tab" — let the browser
 * handle that itself instead of intercepting it. */
function isPlainLeftClick(event: React.MouseEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

/** Next and browsers resolve #top to the page start after navigating from any subpage. */
export function Logo() {
  return (
    <Link href="/#top" aria-label={`${site.name}, home`} className="col-start-1 shrink-0">
      <BrandLogo preload className="h-11 w-auto sm:h-12" />
    </Link>
  );
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** Stays at the top of the homepage: transparent over the hero, solid white once the page scrolls. */
function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, () => window.scrollY > 8, () => false);
  const close = () => setMenuOpen(false);
  const handleLogoClick = (event: React.MouseEvent) => {
    if (!isPlainLeftClick(event)) return;
    event.preventDefault();
    close();
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className={styles.headerTrack}>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.headerSolid : ""}`}>
        <div className={styles.headerRow}>
          <Link href="/#top" aria-label={`${site.name}, home`} onClick={handleLogoClick}>
            <BrandLogo preload className={styles.logo} />
          </Link>

          <nav aria-label={ui.mainNavLabel} className={styles.navLinks}>
            {nav.main.map((item) => (
              item.href === "/#results" ? (
                <a key={item.href} href="#results" className={styles.navLink}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={headerHref(item.href)} className={styles.navLink}>
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <ExternalButton
              href={whatsappUrlForPath("/")}
              variant="whatsapp"
              className="min-h-9! gap-1.5 rounded-full! bg-[#67D5E5]! px-3! py-2! text-xs! text-[#081C2C]! hover:bg-[#8EE3EF]! sm:min-h-10! sm:px-4! sm:text-sm!"
            >
              <WhatsAppIcon className="size-4" />
              {ui.headerWhatsappButton}
            </ExternalButton>

            <div className={styles.mobileActions}>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
                className={styles.menuButton}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
                  {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label={ui.mainNavLabel} className={`${styles.mobileMenu} max-h-[calc(100dvh-4rem)] origin-top animate-menu-in overflow-y-auto pb-6`}>
            <Container>
              <ul className="py-2">
                {nav.main.map((item) => (
                  <li key={item.href}>
                    {item.href === "/#results" ? (
                      <a href="#results" onClick={close} className="block py-3 text-lg font-semibold">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={headerHref(item.href)} onClick={close} className="block py-3 text-lg font-semibold">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </Container>
          </nav>
        )}
      </header>
    </div>
  );
}

function SiteHeader({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  const handleNavClick = (event: React.MouseEvent, href: string) => {
    close();
    const anchor = introAnchors[href];
    if (!anchor || pathname !== href || !isPlainLeftClick(event)) return;
    // Next may keep the current scroll position when the same hash is clicked again.
    event.preventDefault();
    requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "instant", block: "start" });
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white text-midnight shadow-[0_1px_0_var(--color-line)]">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 sm:h-18">
        <Logo />

        <nav aria-label={ui.mainNavLabel} className="col-start-2 hidden items-center justify-center gap-2.5 md:flex lg:gap-4">
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={headerHref(item.href)}
              onClick={(event) => handleNavClick(event, item.href)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <ExternalButton
            href={whatsappUrlForPath(pathname)}
            variant="whatsapp"
            className="min-h-9! gap-1.5 rounded-full! bg-[#67D5E5]! px-3! py-2! text-xs! text-[#081C2C]! hover:bg-[#8EE3EF]! sm:min-h-10! sm:px-4! sm:text-sm!"
          >
            <WhatsAppIcon className="size-4" />
            {ui.headerWhatsappButton}
          </ExternalButton>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border-2 border-midnight/35 md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-5">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={ui.mainNavLabel}
          className="max-h-[calc(100dvh-4rem)] origin-top animate-menu-in overflow-y-auto border-t border-line bg-white pb-6 md:hidden"
        >
          <Container>
            <ul className="py-2">
              {nav.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={headerHref(item.href)}
                    onClick={(event) => handleNavClick(event, item.href)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-3 text-lg font-semibold aria-[current=page]:text-cyan-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}

export function Header() {
  const pathname = usePathname();
  return pathname === "/" ? <HomeHeader /> : <SiteHeader pathname={pathname} />;
}
