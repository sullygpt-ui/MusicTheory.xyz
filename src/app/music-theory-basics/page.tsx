import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'Music Theory Basics: A Complete Beginner\'s Guide',
  description: 'Learn the fundamentals of music theory from scratch. Covers notes, scales, intervals, chords, keys, and how they all connect to help you become a better musician.',
  path: '/music-theory-basics',
});

export default function MusicTheoryBasicsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Music Theory Basics: A Complete Beginner\'s Guide',
    description: 'Learn the fundamentals of music theory from scratch.',
    author: { '@type': 'Organization', name: 'MusicTheory.xyz' },
    datePublished: '2026-02-25',
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/sheet-music.jpg" alt="Sheet music" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Music Theory Basics: A Complete Beginner&apos;s Guide</h1>
        </div>
      </div>
      <p className="text-gray-400 text-lg mb-8">Published February 25, 2026 · 12 min read</p>

      <div className="prose-theory">
        <p>
          Music theory is the grammar of music. Just as understanding English grammar helps you write more effectively, understanding music theory helps you create, perform, and appreciate music at a deeper level. The good news? <strong>You don&apos;t need to be a genius to learn it.</strong> Music theory is logical, pattern-based, and surprisingly intuitive once you grasp the fundamentals.
        </p>
        <p>
          In this guide, we&apos;ll cover everything a beginner needs to know — from the very basics of what notes are, through scales and intervals, to building chords and understanding keys. By the end, you&apos;ll have a solid foundation that makes everything else in music make more sense.
        </p>

        <h2>What Is Music Theory?</h2>
        <p>
          Music theory is simply the study of how music works. It&apos;s a framework for understanding why certain combinations of notes sound good together, why some melodies feel happy while others feel sad, and how musicians communicate ideas about music to each other.
        </p>
        <p>
          Think of it this way: you don&apos;t need to understand grammar to speak, and you don&apos;t need to understand theory to play music. But understanding both makes you significantly better at communicating your ideas — whether in words or in sound.
        </p>
        <p>
          Many self-taught musicians resist learning theory because they think it will constrain their creativity. In reality, <strong>theory gives you more creative options, not fewer</strong>. It&apos;s like learning that your paint set has colors you didn&apos;t know existed.
        </p>

        <h2>The Musical Alphabet</h2>
        <p>
          Western music uses 12 unique notes. These 12 notes repeat in higher and lower octaves across the entire range of human hearing. The notes are:
        </p>
        <p>
          <strong>A — A#/Bb — B — C — C#/Db — D — D#/Eb — E — F — F#/Gb — G — G#/Ab</strong>
        </p>
        <p>
          You&apos;ll notice some notes have two names (like A# and Bb). These are called <strong>enharmonic equivalents</strong> — they sound exactly the same but are named differently depending on the musical context. Don&apos;t worry about this too much right now; it becomes intuitive with practice.
        </p>
        <p>
          The distance between any two adjacent notes is called a <strong>half step</strong> (or semitone). The distance of two half steps is called a <strong>whole step</strong> (or whole tone). These small distances are the building blocks of everything in music theory.
        </p>

        <h2>Scales: The Foundation of Melody</h2>
        <p>
          A scale is a specific pattern of notes arranged in ascending or descending order. Scales are the foundation of melody and harmony — nearly every piece of music you&apos;ve ever heard is built from notes within a particular scale.
        </p>
        <p>
          The most important scale to learn first is the <strong>major scale</strong>. The major scale follows this pattern of whole steps (W) and half steps (H):
        </p>
        <p>
          <strong>W — W — H — W — W — W — H</strong>
        </p>
        <p>
          Starting from C, this gives us: <strong>C — D — E — F — G — A — B — C</strong>. This is the C major scale — the most common scale in Western music and the one with no sharps or flats.
        </p>
        <p>
          The <strong>minor scale</strong> (natural minor) follows a different pattern: <strong>W — H — W — W — H — W — W</strong>. Starting from A: <strong>A — B — C — D — E — F — G — A</strong>. Notice this uses the exact same notes as C major, just starting from a different point. This relationship is called <strong>relative major and minor</strong>.
        </p>
        <p>
          Major scales tend to sound bright, happy, and resolved. Minor scales tend to sound dark, melancholic, or mysterious. This emotional quality is one of the most powerful tools in a songwriter&apos;s toolkit.
        </p>

        <h2>Intervals: The Distance Between Notes</h2>
        <p>
          An <strong>interval</strong> is the distance between two notes. Intervals are the atoms of music theory — chords, scales, and melodies are all built from intervals. Understanding intervals helps you identify what you hear, communicate musical ideas, and build chords from scratch.
        </p>
        <p>
          Here are the intervals within one octave, measured in half steps from the root:
        </p>
        <ul>
          <li><strong>Unison (0)</strong> — Same note</li>
          <li><strong>Minor 2nd (1)</strong> — Tense, dissonant (think &ldquo;Jaws&rdquo; theme)</li>
          <li><strong>Major 2nd (2)</strong> — Neutral, stepping sound</li>
          <li><strong>Minor 3rd (3)</strong> — Sad, dark</li>
          <li><strong>Major 3rd (4)</strong> — Happy, bright</li>
          <li><strong>Perfect 4th (5)</strong> — Open, strong (think &ldquo;Here Comes the Bride&rdquo;)</li>
          <li><strong>Tritone (6)</strong> — Unstable, tense</li>
          <li><strong>Perfect 5th (7)</strong> — Powerful, open (think &ldquo;Star Wars&rdquo;)</li>
          <li><strong>Minor 6th (8)</strong> — Bittersweet</li>
          <li><strong>Major 6th (9)</strong> — Warm, pleasant</li>
          <li><strong>Minor 7th (10)</strong> — Bluesy, unresolved</li>
          <li><strong>Major 7th (11)</strong> — Dreamy, jazzy</li>
          <li><strong>Octave (12)</strong> — Same note, higher register</li>
        </ul>
        <p>
          For a deeper dive into intervals, check out our complete guide on <a href="/intervals-explained">musical intervals explained simply</a>.
        </p>

        <h2>Chords: Stacking Intervals</h2>
        <p>
          A <strong>chord</strong> is three or more notes played simultaneously. The most basic chords are <strong>triads</strong> — three-note chords built by stacking intervals of thirds.
        </p>
        <p>
          The four basic triad types are:
        </p>
        <ul>
          <li><strong>Major triad</strong> — Root + major 3rd + perfect 5th (happy, bright)</li>
          <li><strong>Minor triad</strong> — Root + minor 3rd + perfect 5th (sad, dark)</li>
          <li><strong>Diminished triad</strong> — Root + minor 3rd + diminished 5th (tense, unstable)</li>
          <li><strong>Augmented triad</strong> — Root + major 3rd + augmented 5th (mysterious, suspended)</li>
        </ul>
        <p>
          For example, a C major chord contains C, E, and G. A C minor chord contains C, Eb, and G. The only difference is that one note (the third) moves by a half step — and that tiny change completely transforms the emotional quality of the chord.
        </p>
        <p>
          Beyond triads, you can add more notes to create <strong>seventh chords</strong> (4 notes), <strong>ninth chords</strong> (5 notes), and extended chords. Each additional note adds complexity and color to the sound.
        </p>

        <h2>Keys: The Home Base</h2>
        <p>
          A <strong>key</strong> is a group of notes and chords that &ldquo;belong together&rdquo; — they sound natural and cohesive when used in combination. When someone says a song is &ldquo;in the key of G major,&rdquo; they mean the song primarily uses notes and chords from the G major scale.
        </p>
        <p>
          Every major scale generates seven chords (called <strong>diatonic chords</strong>) — one chord built on each scale degree. In the key of C major, these are:
        </p>
        <ul>
          <li><strong>I — C major</strong></li>
          <li><strong>ii — D minor</strong></li>
          <li><strong>iii — E minor</strong></li>
          <li><strong>IV — F major</strong></li>
          <li><strong>V — G major</strong></li>
          <li><strong>vi — A minor</strong></li>
          <li><strong>vii° — B diminished</strong></li>
        </ul>
        <p>
          Notice the pattern: <strong>major, minor, minor, major, major, minor, diminished</strong>. This pattern is the same in every major key. Uppercase Roman numerals indicate major chords; lowercase indicate minor chords.
        </p>
        <p>
          This is incredibly powerful for songwriting. If you&apos;re writing in C major, you know that C, F, and G are your major chords, and Dm, Em, and Am are your minor chords. Any combination of these will sound good together.
        </p>

        <h2>Chord Progressions: Putting It Together</h2>
        <p>
          A <strong>chord progression</strong> is a sequence of chords. Most popular music uses relatively simple progressions — often just 3 or 4 chords. Here are some of the most common:
        </p>
        <ul>
          <li><strong>I — V — vi — IV</strong> — The most popular progression in modern music (&ldquo;Let It Be,&rdquo; &ldquo;No Woman No Cry,&rdquo; countless pop hits)</li>
          <li><strong>I — IV — V — I</strong> — Classic rock and blues progression</li>
          <li><strong>vi — IV — I — V</strong> — The &ldquo;emotional&rdquo; progression (starts on the minor chord)</li>
          <li><strong>I — vi — IV — V</strong> — The 1950s doo-wop progression</li>
          <li><strong>ii — V — I</strong> — The fundamental jazz progression</li>
        </ul>
        <p>
          For a complete exploration of chord progressions, check out our <a href="/chord-progressions">chord progressions guide</a>.
        </p>

        <h2>Rhythm: The Heartbeat of Music</h2>
        <p>
          While notes and chords tell you <strong>what</strong> to play, rhythm tells you <strong>when</strong> to play it. Rhythm is organized around a steady pulse called the <strong>beat</strong>, which is grouped into <strong>measures</strong> (or bars).
        </p>
        <p>
          The most common time signature is <strong>4/4</strong> (four beats per measure), which covers the vast majority of pop, rock, R&B, country, and hip-hop. Other common time signatures include <strong>3/4</strong> (waltz time) and <strong>6/8</strong> (compound time, common in ballads and folk music).
        </p>
        <p>
          Note values tell you how long each note lasts relative to the beat:
        </p>
        <ul>
          <li><strong>Whole note</strong> — 4 beats</li>
          <li><strong>Half note</strong> — 2 beats</li>
          <li><strong>Quarter note</strong> — 1 beat</li>
          <li><strong>Eighth note</strong> — 1/2 beat</li>
          <li><strong>Sixteenth note</strong> — 1/4 beat</li>
        </ul>

        <h2>How to Practice Music Theory</h2>
        <p>
          The best way to learn theory is to apply it immediately. Here are practical exercises:
        </p>
        <ul>
          <li><strong>Build scales</strong> — Pick a random note and build a major scale from it using the W-W-H-W-W-W-H formula</li>
          <li><strong>Find diatonic chords</strong> — Once you have a scale, build the seven diatonic chords</li>
          <li><strong>Analyze songs</strong> — Listen to your favorite songs and try to identify the chord progression using Roman numerals</li>
          <li><strong>Ear training</strong> — Practice identifying intervals by ear. Start with perfect 5ths and octaves, then add more</li>
          <li><strong>Write progressions</strong> — Pick a key and write a 4-chord progression using diatonic chords. Play it and listen to how it sounds</li>
        </ul>
        <p>
          Don&apos;t try to learn everything at once. Focus on one concept at a time, and always connect it back to real music you know and love.
        </p>

        <h2>Where to Go From Here</h2>
        <p>
          This guide covers the essential foundations, but there&apos;s much more to explore. Here are your next steps:
        </p>
        <ul>
          <li><a href="/intervals-explained">Intervals Explained Simply</a> — Deep dive into the building blocks of harmony</li>
          <li><a href="/scales-and-modes">Scales and Modes</a> — Go beyond major and minor</li>
          <li><a href="/chord-progressions">Chord Progressions Guide</a> — Master the art of harmonic movement</li>
          <li><a href="/ear-training">Ear Training</a> — Develop your ability to hear theory in action</li>
        </ul>
        <p>
          If you want a structured, comprehensive approach to learning theory and applying it to songwriting, we highly recommend Jake Lizzio&apos;s Theory and Songwriting Course. It takes everything in this guide and goes much deeper, with 45 video lessons and 100+ practice PDFs.
        </p>
      </div>

      <div className="mt-12">
        <AffiliateCTA />
      </div>
    </article>
  );
}
