import type { ComponentProps } from "react";

/** The About video's corner accent, shared by local and embedded players. */
export function VideoFrame({ children, className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`relative rounded-[1.25rem] bg-[linear-gradient(135deg,var(--color-cyan),transparent_35%,transparent_75%,var(--color-cyan))] ${className}`}
    >
      <div className="absolute top-1.5 right-0.5 bottom-0.5 left-1.5 overflow-hidden rounded-2xl bg-black">
        {children}
      </div>
    </div>
  );
}
