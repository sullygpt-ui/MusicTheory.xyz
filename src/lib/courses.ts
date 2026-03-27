export interface Course {
  slug: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  affiliateSlug: string;
  features: string[];
  badge?: string;
  image?: string;
}

export const courses: Course[] = [
  {
    slug: 'theory-songwriting',
    name: 'Theory and Songwriting Course',
    description: 'The complete music theory and songwriting course by Jake Lizzio. 45 lessons covering chord progressions, improvisation, ear training, song structure, rhythm & groove, and composing full songs. Includes 100+ downloadable PDFs.',
    price: '$270',
    affiliateSlug: 'songwriting',
    features: ['45 video lessons', '100+ downloadable PDFs', 'Lifetime access', '15-day money-back guarantee', 'Ear training exercises', 'Full song composition'],
    badge: 'Featured',
    image: '/images/sheet-music.jpg',
  },
  {
    slug: 'rrg1',
    name: 'Real Rhythm Guitar Level 1',
    description: 'Build rock-solid rhythm guitar foundations with 22 video lessons covering counting, strumming patterns, chord changes, and reading chord sheets.',
    price: '$45',
    affiliateSlug: 'shop',
    features: ['22 video lessons', 'Printable PDF workbook', 'Lifetime access', 'Beginner-friendly'],
    image: '/images/playing-guitar.jpg',
  },
  {
    slug: 'rrg2',
    name: 'Real Rhythm Guitar Level 2',
    description: 'Take your rhythm playing to the next level with advanced strumming, syncopation, fingerpicking patterns, and complex time signatures.',
    price: '$45',
    affiliateSlug: 'shop',
    features: ['Advanced strumming', 'Syncopation mastery', 'Fingerpicking', 'Complex rhythms'],
    image: '/images/guitar-neck.jpg',
  },
  {
    slug: 'codex',
    name: 'Chord Progression Codex',
    description: 'A massive collection of chord progressions organized by mood, genre, and difficulty. Your go-to reference for writing and playing.',
    price: '$45',
    affiliateSlug: 'shop',
    features: ['Hundreds of progressions', 'Organized by mood/genre', 'Digital download', 'Instant access'],
    image: '/images/guitar-closeup.jpg',
  },
  {
    slug: 'blues-crash-course',
    name: '5-Day Blues Guitar Crash Course',
    description: 'Learn the essentials of blues guitar in just 5 days. Covers blues scales, shuffles, turnarounds, and classic licks.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['5 focused lessons', 'Blues fundamentals', 'Classic licks', 'Self-paced'],
    image: '/images/amp.jpg',
  },
  {
    slug: 'interval-course',
    name: 'Guitar Interval Course',
    description: 'Master intervals on the fretboard — the building blocks of melody, harmony, and ear training.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['Interval training', 'Ear development', 'Fretboard mastery', 'Self-paced'],
    image: '/images/strings-closeup.jpg',
  },
  {
    slug: 'barre-chords',
    name: 'Mastering Barre Chord Technique',
    description: 'Finally conquer barre chords with proper technique, strength-building exercises, and practical applications.',
    price: 'Pay What You Can',
    affiliateSlug: 'shop',
    features: ['Proper technique', 'Strength exercises', 'Common shapes', 'Self-paced'],
    image: '/images/guitar-neck.jpg',
  },
];
