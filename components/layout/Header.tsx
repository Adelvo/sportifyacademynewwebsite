"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, ui } from "@/content";
import { BookButton } from "../forms/BookButton";
import { useOpenBooking } from "../forms/BookingProvider";
import styles from "../home/hero.module.css";
import { BrandLogo } from "../ui/BrandLogo";
import { Container } from "../ui/Section";

const linkClass = "rounded text-sm font-semibold text-white hover:text-orange aria-[current=page]:text-orange";

export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
      <BrandLogo variant="light" preload className="h-11 w-auto sm:h-12" />
    </Link>
  );
}

function OrganisationsDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="org-menu"
        onClick={() => setOpen((value) => !value)}
        className={`${linkClass} inline-flex items-center gap-1`}
      >
        {nav.organisationsLabel}
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </button>
      {open && (
        <ul id="org-menu" className="absolute end-0 top-full mt-3 w-72 rounded-2xl bg-white p-2 text-midnight shadow-xl ring-1 ring-black/10">
          {nav.organisations.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block rounded-xl px-4 py-3 hover:bg-mist"
              >
                <span className="block font-bold">{item.label}</span>
                <span className="block text-sm text-ink-soft">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Transparent header that sits over the homepage hero. */
function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openBooking = useOpenBooking();
  const close = () => setMenuOpen(false);
  const allLinks = [...nav.home, ...nav.main, ...nav.organisations];
  const menuLinks = allLinks.filter((item, index) => allLinks.findIndex((other) => other.href === item.href) === index);

  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <Link href="/" aria-label={`${site.name}, home`}>
          <BrandLogo preload className={styles.logo} />
        </Link>

        <nav aria-label={ui.mainNavLabel} className={styles.navLinks}>
          {nav.home.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <button type="button" onClick={() => openBooking()} className={styles.navLink}>
            {nav.bookLabel}
          </button>
        </nav>

        <div className={styles.mobileActions}>
          <button type="button" onClick={() => openBooking()} className={styles.mobileBook}>
            {nav.bookLabel}
          </button>
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
              {menuLinks.map((item) => (
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
  );
}

function SiteHeader({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const orgHrefs = new Set(nav.organisations.map((item) => item.href));
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-midnight text-white shadow-[0_1px_0_rgb(255_255_255/0.1)]">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo />

        <nav aria-label={ui.mainNavLabel} className="hidden items-center gap-5 lg:flex">
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
          <OrganisationsDropdown pathname={pathname} />
        </nav>

        <div className="flex items-center gap-2">
          <BookButton className="min-h-11! px-4! py-2! text-sm whitespace-nowrap">{ui.bookAssessment}</BookButton>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.menuClose : ui.menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-full border-2 border-white/40 lg:hidden"
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
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-midnight pb-6 lg:hidden"
        >
          <Container>
            <ul className="py-2">
              {nav.main
                .filter((item) => !orgHrefs.has(item.href))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block py-3 text-lg font-semibold aria-[current=page]:text-orange"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <p className="mt-2 text-sm font-semibold text-on-midnight-soft">{nav.organisationsLabel}</p>
            <ul className="pt-1">
              {nav.organisations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-3 text-lg font-semibold aria-[current=page]:text-orange"
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
