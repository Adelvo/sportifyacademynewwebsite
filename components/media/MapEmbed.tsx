import { site, ui } from "@/content";

/** The Google map itself. Set its size with className. */
export function MapFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <iframe
        src={site.address.mapEmbedUrl}
        title={ui.map.title}
        className="absolute inset-0 size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
