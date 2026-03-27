import Image from 'next/image';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import AffiliateCTA from '@/components/AffiliateCTA';
import NewsletterForm from '@/components/NewsletterForm';
import { reviews } from '@/lib/reviews';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: 'Chord Progressions',
    desc: 'Learn to write compelling chord progressions that move listeners emotionally.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: 'Ear Training',
    desc: 'Develop your musical ear to identify intervals, chords, and progressions by sound.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Song Structure',
    desc: 'Understand verses, choruses, bridges, and how to arrange a complete song.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Improvisation',
    desc: 'Improvise confident leads and melodies using scales, modes, and chord tones.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Rhythm & Groove',
    desc: 'Master rhythmic concepts that make your music feel alive and engaging.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Full Song Composition',
    desc: 'Compose complete songs from scratch with harmony, melody, and arrangement.',
  },
];

const audiences = [
  { label: 'Songwriters', desc: 'Want to write better songs with stronger harmonic foundations and memorable melodies.' },
  { label: 'Guitarists & Instrumentalists', desc: 'Know how to play but want to understand the theory behind the music.' },
  { label: 'Producers & Composers', desc: 'Need theory knowledge to compose original music instead of relying on loops and presets.' },
  { label: 'Self-Taught Musicians', desc: 'Have been playing by ear and want to fill in the gaps in their musical knowledge.' },
];

const stats = [
  { value: '700K+', label: 'Community' },
  { value: '40M+', label: 'Views' },
  { value: '45', label: 'Lessons' },
  { value: '100+', label: 'PDFs' },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MusicTheory.xyz',
    url: 'https://musictheory.xyz',
    description: 'Your complete resource for music theory and songwriting.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://musictheory.xyz/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/hero-piano.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-dark-900/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark-900/80 to-dark-900" />
        <div className="absolute inset-0 theory-grid-bg opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
          <div className="animate-fade-in-up">
            <p className="text-primary-light text-sm font-semibold uppercase tracking-widest mb-6">The Complete Music Theory & Songwriting Resource</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              Master <span className="gradient-text">Music Theory</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Theory is the key to unlocking your creative potential. Learn to write chord progressions, compose melodies, train your ear, and write complete songs — from beginner to advanced.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up stagger-2">
            <Link href="/go/songwriting" className="bg-accent hover:bg-accent-light text-dark-900 font-bold px-10 py-4 rounded-xl text-lg transition-all glow-accent hover:scale-105 inline-flex items-center justify-center gap-2">
              Start Learning Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href="/music-theory-basics" className="border border-white/10 hover:border-primary/50 text-gray-300 font-semibold px-10 py-4 rounded-xl text-lg transition-all backdrop-blur-sm hover:bg-white/5">
              Free Beginner Guide
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in-up stagger-3">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl px-4 py-3">
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Featured Course */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="gradient-border">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center relative">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                <span className="text-accent text-sm font-semibold uppercase tracking-widest">Featured Course</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Theory and Songwriting Course</h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                45 video lessons that take you from music theory fundamentals to composing complete songs. Learn chord progressions, improvisation, ear training, song structure, rhythm & groove — all with 100+ downloadable PDFs.
              </p>
              <ul className="text-gray-400 space-y-3 mb-8">
                {['45 HD video lessons', '100+ downloadable PDFs', 'Lifetime access', '15-day money-back guarantee', '5-star rated by students'].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/go/songwriting" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 glow-primary text-lg">
                Get the Course — $270
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>

            <div className="w-full md:w-96 h-64 md:h-80 rounded-2xl overflow-hidden relative flex-shrink-0 bg-gradient-to-br from-primary/30 via-dark-700 to-accent/20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-primary/10" />
              <svg className="w-24 h-24 text-primary/40 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
              <div className="absolute top-4 right-4 bg-accent text-dark-900 font-bold text-2xl px-4 py-2 rounded-xl glow-accent">
                $270
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">What You&apos;ll Learn</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Essential music theory and songwriting skills that transform your creative output.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card rounded-xl p-7 hover:glow-primary transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <Image src="/images/concert.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark-900/85" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">What Students Say</h2>
            <p className="text-gray-400 text-lg">Real reviews from real musicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.slice(0, 4).map((r) => (
              <TestimonialCard key={r.author} review={r} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="text-primary hover:text-primary-light transition-colors font-semibold inline-flex items-center gap-2">
              Read All Reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 text-center mb-16">Who This Is For</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {audiences.map((a) => (
            <div key={a.label} className="gradient-border">
              <div className="glass-card rounded-2xl p-6 h-full">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-200 mb-1 text-lg">{a.label}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <Image src="/images/guitar-dark.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="relative max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">Join 1,000+ Musicians</h2>
          <p className="text-gray-400 mb-8 text-lg">Free theory lessons, songwriting tips, and practice exercises. No spam.</p>
          <div className="glass-card rounded-xl p-6">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 max-w-4xl mx-auto px-4">
        <AffiliateCTA />
      </section>
    </>
  );
}
