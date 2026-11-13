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
          loading="eager"
          className={styles.background}
        />
        <Image
          src={images.heroBannerEmpty.src}
          alt=""
          width={images.heroBannerEmpty.width}
          height={images.heroBannerEmpty.height}
          sizes="100vw"
          aria-hidden="true"
          className={`${styles.background} ${styles.backgroundFade}`}
        />
      </section>
      <HeroStats />
    </div>
  );
}
