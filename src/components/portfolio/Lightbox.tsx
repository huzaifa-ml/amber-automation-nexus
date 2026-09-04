import { useEffect } from "react";
import { X } from "lucide-react";

export function Lightbox({
  src,
  caption,
  onClose,
}: {
  src: string | null;
  caption?: string | undefined;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? "Project screenshot"}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/92 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-card/80 text-foreground transition-colors hover:border-gold hover:text-gold"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>
      <figure
        onClick={(e) => e.stopPropagation()}
        className="max-h-full w-full max-w-6xl overflow-hidden rounded-xl border border-gold/20 bg-card/70 p-2 sm:p-3"
      >
        <img
          src={src}
          alt={caption ?? "Project screenshot"}
          className="mx-auto max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
        />
        {caption ? (
          <figcaption className="mt-3 px-1 pb-1 text-center text-xs text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
