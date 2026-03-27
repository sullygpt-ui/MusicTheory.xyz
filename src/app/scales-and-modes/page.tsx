import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'Scales and Modes: Everything You Need to Know',
  description: 'From major and minor scales to the seven modes — understand how scales create different musical moods and colors. Complete guide with examples.',
  path: '/scales-and-modes',
});

export default function ScalesAndModesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Scales and Modes: Everything You Need to Know',
    description: 'Complete guide to scales and modes in music theory.',
    author: { '@type': 'Organization', name: 'MusicTheory.xyz' },
    datePublished: '2026-01-30',
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/guitar-closeup.jpg" alt="Guitar closeup" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Scales and Modes: Everything You Need to Know</h1>
        </div>
      </div>
      <p className="text-gray-400 text-lg mb-8">Published January 30, 2026 · 15 min read</p>

      <div className="prose-theory">
        <p>
          Scales are the DNA of music. Every melody you&apos;ve ever hummed, every chord progression that moved you, and every solo that gave you chills — all built from scales. Understanding scales and modes gives you access to an enormous palette of musical colors, from the brightness of major to the darkness of Phrygian to the dreaminess of Lydian.
        </p>
        <p>
          This guide covers everything you need to know about scales and modes, from the essential major and minor scales through all seven modes of the major scale, pentatonic scales, blues scales, and how to actually use them in your music.
        </p>

        <h2>What Is a Scale?</h2>
        <p>
          A scale is a collection of notes arranged in ascending or descending order by pitch. Each scale has a specific pattern of intervals (distances between notes) that gives it its unique sound and character.
        </p>
        <p>
          Think of a scale as a <strong>vocabulary</strong> for a particular musical mood. When you choose a scale, you&apos;re choosing a set of notes that work well together — the &ldquo;language&rdquo; of your piece. Different scales create different emotional atmospheres, and learning to hear and use them is one of the most powerful skills in music.
        </p>

        <h2>The Major Scale</h2>
        <p>
          The major scale is the foundation of Western music theory. It&apos;s the scale that sounds like &ldquo;do-re-mi-fa-sol-la-ti-do&rdquo; — bright, happy, and resolved. Almost everything in music theory — chords, keys, harmony, and modes — is built on or measured relative to the major scale.
        </p>
        <p>
          The major scale follows this pattern of whole steps (W) and half steps (H):
        </p>
        <p>
          <strong>W — W — H — W — W — W — H</strong>
        </p>
        <p>
          Starting from C (the simplest key, no sharps or flats):
        </p>
        <p>
          <strong>C — D — E — F — G — A — B — C</strong>
        </p>
        <p>
          You can build a major scale starting from any of the 12 notes using the same W-W-H-W-W-W-H formula. The starting note becomes the <strong>root</strong> (or tonic) of the scale and the key.
        </p>

        <h2>The Natural Minor Scale</h2>
        <p>
          The natural minor scale is the major scale&apos;s darker sibling. Where major sounds happy and bright, minor sounds sad, melancholic, or mysterious. The formula is:
        </p>
        <p>
          <strong>W — H — W — W — H — W — W</strong>
        </p>
        <p>
          Starting from A: <strong>A — B — C — D — E — F — G — A</strong>
        </p>
        <p>
          Notice something important: the A natural minor scale uses <strong>exactly the same notes</strong> as the C major scale, just starting from a different point. This relationship is called <strong>relative major and minor</strong>. Every major key has a relative minor (starting from the 6th degree), and every minor key has a relative major (starting from the 3rd degree).
        </p>

        <h2>Harmonic and Melodic Minor</h2>
        <p>
          The natural minor scale has two important variations:
        </p>
        <p>
          <strong>Harmonic minor</strong> raises the 7th degree by a half step. In A minor: A — B — C — D — E — F — <strong>G#</strong> — A. This creates a strong V chord (E major instead of E minor) that pulls powerfully back to the tonic. The exotic-sounding gap between the 6th and 7th degrees (F to G#, an augmented 2nd) gives harmonic minor its distinctive Middle Eastern flavor.
        </p>
        <p>
          <strong>Melodic minor</strong> raises both the 6th and 7th degrees when ascending: A — B — C — D — E — <strong>F# — G#</strong> — A. When descending, it reverts to natural minor. This eliminates the awkward augmented 2nd gap of the harmonic minor while still providing a strong pull to the tonic. Melodic minor is widely used in jazz improvisation.
        </p>

        <h2>The Seven Modes of the Major Scale</h2>
        <p>
          Modes are one of the most powerful and misunderstood concepts in music theory. The basic idea is simple: <strong>a mode is what you get when you start a major scale from a different note</strong>. Each starting point creates a different pattern of whole and half steps, which produces a different mood.
        </p>
        <p>
          Using C major as our parent scale, here are all seven modes:
        </p>

        <h3>1. Ionian Mode (starts on the 1st degree)</h3>
        <p>
          <strong>C — D — E — F — G — A — B — C</strong>
        </p>
        <p>
          This is just the major scale by another name. Bright, happy, stable. The reference point for all other modes. Used in virtually every genre of Western music.
        </p>

        <h3>2. Dorian Mode (starts on the 2nd degree)</h3>
        <p>
          <strong>D — E — F — G — A — B — C — D</strong>
        </p>
        <p>
          Dorian is a minor mode with a brighter feel than natural minor, thanks to its raised 6th degree. It sounds sophisticated, jazzy, and slightly hopeful even though it&apos;s minor. Think &ldquo;So What&rdquo; by Miles Davis, &ldquo;Oye Como Va&rdquo; by Santana, or &ldquo;Eleanor Rigby&rdquo; by The Beatles.
        </p>
        <p>
          <strong>Character:</strong> Minor but warm. Sophisticated. Smooth. Perfect for jazz, funk, and R&B.
        </p>

        <h3>3. Phrygian Mode (starts on the 3rd degree)</h3>
        <p>
          <strong>E — F — G — A — B — C — D — E</strong>
        </p>
        <p>
          Phrygian is the darkest and most exotic-sounding of the common modes. Its distinctive feature is the half step between the 1st and 2nd degrees, which gives it a Spanish, Middle Eastern, or metal flavor. Think flamenco guitar or heavy metal riffs.
        </p>
        <p>
          <strong>Character:</strong> Dark, exotic, intense, mysterious. Used in metal, flamenco, and world music.
        </p>

        <h3>4. Lydian Mode (starts on the 4th degree)</h3>
        <p>
          <strong>F — G — A — B — C — D — E — F</strong>
        </p>
        <p>
          Lydian is a major mode with a dreamy, floating quality created by its raised 4th degree (#4). It sounds ethereal, bright, and slightly otherworldly. Film composers love Lydian — John Williams and Joe Satriani use it extensively.
        </p>
        <p>
          <strong>Character:</strong> Dreamy, bright, floating, magical. Perfect for creating a sense of wonder.
        </p>

        <h3>5. Mixolydian Mode (starts on the 5th degree)</h3>
        <p>
          <strong>G — A — B — C — D — E — F — G</strong>
        </p>
        <p>
          Mixolydian is a major mode with a bluesy edge, thanks to its lowered 7th degree. It sounds confident, laid-back, and slightly edgy. It&apos;s the sound of classic rock, blues rock, and jam bands. Think &ldquo;Sweet Home Alabama&rdquo; by Lynyrd Skynyrd or &ldquo;Norwegian Wood&rdquo; by The Beatles.
        </p>
        <p>
          <strong>Character:</strong> Bluesy, rocking, confident. The dominant scale — perfect for rock and blues.
        </p>

        <h3>6. Aeolian Mode (starts on the 6th degree)</h3>
        <p>
          <strong>A — B — C — D — E — F — G — A</strong>
        </p>
        <p>
          This is the natural minor scale. Dark, sad, emotional, introspective. The foundation of minor-key music in every genre from classical to metal to pop ballads.
        </p>

        <h3>7. Locrian Mode (starts on the 7th degree)</h3>
        <p>
          <strong>B — C — D — E — F — G — A — B</strong>
        </p>
        <p>
          Locrian is the most dissonant and unstable mode. Its root chord is diminished (no perfect 5th), making it nearly impossible to use as a true tonal center. It&apos;s rarely used in its pure form but appears in metal, progressive rock, and experimental music for its extreme darkness.
        </p>
      </div>

      <div className="my-12">
        <AffiliateCTA />
      </div>

      <div className="prose-theory">
        <h2>Pentatonic Scales</h2>
        <p>
          Pentatonic scales use just five notes instead of seven. By removing the most dissonant intervals, pentatonic scales are incredibly versatile — almost everything you play sounds good. They&apos;re the most widely used scales in popular music worldwide.
        </p>
        <p>
          <strong>Major pentatonic</strong> (C): C — D — E — G — A. Takes the major scale and removes the 4th and 7th degrees. Sounds bright, open, and friendly. Think country, folk, and pop melodies.
        </p>
        <p>
          <strong>Minor pentatonic</strong> (A): A — C — D — E — G. The backbone of blues, rock, and virtually every guitar solo you&apos;ve ever heard. If you only learn one scale for improvisation, make it the minor pentatonic.
        </p>

        <h2>The Blues Scale</h2>
        <p>
          The blues scale is the minor pentatonic with one added note — the <strong>blue note</strong> (b5). In A: A — C — D — <strong>Eb</strong> — E — G. That blue note adds a gritty, tense, bluesy character that defines the sound of blues, rock, jazz, and much of American popular music.
        </p>

        <h2>How to Practice Scales</h2>
        <p>
          Knowing scales intellectually is only half the battle. You need to get them into your fingers and your ears. Here&apos;s a practical approach:
        </p>
        <ul>
          <li><strong>Learn the pattern on your instrument.</strong> Start with major and minor scales in one position, then expand to cover the full range.</li>
          <li><strong>Sing while you play.</strong> This connects your ear to the notes. Sing each note as you play it.</li>
          <li><strong>Practice in all 12 keys.</strong> Don&apos;t just learn C major — learn to play and hear scales starting from every note.</li>
          <li><strong>Play scales in thirds, fourths, and other intervals.</strong> Instead of C-D-E-F, try C-E-D-F-E-G. This builds dexterity and musicality simultaneously.</li>
          <li><strong>Improvise over backing tracks.</strong> Find a backing track in a specific key and practice improvising using the corresponding scale. This is where theory becomes music.</li>
          <li><strong>Learn modes by comparing to major.</strong> Don&apos;t think of Dorian as &ldquo;the second mode of the major scale.&rdquo; Think of it as a minor scale with a raised 6th. Compare each mode to major or minor to understand its unique flavor.</li>
        </ul>

        <h2>Choosing the Right Scale for Your Song</h2>
        <p>
          Different scales create different moods. Here&apos;s a quick reference:
        </p>
        <ul>
          <li><strong>Happy, bright, uplifting →</strong> Major (Ionian), Lydian, major pentatonic</li>
          <li><strong>Sad, melancholic, emotional →</strong> Natural minor (Aeolian), Dorian</li>
          <li><strong>Bluesy, gritty, raw →</strong> Minor pentatonic, blues scale, Mixolydian</li>
          <li><strong>Dark, intense, heavy →</strong> Phrygian, harmonic minor</li>
          <li><strong>Dreamy, ethereal, magical →</strong> Lydian</li>
          <li><strong>Sophisticated, jazzy →</strong> Dorian, melodic minor, Lydian</li>
          <li><strong>Exotic, Middle Eastern →</strong> Phrygian, harmonic minor, Phrygian dominant</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          Scales and modes are the foundation of melody and improvisation. Combine them with your knowledge of chords and harmony to create complete music:
        </p>
        <ul>
          <li><a href="/intervals-explained">Musical Intervals Explained</a> — Understand the building blocks of every scale</li>
          <li><a href="/chord-progressions">Chord Progressions Guide</a> — Build harmony from your scales</li>
          <li><a href="/music-theory-basics">Music Theory Basics</a> — Review the fundamentals</li>
          <li><a href="/ear-training">Ear Training</a> — Learn to hear scales and modes in real music</li>
        </ul>
        <p>
          For a comprehensive course that teaches scales, modes, and how to apply them to songwriting, check out Jake Lizzio&apos;s Theory and Songwriting Course. It covers all seven modes with practical exercises and real-song examples across 45 video lessons.
        </p>
      </div>
    </article>
  );
}
