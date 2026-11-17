import Image from "next/image";
import { images } from "@/content";
import { HeroStats } from "./HeroStats";
import styles from "./hero.module.css";

export function HomeHero() {
  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <Image
          src={images.heroBanner.src}
          alt={images.heroBanner.alt}
          width={images.heroBanner.width}
          height={images.heroBanner.height}
          sizes="100vw"
          quality={90}
          loading="eager"
          className={styles.background}
        />
        <Image
          src={images.heroBannerBlur.src}
          alt=""
          width={images.heroBannerBlur.width}
          height={images.heroBannerBlur.height}
          sizes="100vw"
          aria-hidden="true"
          className={`${styles.background} ${styles.backgroundFade}`}
        />
      </section>
      <HeroStats />
    </div>
  );
}
