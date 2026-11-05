import { googleReviews, home, images, site } from "@/content";
import type { GoogleReview } from "@/content/types";
import { PhotoMarquee } from "./PhotoMarquee";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-6 shrink-0">
      <path fill="#ea4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.600l6.85-6.850C35.900 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.220l7.98 6.190C12.43 13.72 17.74 9.500 24 9.5z" />
      <path fill="#4285f4" d="M46.98 24.550c0-1.57-.15-3.09-.38-4.550H24v9.020h12.940c-.58 2.96-2.26 5.48-4.78 7.180l7.73 6c4.51-4.18 7.09-10.36 7.09-17.650z" />
      <path fill="#fbbc05" d="M10.53 28.590A14.500 14.500 0 0 1 9.76 24c0-1.600.27-3.14.77-4.590l-7.98-6.190A23.900 23.900 0 0 0 0 24c0 3.87.92 7.53 2.56 10.780l7.97-6.190z" />
      <path fill="#34a853" d="M24 48c6.48 0 11.93-2.13 15.89-5.810l-7.73-6c-2.15 1.45-4.92 2.300-8.16 2.300-6.26 0-11.57-4.22-13.47-9.910l-7.98 6.190C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

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

/** The overall Google rating. Opens the Sportify Academy listing on Google. */
function GoogleRatingLink() {
  const { reviews } = home;
  return (
    <a
      href={site.address.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={reviews.ratingLabel}
      className="flex items-center gap-2 rounded bg-white px-4 py-2.5 whitespace-nowrap text-midnight shadow-lg transition-shadow hover:shadow-xl"
    >
      <GoogleLogo />
      <span aria-hidden="true" className="leading-none tracking-wider text-[#fbbc05]">
        ★★★★★
      </span>
      <span className="font-bold leading-none">{reviews.rating}</span>
    </a>
  );
}

/** Google reviews on a long gym photo. Each card opens the full review on Google. */
export function GoogleReviews() {
  return (
    <PhotoMarquee
      id="reviews-title"
      title={home.reviews.title}
      aside={<GoogleRatingLink />}
      image={images.reviewsBackground}
      items={googleReviews}
      seconds={130}
      renderCard={(review, duplicate) => <ReviewCard review={review} duplicate={duplicate} />}
    />
  );
}
