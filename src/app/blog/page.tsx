import Image from 'next/image';
import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Music Theory & Songwriting Blog — Articles & Guides',
  description: 'Browse all music theory and songwriting articles: chord progressions, scales, ear training, song structure, and course reviews.',
  path: '/blog',
});

const posts = [
  { href: '/music-theory-basics', title: 'Music Theory Basics: A Complete Beginner\'s Guide', excerpt: 'Everything you need to know to start understanding music theory — from notes and scales to chords and keys.', date: '2026-02-25', image: '/images/sheet-music.jpg' },
  { href: '/songwriting-tips', title: '10 Songwriting Tips That Actually Work', excerpt: 'Practical, proven songwriting advice from professional songwriters that you can apply to your music today.', date: '2026-02-20', image: '/images/music-studio.jpg' },
  { href: '/chord-progressions', title: 'Chord Progressions: The Complete Guide', excerpt: 'Master chord progressions from basic I-IV-V to advanced jazz and modal harmony. Includes examples from popular songs.', date: '2026-02-15', image: '/images/guitar-neck.jpg' },
  { href: '/ear-training', title: 'Ear Training for Musicians: How to Develop Your Musical Ear', excerpt: 'Practical exercises and techniques to develop your ability to hear and identify intervals, chords, and progressions.', date: '2026-02-10', image: '/images/concert.jpg' },
  { href: '/song-structure', title: 'Song Structure Explained: Verses, Choruses, and Beyond', excerpt: 'A complete guide to song forms and structures, from simple verse-chorus to complex multi-section arrangements.', date: '2026-02-05', image: '/images/recording-studio.jpg' },
  { href: '/scales-and-modes', title: 'Scales and Modes: Everything You Need to Know', excerpt: 'From major and minor scales to the seven modes — understand how scales create different musical moods and colors.', date: '2026-01-30', image: '/images/guitar-closeup.jpg' },
  { href: '/best-songwriting-course', title: 'Best Online Songwriting Course [2026 Review]', excerpt: 'We reviewed the top songwriting and music theory courses available in 2026. Here\'s our in-depth comparison.', date: '2026-01-25', image: '/images/stage-lights.jpg' },
  { href: '/music-theory-for-songwriters', title: 'Music Theory for Songwriters: What You Actually Need to Know', excerpt: 'Not all theory is created equal. Here\'s the essential theory knowledge that directly improves your songwriting.', date: '2026-01-20', image: '/images/sheet-music.jpg' },
  { href: '/how-to-write-a-song', title: 'How to Write a Song: Step-by-Step Guide for Beginners', excerpt: 'A practical, step-by-step walkthrough of writing your first song — from initial idea to finished composition.', date: '2026-01-15', image: '/images/playing-guitar.jpg' },
  { href: '/intervals-explained', title: 'Musical Intervals Explained Simply', excerpt: 'Understand the building blocks of all melody and harmony — intervals. Simple explanations with audio examples.', date: '2026-01-10', image: '/images/strings-closeup.jpg' },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/guitar-dark.jpg" alt="Guitar" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Music Theory <span className="gradient-text">Blog</span></h1>
        </div>
      </div>
      <div className="text-center mb-16">
        <p className="text-gray-400 text-lg">Guides, theory breakdowns, and songwriting tips to level up your music.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className="glass-card rounded-xl overflow-hidden group hover:glow-primary transition-all duration-300">
            <div className="h-48 relative overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
              <time className="absolute bottom-3 left-4 text-xs text-gray-400 bg-dark-900/60 backdrop-blur-sm px-2 py-1 rounded">{post.date}</time>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{post.excerpt}</p>
              <span className="text-sm text-primary font-semibold inline-flex items-center gap-1">
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
