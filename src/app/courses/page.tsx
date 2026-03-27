import Image from 'next/image';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/courses';

export const metadata = createMetadata({
  title: 'Music Theory & Songwriting Courses',
  description: 'Browse all Signals Music Studio courses — from music theory and songwriting to rhythm guitar and chord progressions. Find the right course for your level.',
  path: '/courses',
});

export default function CoursesPage() {
  const featured = courses.find((c) => c.slug === 'theory-songwriting')!;
  const otherCourses = courses.filter((c) => c.slug !== 'theory-songwriting');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Music Courses from Signals Music Studio',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: c.name,
        description: c.description,
        provider: { '@type': 'Organization', name: 'Signals Music Studio' },
      },
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-8 glass-card rounded-lg px-4 py-2 inline-flex items-center gap-2">
        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/recording-studio.jpg" alt="Recording studio" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Music <span className="gradient-text">Courses</span></h1>
        </div>
      </div>
      <p className="text-gray-400 mb-16 max-w-2xl text-lg">
        All courses from Signals Music Studio. Whether you&apos;re learning theory from scratch or advancing your songwriting, there&apos;s a course for you.
      </p>

      {/* Hero treatment for featured course */}
      <section className="mb-16">
        <div className="gradient-border">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 h-64 md:h-auto relative bg-gradient-to-br from-primary/30 via-dark-700 to-accent/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-700/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent md:hidden" />
                <svg className="w-20 h-20 text-primary/40 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <div className="absolute top-4 left-4 bg-accent text-dark-900 font-bold px-3 py-1 rounded-lg text-sm glow-accent">
                  Featured
                </div>
              </div>
              <div className="p-8 md:p-12 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
                  <span className="text-accent text-sm font-semibold uppercase tracking-widest">Recommended</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-200 mb-3">{featured.name}</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{featured.description}</p>
                <ul className="text-gray-400 space-y-2 mb-8">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <Link href="/go/songwriting" className="bg-accent hover:bg-accent-light text-dark-900 font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 glow-accent text-lg">
                    Get Course — {featured.price}
                  </Link>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold text-gray-200 mb-8">All Courses</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherCourses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
