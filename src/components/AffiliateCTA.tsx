import Link from 'next/link';

export default function AffiliateCTA({
  slug = 'songwriting',
  text = 'Start Learning Today',
  className = '',
}: {
  slug?: string;
  text?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark-700 to-accent/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />

      <div className="relative glass-card rounded-2xl p-10 text-center border border-white/10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="text-xs text-accent font-semibold uppercase tracking-widest">Complete Course</span>
        </div>

        <h3 className="text-3xl font-bold text-gray-200 mb-4">Ready to Master Music Theory & Songwriting?</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          Join thousands of musicians who have transformed their songwriting with the Theory and Songwriting Course. 45 lessons, 100+ PDFs, lifetime access.
        </p>

        <Link
          href={`/go/${slug}`}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-dark-900 font-bold px-10 py-4 rounded-xl text-lg transition-all glow-accent hover:scale-105"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          {text}
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>

        <p className="text-sm text-gray-400 mt-4">$270 · 45 Lessons · Lifetime Access · 15-Day Guarantee</p>
      </div>
    </div>
  );
}
