import Image from "next/image";

const logos = {
  /** Black lettering, for light backgrounds. */
  dark: "/brand/logo.svg",
  /** White lettering, for dark backgrounds. */
  light: "/brand/logo-white.svg",
};

/** The Sportify Academy logo. Leave alt empty when a surrounding link already carries the name. */
export function BrandLogo({
  variant = "dark",
  alt = "",
  className = "",
  preload = false,
}: {
  variant?: keyof typeof logos;
  alt?: string;
  className?: string;
  preload?: boolean;
}) {
  return <Image src={logos[variant]} alt={alt} width={280} height={105} preload={preload} className={className} />;
}
