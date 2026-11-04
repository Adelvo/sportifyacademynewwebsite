import Image from "next/image";
import type { ImageAsset } from "@/content/types";

export function Photo({
  image,
  sizes,
  className = "",
  preload = false,
}: {
  image: ImageAsset;
  sizes: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      preload={preload}
      className={`object-cover ${className}`}
    />
  );
}
