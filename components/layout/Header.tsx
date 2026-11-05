"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { nav, site, ui } from "@/content";
import styles from "../home/hero.module.css";
import { BrandLogo } from "../ui/BrandLogo";
import { Container } from "../ui/Section";

const linkClass = "rounded text-sm font-semibold whitespace-nowrap text-midnight hover:text-cyan-deep aria-[current=page]:text-cyan-deep";

export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
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

  return (
    <div className={styles.headerTrack}>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.headerSolid : ""}`}>
        <div className={styles.headerRow}>
          <Link href="/" aria-label={`${site.name}, home`}>
            <BrandLogo preload className={styles.logo} />
          </Link>

          <nav aria-label={ui.mainNavLabel} className={styles.navLinks}>
            {nav.main.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

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

        {menuOpen && (
          <nav id="mobile-menu" aria-label={ui.mainNavLabel} className={`${styles.mobileMenu} max-h-[calc(100dvh-4rem)] overflow-y-auto pb-6`}>
            <Container>
              <ul className="py-2">
                {nav.main.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={close} className="block py-3 text-lg font-semibold">
                      {item.label}
                    </Link>
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

  return (
    <header className="sticky top-0 z-40 bg-white text-midnight shadow-[0_1px_0_var(--color-line)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo />

        <nav aria-label={ui.mainNavLabel} className="hidden items-center gap-4 xl:flex">
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border-2 border-midnight/35 xl:hidden"
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
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white pb-6 xl:hidden"
        >
          <Container>
            <ul className="py-2">
              {nav.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
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
