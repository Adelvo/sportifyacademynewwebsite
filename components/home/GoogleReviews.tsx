import { googleReviews, home, images } from "@/content";
import type { GoogleReview } from "@/content/types";
import { GoogleLogo, GoogleRatingBadge } from "@/components/ui/GoogleRating";
import { PhotoMarquee } from "./PhotoMarquee";

function ReviewCard({ review, duplicate = false }: { review: GoogleReview; duplicate?: boolean }) {
  const { reviews } = home;
  return (
    <a
      href={review.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-label={duplicate ? undefined : `${reviews.readMore}: ${review.name}, ${reviews.opensOnGoogle}`}
      className="group flex h-full w-72 flex-col rounded bg-white p-6 text-center text-midnight shadow-lg sm:w-80"
    >
      <span className="flex items-center justify-center gap-3">
        <GoogleLogo />
        <span role="img" aria-label={reviews.stars} className="text-lg leading-none tracking-wider text-[#fbbc05]">
          ★★★★★
        </span>
      </span>
      <span className="mt-5 flex-1 leading-relaxed">“{review.text}”</span>
      <span className="mt-5 block font-bold">{review.name}</span>
      <span className="mt-1 block text-sm font-semibold text-cyan-deep underline-offset-4 group-hover:underline">
        {reviews.readMore} →
      </span>
    </a>
  );
}

/** Google reviews on a long gym photo. Each card opens the full review on Google. */
export function GoogleReviews() {
  return (
    <PhotoMarquee
      id="reviews-title"
      title={home.reviews.title}
      aside={<GoogleRatingBadge className="rounded!" />}
      image={images.reviewsBackground}
      items={googleReviews}
      seconds={130}
      renderCard={(review, duplicate) => <ReviewCard review={review} duplicate={duplicate} />}
    />
  );
}
