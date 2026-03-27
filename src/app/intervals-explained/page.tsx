import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'Musical Intervals Explained Simply',
  description: 'Understand the building blocks of all melody and harmony — intervals. Simple explanations with examples and reference songs for each interval.',
  path: '/intervals-explained',
});

export default function IntervalsExplainedPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Musical Intervals Explained Simply',
    description: 'A simple guide to understanding musical intervals.',
    author: { '@type': 'Organization', name: 'MusicTheory.xyz' },
    datePublished: '2026-01-10',
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/strings-closeup.jpg" alt="Strings closeup" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Musical Intervals Explained Simply</h1>
        </div>
      </div>
      <p className="text-gray-400 text-lg mb-8">Published January 10, 2026 · 12 min read</p>

      <div className="prose-theory">
        <p>
          Intervals are the most fundamental concept in all of music theory. An <strong>interval</strong> is simply the distance between two notes — and understanding intervals unlocks everything else: scales, chords, melody, harmony, and ear training all become clearer once you grasp how intervals work.
        </p>
        <p>
          Think of intervals as the <strong>atoms of music</strong>. Just as atoms combine to form molecules and molecules form everything in the physical world, intervals combine to form scales and chords, which form the music you hear every day.
        </p>

        <h2>What Is an Interval?</h2>
        <p>
          An interval measures the distance between two notes in terms of <strong>half steps</strong> (semitones). A half step is the smallest distance in Western music — one piano key to the very next, or one guitar fret. A <strong>whole step</strong> equals two half steps.
        </p>
        <p>
          Intervals can be <strong>melodic</strong> (notes played one after another) or <strong>harmonic</strong> (notes played simultaneously). The interval is the same either way — only the context changes.
        </p>

        <h2>Every Interval Within One Octave</h2>

        <h3>Unison — 0 half steps</h3>
        <p>
          Two identical notes. C to C. It sounds like one note because it is one note. Unisons create power and thickness when multiple instruments play the same pitch.
        </p>

        <h3>Minor 2nd — 1 half step</h3>
        <p>
          C to Db. The smallest and most <strong>dissonant</strong> interval. It creates suspense and unease.
        </p>
        <p>
          <strong>Hear it:</strong> The &ldquo;Jaws&rdquo; theme — those two alternating notes are a minor 2nd. The tension of this interval is why it sounds so menacing.
        </p>

        <h3>Major 2nd — 2 half steps</h3>
        <p>
          C to D. A whole step — the standard &ldquo;stepping&rdquo; interval. Most scale steps are whole steps.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Happy Birthday&rdquo; — the first two notes (&ldquo;Hap-py&rdquo;).
        </p>

        <h3>Minor 3rd — 3 half steps</h3>
        <p>
          C to Eb. The interval that defines <strong>minor chords</strong>. Distinctly sad, dark, or mysterious.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Greensleeves&rdquo; (first two notes) or the opening of Beethoven&apos;s 5th Symphony.
        </p>

        <h3>Major 3rd — 4 half steps</h3>
        <p>
          C to E. The interval that defines <strong>major chords</strong>. Happy, bright, optimistic. The entire difference between a major and minor chord comes down to this one half-step distinction between a major 3rd and minor 3rd.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;When the Saints Go Marching In&rdquo; (first two distinct pitches).
        </p>

        <h3>Perfect 4th — 5 half steps</h3>
        <p>
          C to F. Strong, open, stable. Sounds like a question or like something is about to begin.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Here Comes the Bride&rdquo; or &ldquo;Amazing Grace&rdquo; (&ldquo;A-ma-&rdquo;).
        </p>

        <h3>Tritone — 6 half steps</h3>
        <p>
          C to F#/Gb. Exactly halfway through the octave. The most <strong>unstable</strong> interval — historically called <em>diabolus in musica</em> (&ldquo;the devil in music&rdquo;). It creates extreme tension that wants to resolve. The tritone is the engine of dominant 7th chords and the V-I resolution that drives most Western harmony.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;The Simpsons&rdquo; theme (first two notes) or &ldquo;Maria&rdquo; from West Side Story.
        </p>

        <h3>Perfect 5th — 7 half steps</h3>
        <p>
          C to G. One of the most <strong>consonant</strong> (pleasant-sounding) intervals. It sounds powerful, open, and pure. The perfect 5th is the basis of power chords in rock music and is found in virtually every chord.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Star Wars&rdquo; main theme (first two notes) or &ldquo;Twinkle Twinkle Little Star.&rdquo;
        </p>

        <h3>Minor 6th — 8 half steps</h3>
        <p>
          C to Ab. A wide, bittersweet interval that can sound dramatic or yearning.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;The Entertainer&rdquo; by Scott Joplin (first two distinct notes) or the theme from &ldquo;Love Story.&rdquo;
        </p>

        <h3>Major 6th — 9 half steps</h3>
        <p>
          C to A. Warm, pleasant, and slightly nostalgic. It has an open, gentle quality.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;My Bonnie Lies Over the Ocean&rdquo; (&ldquo;My Bon-&rdquo;) or &ldquo;NBC chimes&rdquo; (first two notes).
        </p>

        <h3>Minor 7th — 10 half steps</h3>
        <p>
          C to Bb. A bluesy, slightly unresolved interval. It&apos;s the interval that turns a major triad into a dominant 7th chord — the chord that defines blues, jazz, and rock harmony.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Somewhere&rdquo; from West Side Story (&ldquo;There&apos;s a...&rdquo;) or the Star Trek theme.
        </p>

        <h3>Major 7th — 11 half steps</h3>
        <p>
          C to B. Just one half step short of an octave. It sounds dreamy, jazzy, and slightly tense — a beautiful, sophisticated dissonance. Major 7th chords (built on this interval) are the signature sound of jazz and neo-soul.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Take On Me&rdquo; by a-ha (chorus: &ldquo;Take... on&rdquo;).
        </p>

        <h3>Octave — 12 half steps</h3>
        <p>
          C to the next C. The same note in a higher (or lower) register. Octaves sound &ldquo;the same but different&rdquo; — our ears perceive notes an octave apart as fundamentally the same pitch. This is why the musical alphabet only has 12 unique notes.
        </p>
        <p>
          <strong>Hear it:</strong> &ldquo;Somewhere Over the Rainbow&rdquo; (&ldquo;Some-where&rdquo;).
        </p>
      </div>

      <div className="my-12">
        <AffiliateCTA />
      </div>

      <div className="prose-theory">
        <h2>Consonance and Dissonance</h2>
        <p>
          Intervals exist on a spectrum from <strong>consonant</strong> (stable, pleasant, resolved) to <strong>dissonant</strong> (tense, unstable, wanting to resolve). Understanding this spectrum helps you create music with intentional emotional effects.
        </p>
        <ul>
          <li><strong>Most consonant:</strong> Unison, octave, perfect 5th</li>
          <li><strong>Consonant:</strong> Major 3rd, minor 3rd, major 6th, minor 6th</li>
          <li><strong>Mildly dissonant:</strong> Major 2nd, minor 7th, major 7th</li>
          <li><strong>Most dissonant:</strong> Minor 2nd, tritone</li>
        </ul>
        <p>
          Neither consonance nor dissonance is &ldquo;better.&rdquo; Music needs both. Consonance creates stability and rest; dissonance creates tension and movement. The interplay between them is what gives music its emotional power.
        </p>

        <h2>How Intervals Build Chords</h2>
        <p>
          Every chord is a stack of intervals. Understanding this lets you build any chord from scratch:
        </p>
        <ul>
          <li><strong>Major triad</strong> = major 3rd + minor 3rd (C-E-G: 4 half steps then 3)</li>
          <li><strong>Minor triad</strong> = minor 3rd + major 3rd (C-Eb-G: 3 half steps then 4)</li>
          <li><strong>Diminished triad</strong> = minor 3rd + minor 3rd (C-Eb-Gb: 3 then 3)</li>
          <li><strong>Augmented triad</strong> = major 3rd + major 3rd (C-E-G#: 4 then 4)</li>
          <li><strong>Dominant 7th</strong> = major triad + minor 7th from root (C-E-G-Bb)</li>
          <li><strong>Major 7th</strong> = major triad + major 7th from root (C-E-G-B)</li>
          <li><strong>Minor 7th</strong> = minor triad + minor 7th from root (C-Eb-G-Bb)</li>
        </ul>
        <p>
          Once you know your intervals, you never need to memorize chord shapes as abstract patterns. You can build any chord on any root by stacking the right intervals.
        </p>

        <h2>How Intervals Build Scales</h2>
        <p>
          Scales are also defined by their interval patterns:
        </p>
        <ul>
          <li><strong>Major scale:</strong> W-W-H-W-W-W-H (where W = whole step, H = half step)</li>
          <li><strong>Natural minor:</strong> W-H-W-W-H-W-W</li>
          <li><strong>Minor pentatonic:</strong> minor 3rd — whole — whole — minor 3rd — whole</li>
        </ul>
        <p>
          For a complete exploration of scales, see our <a href="/scales-and-modes">scales and modes guide</a>.
        </p>

        <h2>Interval Inversion</h2>
        <p>
          When you flip an interval upside down (move the bottom note up an octave, or the top note down), you get its <strong>inversion</strong>. Inversions always add up to 12 half steps (one octave):
        </p>
        <ul>
          <li>Minor 2nd (1) ↔ Major 7th (11)</li>
          <li>Major 2nd (2) ↔ Minor 7th (10)</li>
          <li>Minor 3rd (3) ↔ Major 6th (9)</li>
          <li>Major 3rd (4) ↔ Minor 6th (8)</li>
          <li>Perfect 4th (5) ↔ Perfect 5th (7)</li>
          <li>Tritone (6) ↔ Tritone (6) — it&apos;s its own inversion</li>
        </ul>
        <p>
          Notice the pattern: major intervals invert to minor (and vice versa), perfect intervals invert to perfect, and the tritone inverts to itself. Understanding inversions helps with voice leading, chord voicings, and understanding why certain intervals sound related.
        </p>

        <h2>Training Your Ear to Hear Intervals</h2>
        <p>
          Knowing intervals intellectually is step one. <strong>Hearing them</strong> is the real goal. Here&apos;s how to develop this skill:
        </p>
        <ul>
          <li><strong>Use reference songs.</strong> Associate each interval with a song you know (use the examples above). When you hear an interval, mentally sing the reference song to identify it.</li>
          <li><strong>Practice daily.</strong> Use an ear training app (Functional Ear Trainer, Perfect Ear, or Tenuto) for 5-10 minutes daily. Start with just 4-5 intervals and add more as you improve.</li>
          <li><strong>Sing intervals.</strong> Play a note on your instrument, then sing each interval above it. Check yourself. Singing is the fastest way to internalize intervals.</li>
          <li><strong>Practice ascending AND descending.</strong> Intervals sound different going up versus going down. Practice both directions.</li>
          <li><strong>Listen for intervals in real music.</strong> When you hear a melody, try to identify the intervals between consecutive notes. Start with simple melodies and work up.</li>
        </ul>
        <p>
          For a complete ear training guide, see our <a href="/ear-training">ear training for musicians</a> article.
        </p>

        <h2>Why Intervals Matter for Songwriters</h2>
        <p>
          If you write songs, intervals give you <strong>conscious control over emotional effect</strong>:
        </p>
        <ul>
          <li>A melody that moves mostly by 2nds (stepwise motion) sounds smooth and gentle.</li>
          <li>A melody that leaps by 4ths, 5ths, or octaves sounds bold and dramatic.</li>
          <li>A chorus melody that starts with a large upward leap feels powerful and exciting.</li>
          <li>Chromatic movement (half steps) creates tension and sophistication.</li>
        </ul>
        <p>
          The most memorable melodies combine stepwise motion with occasional leaps. The leaps create memorable moments; the steps create smooth connections between them.
        </p>

        <h2>Next Steps</h2>
        <p>
          Intervals are the foundation — now build on them:
        </p>
        <ul>
          <li><a href="/music-theory-basics">Music Theory Basics</a> — The complete beginner&apos;s overview</li>
          <li><a href="/scales-and-modes">Scales and Modes</a> — See how intervals form scales</li>
          <li><a href="/chord-progressions">Chord Progressions</a> — See how intervals form chords and progressions</li>
          <li><a href="/ear-training">Ear Training</a> — Learn to hear intervals in real music</li>
        </ul>
        <p>
          For a structured, comprehensive course that teaches intervals, scales, chords, and songwriting application together, we recommend Jake Lizzio&apos;s Theory and Songwriting Course — 45 lessons with 100+ PDFs, lifetime access, and a 15-day money-back guarantee.
        </p>
      </div>
    </article>
  );
}
