import Image from 'next/image';
import { createMetadata } from '@/lib/metadata';
import AffiliateCTA from '@/components/AffiliateCTA';

export const metadata = createMetadata({
  title: 'Chord Progressions: The Complete Guide',
  description: 'Master chord progressions from basic I-IV-V to advanced jazz and modal harmony. Learn the most common progressions with examples from popular songs.',
  path: '/chord-progressions',
});

export default function ChordProgressionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Chord Progressions: The Complete Guide',
    description: 'Master chord progressions from basic I-IV-V to advanced harmony.',
    author: { '@type': 'Organization', name: 'MusicTheory.xyz' },
    datePublished: '2026-02-15',
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <p className="text-sm text-gray-400 mb-6 bg-dark-700/50 border border-dark-600 rounded-lg px-4 py-2 inline-block">
        📋 This page contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

      <div className="relative h-64 md:h-80 w-full mb-12 rounded-2xl overflow-hidden">
        <Image src="/images/guitar-neck.jpg" alt="Guitar neck" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">Chord Progressions: The Complete Guide</h1>
        </div>
      </div>
      <p className="text-gray-400 text-lg mb-8">Published February 15, 2026 · 14 min read</p>

      <div className="prose-theory">
        <p>
          Chord progressions are the backbone of virtually every song you&apos;ve ever heard. Whether it&apos;s a simple three-chord punk anthem or a sophisticated jazz ballad, the sequence of chords — the <strong>chord progression</strong> — is what drives the emotional arc of the music forward.
        </p>
        <p>
          Understanding chord progressions is one of the most powerful skills a musician can develop. Once you recognize how progressions work, you&apos;ll be able to learn songs by ear, write your own music more confidently, and understand why certain songs make you feel the way they do.
        </p>
        <p>
          In this guide, we&apos;ll start with the fundamentals of how chords relate to each other, explore the most common progressions in popular music, and work our way up to more advanced harmonic concepts that will give your music a professional edge.
        </p>

        <h2>How Chord Progressions Work: The Roman Numeral System</h2>
        <p>
          Before we dive into specific progressions, you need to understand the system musicians use to describe them. Instead of referring to chords by their letter names (C, Am, F, G), we use <strong>Roman numerals</strong> that represent each chord&apos;s position within a key.
        </p>
        <p>
          This system is powerful because it&apos;s <strong>key-independent</strong>. A I-IV-V-I progression works the same way whether you&apos;re in C major (C-F-G-C), G major (G-C-D-G), or any other key. Once you learn a progression as Roman numerals, you can play it in any key instantly.
        </p>
        <p>
          In any major key, the seven diatonic chords follow this pattern:
        </p>
        <ul>
          <li><strong>I</strong> — Major (the tonic, home base)</li>
          <li><strong>ii</strong> — Minor</li>
          <li><strong>iii</strong> — Minor</li>
          <li><strong>IV</strong> — Major (the subdominant)</li>
          <li><strong>V</strong> — Major (the dominant)</li>
          <li><strong>vi</strong> — Minor (the relative minor)</li>
          <li><strong>vii°</strong> — Diminished</li>
        </ul>
        <p>
          Uppercase numerals = major chords. Lowercase = minor. The ° symbol means diminished. This pattern is identical in every major key — memorize it once, and you&apos;ve unlocked harmony in all 12 keys.
        </p>

        <h2>The 6 Most Common Chord Progressions</h2>
        <p>
          These progressions account for an enormous percentage of popular music. Learning to recognize and play them will give you a massive head start in both songwriting and playing by ear.
        </p>

        <h3>1. I — V — vi — IV (The Pop Progression)</h3>
        <p>
          This is arguably the most popular chord progression in modern music. It sounds triumphant, uplifting, and emotionally satisfying. In the key of C: <strong>C — G — Am — F</strong>.
        </p>
        <p>
          Songs that use this progression include &ldquo;Let It Be&rdquo; by The Beatles, &ldquo;No Woman No Cry&rdquo; by Bob Marley, &ldquo;Someone Like You&rdquo; by Adele, &ldquo;With or Without You&rdquo; by U2, and literally hundreds of other hits. There&apos;s even a comedy video called &ldquo;4 Chords&rdquo; by Axis of Awesome that plays dozens of songs seamlessly using just this one progression.
        </p>
        <p>
          <strong>Why it works:</strong> The progression starts on the strong, stable I chord, moves to the dominant V for energy, drops to the emotional vi (relative minor), then resolves through the warm IV back to I. It creates a perfect balance of tension and release.
        </p>

        <h3>2. I — IV — V — I (The Classic Progression)</h3>
        <p>
          This is the oldest and most fundamental progression in Western music. In C: <strong>C — F — G — C</strong>. It&apos;s the foundation of rock &apos;n&apos; roll, country, folk, blues, and countless other genres.
        </p>
        <p>
          The three chords — I, IV, and V — are called the <strong>primary triads</strong>. Together, they contain every note of the major scale, which is why they sound so complete. Many legendary musicians built entire careers on these three chords alone.
        </p>

        <h3>3. vi — IV — I — V (The Emotional Progression)</h3>
        <p>
          Starting on the vi chord gives this progression a more emotional, dramatic feel compared to starting on the I. In C: <strong>Am — F — C — G</strong>.
        </p>
        <p>
          You&apos;ll hear this in &ldquo;Numb&rdquo; by Linkin Park, &ldquo;Africa&rdquo; by Toto, &ldquo;Complicated&rdquo; by Avril Lavigne, and many other emotionally charged songs. It&apos;s essentially the same four chords as the I-V-vi-IV progression, just starting from a different point — which completely changes the emotional character.
        </p>

        <h3>4. I — vi — IV — V (The &apos;50s Progression)</h3>
        <p>
          Also called the doo-wop progression, this was the sound of 1950s rock and pop. In C: <strong>C — Am — F — G</strong>. Think &ldquo;Stand By Me&rdquo; by Ben E. King, &ldquo;Every Breath You Take&rdquo; by The Police, and &ldquo;Unchained Melody.&rdquo;
        </p>
        <p>
          The move from I to vi creates a beautiful, bittersweet quality. It sounds nostalgic and warm, which is why it keeps coming back in modern music despite being over 70 years old.
        </p>

        <h3>5. ii — V — I (The Jazz Progression)</h3>
        <p>
          The ii-V-I is the most important progression in jazz. In C: <strong>Dm7 — G7 — Cmaj7</strong>. Nearly every jazz standard contains multiple ii-V-I progressions, often in different keys.
        </p>
        <p>
          <strong>Why it works:</strong> The ii chord prepares the ear for the V (they share two notes), and the V creates strong tension that resolves to I. Using seventh chords adds richness and sophistication to the sound.
        </p>
        <p>
          Even if you don&apos;t play jazz, the ii-V-I is incredibly useful. Replacing a IV chord with a ii chord in pop progressions adds subtle sophistication without changing the fundamental harmonic function.
        </p>

        <h3>6. I — V — vi — iii — IV — I — IV — V (The Canon Progression)</h3>
        <p>
          Based on Pachelbel&apos;s Canon in D, this 8-chord progression has been borrowed endlessly. In C: <strong>C — G — Am — Em — F — C — F — G</strong>. You&apos;ll hear it in &ldquo;Basket Case&rdquo; by Green Day, &ldquo;Graduation&rdquo; by Vitamin C, and many wedding songs.
        </p>
        <p>
          Its length gives it a stately, flowing quality that works beautifully for emotional moments and cinematic builds.
        </p>

        <h2>Minor Key Progressions</h2>
        <p>
          Everything above focuses on major keys, but minor keys have their own set of powerful progressions. In a natural minor key, the diatonic chords are:
        </p>
        <ul>
          <li><strong>i</strong> — Minor</li>
          <li><strong>ii°</strong> — Diminished</li>
          <li><strong>III</strong> — Major</li>
          <li><strong>iv</strong> — Minor</li>
          <li><strong>v</strong> — Minor (or V major with harmonic minor)</li>
          <li><strong>VI</strong> — Major</li>
          <li><strong>VII</strong> — Major</li>
        </ul>

        <h3>i — VI — III — VII (The Andalusian Cadence Variant)</h3>
        <p>
          In A minor: <strong>Am — F — C — G</strong>. This is actually the same notes as vi-IV-I-V in C major, but the minor context gives it a completely different feel. It&apos;s dark, driving, and powerful.
        </p>

        <h3>i — iv — v — i</h3>
        <p>
          The minor equivalent of I-IV-V-I. In A minor: <strong>Am — Dm — Em — Am</strong>. This is the foundation of countless rock and metal songs. The all-minor quality creates a brooding, intense atmosphere.
        </p>

        <h3>i — VII — VI — V (The Descending Minor)</h3>
        <p>
          In A minor: <strong>Am — G — F — E</strong>. Note the E major chord — this comes from the harmonic minor scale and creates a strong pull back to the i chord. This progression descends stepwise through the bass notes, creating a dramatic, almost cinematic quality. Think &ldquo;Stairway to Heaven&rdquo; (verse section) or &ldquo;Hit the Road Jack.&rdquo;
        </p>

        <h2>Beyond the Basics: Advanced Techniques</h2>

        <h3>Secondary Dominants</h3>
        <p>
          A <strong>secondary dominant</strong> is a chord borrowed from outside the key that acts as the V chord of a chord other than the tonic. For example, in C major, the normal iii chord is E minor. But if you play <strong>E major</strong> before A minor (vi), the E major acts as the V of vi — written as <strong>V/vi</strong>.
        </p>
        <p>
          Secondary dominants add unexpected color and movement. The most common is V/V (in C major: D major, which pulls toward G). You hear this in Beatles songs constantly — it&apos;s one of the secrets to their harmonic richness.
        </p>

        <h3>Modal Interchange (Borrowed Chords)</h3>
        <p>
          Modal interchange means borrowing chords from the parallel minor (or other parallel modes) to use in a major key context. The most commonly borrowed chords are:
        </p>
        <ul>
          <li><strong>iv</strong> — Minor iv in a major key (Fm in C major). Creates a beautiful, bittersweet quality.</li>
          <li><strong>bVII</strong> — Flat seven major (Bb in C major). Adds a rock/anthemic quality.</li>
          <li><strong>bVI</strong> — Flat six major (Ab in C major). Creates dramatic, cinematic moments.</li>
          <li><strong>bIII</strong> — Flat three major (Eb in C major). Sounds expansive and unexpected.</li>
        </ul>
        <p>
          Radiohead, Coldplay, and many film composers use modal interchange extensively. It&apos;s one of the most effective ways to make your progressions sound more sophisticated without getting too complex.
        </p>

        <h3>Pedal Tones</h3>
        <p>
          A pedal tone is a single bass note that stays constant while the chords above it change. This creates tension as some chords clash with the pedal and resolution when they align. It&apos;s a simple technique with a dramatic effect — common in film scores, ambient music, and many pop songs.
        </p>

        <h3>Chromatic Mediants</h3>
        <p>
          Chromatic mediants are chords whose roots are a third apart but don&apos;t belong to the same key. For example, moving from C major to E major or Ab major. These jumps sound magical and unexpected — they&apos;re a staple of film music (John Williams uses them constantly) and can add wow-factor moments to your songs.
        </p>
      </div>

      <div className="my-12">
        <AffiliateCTA />
      </div>

      <div className="prose-theory">
        <h2>How to Write Your Own Chord Progressions</h2>
        <p>
          Now that you understand how progressions work, here&apos;s a practical approach to writing your own:
        </p>
        <ul>
          <li><strong>Start with a key.</strong> Pick any major or minor key you&apos;re comfortable with.</li>
          <li><strong>Choose your starting chord.</strong> Starting on I sounds stable and confident. Starting on vi sounds emotional. Starting on IV sounds anthemic.</li>
          <li><strong>Follow the pull.</strong> Certain chords naturally lead to others. V wants to go to I. ii wants to go to V. IV can go almost anywhere. Follow what sounds good to your ear.</li>
          <li><strong>Use 3-4 chords.</strong> Simplicity is powerful. Most great songs use 3-4 chords per section. You can always add complexity later.</li>
          <li><strong>Vary between sections.</strong> Use different progressions for verses and choruses. If your verse is minor-heavy, try a more major chorus for contrast.</li>
          <li><strong>Experiment with rhythm.</strong> The same chords sound completely different depending on strumming pattern, tempo, and how long you hold each chord. Try spending two bars on some chords and one bar on others.</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <p>
          As you develop your chord progression skills, watch out for these pitfalls:
        </p>
        <ul>
          <li><strong>Changing chords too often.</strong> Beginners sometimes change chords every beat. Give each chord room to breathe — usually at least one full measure.</li>
          <li><strong>Ignoring voice leading.</strong> Smooth progressions often have notes that move by small intervals between chords. Pay attention to the top note of each chord and try to create a smooth melodic line.</li>
          <li><strong>Never resolving.</strong> Tension needs release. If you use lots of dissonant or unstable chords, make sure you eventually come home to the tonic.</li>
          <li><strong>Overcomplicating things.</strong> Complex doesn&apos;t mean better. &ldquo;Imagine&rdquo; by John Lennon and &ldquo;Hallelujah&rdquo; by Leonard Cohen are masterpieces built on relatively simple progressions.</li>
        </ul>

        <h2>Training Your Ear for Progressions</h2>
        <p>
          The ultimate goal is to <strong>hear</strong> chord progressions, not just know them intellectually. Here&apos;s how to develop this skill:
        </p>
        <ul>
          <li><strong>Listen for the bass.</strong> The bass note usually tells you the root of each chord. Focus on the lowest notes in any recording.</li>
          <li><strong>Identify major vs. minor.</strong> Before naming the specific chord, just determine if it sounds happy (major) or sad (minor).</li>
          <li><strong>Find the I chord.</strong> The I chord is &ldquo;home&rdquo; — the chord that feels most resolved and final. Once you find it, everything else is relative to it.</li>
          <li><strong>Practice with songs you know.</strong> Take 10 of your favorite songs and figure out their chord progressions. You&apos;ll be surprised how many share the same underlying structure.</li>
        </ul>
        <p>
          For a deeper guide on developing your ear, check out our <a href="/ear-training">ear training for musicians</a> article.
        </p>

        <h2>Next Steps</h2>
        <p>
          Chord progressions are where theory meets creativity. The more progressions you learn and the better your ear becomes, the more fluently you&apos;ll be able to write and play music that moves people.
        </p>
        <p>
          If you want a structured approach to mastering chord progressions, harmony, and songwriting together, Jake Lizzio&apos;s Theory and Songwriting Course covers all of this in depth with 45 video lessons, practice exercises, and over 100 PDF resources. It&apos;s the most comprehensive course we&apos;ve found for turning theory knowledge into songwriting ability.
        </p>
        <ul>
          <li><a href="/music-theory-basics">Music Theory Basics</a> — Review the fundamentals</li>
          <li><a href="/scales-and-modes">Scales and Modes</a> — Understand the scales behind your chords</li>
          <li><a href="/music-theory-for-songwriters">Music Theory for Songwriters</a> — Apply theory to songwriting</li>
          <li><a href="/how-to-write-a-song">How to Write a Song</a> — Put progressions into practice</li>
        </ul>
      </div>
    </article>
  );
}
