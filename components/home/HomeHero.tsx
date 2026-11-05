import Image from "next/image";
import { home, images, ui } from "@/content";
import { HeroStats } from "./HeroStats";
import { OffersLink } from "./OffersLink";
import styles from "./hero.module.css";
import { WORDMARK_PATH } from "./wordmarkPath";

export function HomeHero() {
  const { hero } = home;
  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <Image
          src={images.heroStudio.src}
          alt=""
          width={images.heroStudio.width}
          height={images.heroStudio.height}
          sizes="100vw"
          loading="eager"
          className={styles.background}
        />
        <Image
          src={images.heroGym.src}
          alt=""
          width={images.heroGym.width}
          height={images.heroGym.height}
          sizes="20vw"
          className={styles.gym}
        />
        <div className={styles.stage}>
          <div className={styles.scene}>
            {/* Decorative: the page heading is the h1 below. Outlined so it cannot reflow or swap. */}
            <svg viewBox="189 390 4722 1008" aria-hidden="true" className={styles.wordmark}>
              <path fillRule="evenodd" d={WORDMARK_PATH} />
            </svg>
            <Image
              src={images.heroTeam.src}
              alt={images.heroTeam.alt}
              width={images.heroTeam.width}
              height={images.heroTeam.height}
              sizes="(min-width: 1024px) 53vw, 90vw"
              preload
              className={styles.team}
            />
          </div>
          <div className={styles.copy}>
            <h1 className={styles.headline}>
              {hero.headlineLines.map((line) => (
                <span key={line} className={styles.line}>
                  {line}{" "}
                </span>
              ))}
            </h1>
            <p className={styles.description}>{hero.sub}</p>
            <OffersLink className={styles.cta}>
              {ui.ourOffers}
              <svg viewBox="0 0 26 18" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true" className={styles.arrow}>
                <path d="M1 9h23M16.5 1.5 24 9l-7.5 7.5" />
              </svg>
            </OffersLink>
          </div>
        </div>
      </section>
      <HeroStats />
    </div>
  );
}
