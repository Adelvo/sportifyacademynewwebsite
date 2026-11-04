import { TODO_PATTERN } from "@/lib/links";

/** Prints content text. Any [TODO: ...] marker is highlighted so it cannot be missed. */
export function Txt({ children }: { children: string }) {
  return (
    <>
      {children.split(TODO_PATTERN).map((part, i) =>
        i % 2 === 1 ? <TodoMark key={i}>{part}</TodoMark> : part,
      )}
    </>
  );
}

export function TodoMark({ children }: { children: string }) {
  return (
    <mark className="rounded bg-amber-200 px-1 py-0.5 text-sm font-semibold text-amber-950">
      {children}
    </mark>
  );
}
