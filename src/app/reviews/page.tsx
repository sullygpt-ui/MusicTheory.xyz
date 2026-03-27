import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import TestimonialCard from '@/components/TestimonialCard';
import AffiliateCTA from '@/components/AffiliateCTA';
import { reviews } from '@/lib/reviews';

export const metadata = createMetadata({
  title: 'Student Reviews — Theory and Songwriting Course',
  description: 'Read real reviews from students of the Theory and Songwriting Course by Signals Music Studio. 5-star rated by musicians worldwide.',
  path: '/reviews',
});

export default function ReviewsPage() {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Theory and Songwriting Course',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: 5,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-8 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/concert.jpg" alt="Concert" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Student Reviews</h1>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <div className="text-5xl font-bold text-accent">{avgRating}</div>
        <div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-accent text-xl">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-400">{reviews.length} verified reviews</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reviews.map((r) => (
          <TestimonialCard key={r.author} review={r} />
        ))}
      </div>

      <AffiliateCTA />
    </div>
  );
}
